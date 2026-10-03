[**kysely**](../index.md)

***

[kysely](../modules.md) / NonDehydrateable

# Type Alias: NonDehydrateable\<T\>

> **NonDehydrateable**\<`T`\> = \[`T`\] *extends* \[[`ColumnType`](ColumnType.md)\<infer S, infer I, infer U\>\] ? [`ColumnType`](ColumnType.md)\<`S` & `object`, `I`, `U`\> : `T` & `object`

Defined in: [util/column-type.ts:248](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L248)

Wrap your column type to opt-out from dehydration by [ShallowDehydrateValue](ShallowDehydrateValue.md),
when used by JSON functions, such as the ones used by the relational helpers.

Why need this?

An edge case surfaced in issues where a numeric string column type was actually
not a numeric data type column, but text - and thus shouldn't be dehydrated
to `number`.

Another use case would be, when someone finds a way to keep nested columns hydrated
at runtime, e.g. via a plugin, and wants to prevent dehydration of such columns
at the type level.

### Examples

```ts
import type { NonDehydrateable } from 'kysely'
import { jsonArrayFrom } from 'kysely/helpers/postgres'

const result = await db
  .withTables<{
    my_table: {
      a_column: '1' | '2' | '3',
      another_column: NonDehydrateable<'1' | '2' | '3'>,
      column_too: NonDehydrateable<ColumnType<'1' | '2' | '3'>>
    }
  }>()
  .selectFrom('person')
  .select((eb) => [
    'id',
    jsonArrayFrom(
      eb.selectFrom('my_table')
        .select(['a_column', 'another_column', 'column_too'])
    ).as('related')
  ])
  .execute()
```

In the example above, "a_column" will be dehydrated to `number`
given it is a numeric string - which is normally a numeric data type column
that gets output as a string by underlying database drivers to avoid
precision loss or overflow.

"another_column" and "column_too" will remain as `'1' | '2' | '3'`, given they're
wrapped in `NonDehydrateable`, which prevents their dehydration.

## Type Parameters

### T

`T`
