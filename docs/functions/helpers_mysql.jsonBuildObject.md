[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mysql](../modules/helpers_mysql.md) / jsonBuildObject

# Function: jsonBuildObject()

> **jsonBuildObject**\<`O`\>(`obj`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<\{ \[K in string \| number \| symbol\]: O\[K\] extends Expression\<V\> ? ShallowDehydrateValue\<V\> : never \}\>\>

Defined in: [helpers/mysql.ts:167](https://github.com/kysely-org/kysely/blob/master/src/helpers/mysql.ts#L167)

The MySQL `json_object` function.

NOTE: This helper is only guaranteed to fully work with the built-in `MysqlDialect`.
While the produced SQL is compatible with all MySQL databases, some third-party dialects
may not parse the nested JSON into objects. In these cases you can use the built in
`ParseJSONResultsPlugin` to parse the results.

### Examples

```ts
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

result[0]?.id
result[0]?.name.first
result[0]?.name.last
result[0]?.name.full
```

The generated SQL (MySQL):

```sql
select "id", json_object(
  'first', first_name,
  'last', last_name,
  'full', concat(`first_name`, ?, `last_name`)
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
