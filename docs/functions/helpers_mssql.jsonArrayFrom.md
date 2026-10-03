[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mssql](../modules/helpers_mssql.md) / jsonArrayFrom

# Function: jsonArrayFrom()

> **jsonArrayFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[]\>

Defined in: [helpers/mssql.ts:82](https://github.com/kysely-org/kysely/blob/master/src/helpers/mssql.ts#L82)

An MS SQL Server helper for aggregating a subquery into a JSON array.

NOTE: This helper only works correctly if you've installed the `ParseJSONResultsPlugin`.
Otherwise the nested selections will be returned as JSON strings.

The plugin can be installed like this:

```ts
import { Kysely, MssqlDialect, ParseJSONResultsPlugin } from 'kysely'
import * as Tarn from 'tarn'
import * as Tedious from 'tedious'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: new MssqlDialect({
    tarn: { options: { max: 10, min: 0 }, ...Tarn },
    tedious: {
      ...Tedious,
      connectionFactory: () => new Tedious.Connection({
        authentication: {
          options: { password: 'password', userName: 'sa' },
          type: 'default',
        },
        options: { database: 'test', port: 21433, trustServerCertificate: true },
        server: 'localhost',
      }),
    },
  }),
  plugins: [new ParseJSONResultsPlugin()]
})
```

### Examples

```ts
import { jsonArrayFrom } from 'kysely/helpers/mssql'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonArrayFrom(
      eb.selectFrom('pet')
        .select(['pet.id as pet_id', 'pet.name'])
        .whereRef('pet.owner_id', '=', 'person.id')
        .orderBy('pet.name')
        .offset(0)
    ).as('pets')
  ])
  .execute()

result[0]?.id
result[0]?.pets[0]?.pet_id
result[0]?.pets[0]?.name
```

The generated SQL (MS SQL Server):

```sql
select "id", (
  select coalesce((select * from (
    select "pet"."id" as "pet_id", "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    order by "pet"."name"
    offset @1 rows
  ) as "agg" for json path, include_null_values), '[]')
) as "pets"
from "person"
```

## Type Parameters

### O

`O`

## Parameters

### expr

[`Expression`](../interfaces/Expression.md)\<`O`\>

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[]\>
