[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/mysql](../modules/helpers_mysql.md) / jsonObjectFrom

# Function: jsonObjectFrom()

> **jsonObjectFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> \| `null`\>

Defined in: [helpers/mysql.ts:119](https://github.com/kysely-org/kysely/blob/master/src/helpers/mysql.ts#L119)

A MySQL helper for turning a subquery into a JSON object.

The subquery must only return one row.

NOTE: This helper is only guaranteed to fully work with the built-in `MysqlDialect`.
While the produced SQL is compatible with all MySQL databases, some third-party dialects
may not parse the nested JSON into objects. In these cases you can use the built in
`ParseJSONResultsPlugin` to parse the results.

### Examples

```ts
import { jsonObjectFrom } from 'kysely/helpers/mysql'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonObjectFrom(
      eb.selectFrom('pet')
        .select(['pet.id as pet_id', 'pet.name'])
        .whereRef('pet.owner_id', '=', 'person.id')
        .where('pet.is_favorite', '=', true)
    ).as('favorite_pet')
  ])
  .execute()

result[0]?.id
result[0]?.favorite_pet?.pet_id
result[0]?.favorite_pet?.name
```

The generated SQL (MySQL):

```sql
select `id`, (
  select json_object(
    'pet_id', `obj`.`pet_id`,
    'name', `obj`.`name`
  ) from (
    select `pet`.`id` as `pet_id`, `pet`.`name`
    from `pet`
    where `pet`.`owner_id` = `person`.`id`
    and `pet`.`is_favorite` = ?
  ) as obj
) as `favorite_pet`
from `person`
```

## Type Parameters

### O

`O`

## Parameters

### expr

[`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`O`\>

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> \| `null`\>
