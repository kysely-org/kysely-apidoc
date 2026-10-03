[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mssql](../modules/helpers_mssql.md) / jsonBuildObject

# Function: jsonBuildObject()

> **jsonBuildObject**\<`O`\>(`obj`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<\{ \[K in string \| number \| symbol\]: O\[K\] extends Expression\<V\> ? ShallowDehydrateValue\<V\> : never \}\>\>

Defined in: [helpers/mssql.ts:228](https://github.com/kysely-org/kysely/blob/master/src/helpers/mssql.ts#L228)

The MS SQL Server `json_query` function, single argument variant.

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
import { jsonBuildObject } from 'kysely/helpers/mssql'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonBuildObject({
      first: eb.ref('first_name'),
      last: eb.ref('last_name'),
      full: eb.fn('concat', ['first_name', eb.val(' '), 'last_name'])
    }).as('name')
  ])
  .execute()
```

The generated SQL (MS SQL Server):

```sql
select "id", json_query(
  '{"'+string_escape(N'first', 'json')+'":"'+string_escape("first_name", 'json')+
  '","'+string_escape(N'last', 'json')+'":"'+string_escape("last_name", 'json')+
  '","'+string_escape(N'full', 'json')+'":"'+string_escape(concat("first_name", ' ', "last_name"), 'json')+'"}'
) as "name"
from "person"
```

## Type Parameters

### O

`O` *extends* `Record`\<`string`, [`Expression`](../interfaces/Expression.md)\<`unknown`\>\>

## Parameters

### obj

`O`

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<\{ \[K in string \| number \| symbol\]: O\[K\] extends Expression\<V\> ? ShallowDehydrateValue\<V\> : never \}\>\>
