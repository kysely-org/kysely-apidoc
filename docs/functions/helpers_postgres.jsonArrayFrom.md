[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/postgres](../modules/helpers_postgres.md) / jsonArrayFrom

# Function: jsonArrayFrom()

> **jsonArrayFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[]\>

Defined in: [helpers/postgres.ts:59](https://github.com/kysely-org/kysely/blob/master/src/helpers/postgres.ts#L59)

A postgres helper for aggregating a subquery (or other expression) into a JSONB array.

### Examples

<!-- siteExample("select", "Nested array", 110) -->

While kysely is not an ORM and it doesn't have the concept of relations, we do provide
helpers for fetching nested objects and arrays in a single query. In this example we
use the `jsonArrayFrom` helper to fetch person's pets along with the person's id.

Please keep in mind that the helpers under the `kysely/helpers` folder, including
`jsonArrayFrom`, are not guaranteed to work with third party dialects. In order for
them to work, the dialect must automatically parse the `json` data type into
JavaScript JSON values like objects and arrays. Some dialects might simply return
the data as a JSON string. In these cases you can use the built in `ParseJSONResultsPlugin`
to parse the results.

```ts
import { jsonArrayFrom } from 'kysely/helpers/postgres'

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
```

The generated SQL (PostgreSQL):

```sql
select "id", (
  select coalesce(json_agg(agg), '[]') from (
    select "pet"."id" as "pet_id", "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    order by "pet"."name"
  ) as agg
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
