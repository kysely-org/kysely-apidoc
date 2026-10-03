[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/postgres](../modules/helpers_postgres.md) / jsonObjectFrom

# Function: jsonObjectFrom()

> **jsonObjectFrom**\<`O`\>(`expr`): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> \| `null`\>

Defined in: [helpers/postgres.ts:116](https://github.com/kysely-org/kysely/blob/master/src/helpers/postgres.ts#L116)

A postgres helper for turning a subquery (or other expression) into a JSON object.

The subquery must only return one row.

### Examples

<!-- siteExample("select", "Nested object", 120) -->

While kysely is not an ORM and it doesn't have the concept of relations, we do provide
helpers for fetching nested objects and arrays in a single query. In this example we
use the `jsonObjectFrom` helper to fetch person's favorite pet along with the person's id.

Please keep in mind that the helpers under the `kysely/helpers` folder, including
`jsonObjectFrom`, are not guaranteed to work with third-party dialects. In order for
them to work, the dialect must automatically parse the `json` data type into
JavaScript JSON values like objects and arrays. Some dialects might simply return
the data as a JSON string. In these cases you can use the built in `ParseJSONResultsPlugin`
to parse the results.

```ts
import { jsonObjectFrom } from 'kysely/helpers/postgres'

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
```

The generated SQL (PostgreSQL):

```sql
select "id", (
  select to_json(obj) from (
    select "pet"."id" as "pet_id", "pet"."name"
    from "pet"
    where "pet"."owner_id" = "person"."id"
    and "pet"."is_favorite" = $1
  ) as obj
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
