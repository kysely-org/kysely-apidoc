[**kysely**](../index.md)

***

[kysely](../modules.md) / [helpers/postgres](../modules/helpers_postgres.md) / mergeAction

# Function: mergeAction()

> **mergeAction**(): [`RawBuilder`](../interfaces/RawBuilder.md)\<[`MergeAction`](../types/helpers_postgres.MergeAction.md)\>

Defined in: [helpers/postgres.ts:227](https://github.com/kysely-org/kysely/blob/master/src/helpers/postgres.ts#L227)

The PostgreSQL `merge_action` function.

This function can be used in a `returning` clause to get the action that was
performed in a `mergeInto` query. The function returns one of the following
strings: `'INSERT'`, `'UPDATE'`, or `'DELETE'`.

### Examples

```ts
import { mergeAction } from 'kysely/helpers/postgres'

const result = await db
  .mergeInto('person as p')
  .using('person_backup as pb', 'p.id', 'pb.id')
  .whenMatched()
  .thenUpdateSet(({ ref }) => ({
    first_name: ref('pb.first_name'),
    updated_at: ref('pb.updated_at').$castTo<string | null>(),
  }))
  .whenNotMatched()
  .thenInsertValues(({ ref}) => ({
    id: ref('pb.id'),
    first_name: ref('pb.first_name'),
    created_at: ref('pb.updated_at'),
    updated_at: ref('pb.updated_at').$castTo<string | null>(),
  }))
  .returning([mergeAction().as('action'), 'p.id', 'p.updated_at'])
  .execute()

result[0].action
```

The generated SQL (PostgreSQL):

```sql
merge into "person" as "p"
using "person_backup" as "pb" on "p"."id" = "pb"."id"
when matched then update set
  "first_name" = "pb"."first_name",
  "updated_at" = "pb"."updated_at"::text
when not matched then insert values ("id", "first_name", "created_at", "updated_at")
values ("pb"."id", "pb"."first_name", "pb"."updated_at", "pb"."updated_at")
returning merge_action() as "action", "p"."id", "p"."updated_at"
```

## Returns

[`RawBuilder`](../interfaces/RawBuilder.md)\<[`MergeAction`](../types/helpers_postgres.MergeAction.md)\>
