[**kysely**](../index.md)

***

[kysely](../modules.md) / NotNull

# Type Alias: NotNull

> **NotNull** = `object`

Defined in: [util/type-utils.ts:186](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L186)

A type constant for marking a column as not null. Can be used with `$narrowPartial`.

Example:

```ts
import type { NotNull } from 'kysely'

await db.selectFrom('person')
  .where('nullable_column', 'is not', null)
  .selectAll()
  .$narrowType<{ nullable_column: NotNull }>()
  .executeTakeFirstOrThrow()
```

## Properties

### \_\_notNull\_\_

> `readonly` **\_\_notNull\_\_**: unique `symbol`

Defined in: [util/type-utils.ts:186](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L186)
