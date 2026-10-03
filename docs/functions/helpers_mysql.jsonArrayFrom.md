[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mysql](../modules/helpers_mysql.md) / jsonArrayFrom

# Function: jsonArrayFrom()

> **jsonArrayFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[]\>

Defined in: [helpers/mysql.ts:61](https://github.com/kysely-org/kysely/blob/master/src/helpers/mysql.ts#L61)

A MySQL helper for aggregating a subquery into a JSON array.

NOTE: This helper is only guaranteed to fully work with the built-in `MysqlDialect`.
While the produced SQL is compatible with all MySQL databases, some third-party dialects
may not parse the nested JSON into arrays. In these cases you can use the built in
`ParseJSONResultsPlugin` to parse the results.

### Examples

```ts
import { jsonArrayFrom } from 'kysely/helpers/mysql'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonArrayFrom(
      eb.selectFrom('pet')
        .select(['pet.id as pet_id', 'pet.name'])
        .whereRef('pet.owner_id', '=', 'person.id')
        .orderBy('pet.name')
    ).as('pets')
  ])
  .execute()

result[0]?.id
result[0]?.pets[0]?.pet_id
result[0]?.pets[0]?.name
```

The generated SQL (MySQL):

```sql
select `id`, (
  select cast(coalesce(json_arrayagg(json_object(
    'pet_id', `agg`.`pet_id`,
    'name', `agg`.`name`
  )), '[]') as json) from (
    select `pet`.`id` as `pet_id`, `pet`.`name`
    from `pet`
    where `pet`.`owner_id` = `person`.`id`
    order by `pet`.`name`
  ) as `agg`
) as `pets`
from `person`
```

## Type Parameters

### O

`O`

## Parameters

### expr

[`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`O`\>

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[]\>
