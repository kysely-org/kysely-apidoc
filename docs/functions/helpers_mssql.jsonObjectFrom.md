[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mssql](../modules/helpers_mssql.md) / jsonObjectFrom

# Function: jsonObjectFrom()

> **jsonObjectFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> \| `null`\>

Defined in: [helpers/mssql.ts:160](https://github.com/kysely-org/kysely/blob/master/src/helpers/mssql.ts#L160)

An MS SQL Server helper for turning a subquery into a JSON object.

The subquery must only return one row.

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
import { jsonObjectFrom } from 'kysely/helpers/mssql'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonObjectFrom(
      eb.selectFrom('pet')
        .select(['pet.id as pet_id', 'pet.name'])
        .whereRef('pet.owner_id', '=', 'person.id')
        .where('pet.is_favorite', '=', 1)
    ).as('favorite_pet')
  ])
  .execute()

result[0]?.id
result[0]?.favorite_pet?.pet_id
result[0]?.favorite_pet?.name
```

The generated SQL (MS SQL Server):

```sql
select "id", (
  select * from (
    select "pet"."id" as "pet_id", "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    and "pet"."is_favorite" = @1
  ) as "agg" for json path, include_null_values, without_array_wrapper
) as "favorite_pet"
from "person"
```

## Type Parameters

### O

`O`

## Parameters

### expr

[`Expression`](../interfaces/Expression.md)\<`O`\>

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> \| `null`\>
