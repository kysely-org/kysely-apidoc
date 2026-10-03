[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/postgres](../modules/helpers_postgres.md) / jsonBuildObject

# Function: jsonBuildObject()

> **jsonBuildObject**\<`O`\>(`obj`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<\{ \[K in string \| number \| symbol\]: O\[K\] extends Expression\<V\> ? ShallowDehydrateValue\<V\> : never \}\>\>

Defined in: [helpers/postgres.ts:165](https://github.com/kysely-org/kysely/blob/master/src/helpers/postgres.ts#L165)

The PostgreSQL `json_build_object` function.

NOTE: This helper is only guaranteed to fully work with the built-in `PostgresDialect`.
While the produced SQL is compatible with all PostgreSQL databases, some third-party dialects
may not parse the nested JSON into objects. In these cases you can use the built in
`ParseJSONResultsPlugin` to parse the results.

### Examples

```ts
import { sql } from 'kysely'
import { jsonBuildObject } from 'kysely/helpers/postgres'

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

The generated SQL (PostgreSQL):

```sql
select "id", json_build_object(
  'first', first_name,
  'last', last_name,
  'full', first_name || ' ' || last_name
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
