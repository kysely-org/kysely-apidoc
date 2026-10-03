[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/sqlite](../modules/helpers_sqlite.md) / jsonBuildObject

# Function: jsonBuildObject()

> **jsonBuildObject**\<`O`\>(`obj`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<\{ \[K in string \| number \| symbol\]: O\[K\] extends Expression\<V\> ? ShallowDehydrateValue\<V\> : never \}\>\>

Defined in: [helpers/sqlite.ts:209](https://github.com/kysely-org/kysely/blob/master/src/helpers/sqlite.ts#L209)

The SQLite `json_object` function.

NOTE: This helper only works correctly if you've installed the `ParseJSONResultsPlugin`.
Otherwise the nested selections will be returned as JSON strings.

The plugin can be installed like this:

```ts
import * as Sqlite from 'better-sqlite3'
import { Kysely, ParseJSONResultsPlugin, SqliteDialect } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:')
  }),
  plugins: [new ParseJSONResultsPlugin()]
})
```

### Examples

```ts
import { sql } from 'kysely'
import { jsonBuildObject } from 'kysely/helpers/sqlite'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonBuildObject({
      first: eb.ref('first_name'),
      last: eb.ref('last_name'),
      full: sql<string>`first_name || ' ' || last_name`
    }).as('name')
  ])
  .execute()

result[0]?.id
result[0]?.name.first
result[0]?.name.last
result[0]?.name.full
```

The generated SQL (SQLite):

```sql
select "id", json_object(
  'first', first_name,
  'last', last_name,
  'full', "first_name" || ' ' || "last_name"
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
