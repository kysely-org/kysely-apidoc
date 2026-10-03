[**kysely**](../index.md)

***

[kysely](../modules.md) / Generated

# Type Alias: Generated\<S\>

> **Generated**\<`S`\> = [`ColumnType`](ColumnType.md)\<`S`, `S` \| `undefined`, `S`\>

Defined in: [util/column-type.ts:57](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L57)

A shortcut for defining database-generated columns. The type
is the same for all selects, inserts and updates but the
column is optional for inserts and updates.

The update type is `S` instead of `S | undefined` because updates are always
optional --> no need to specify optionality.
```

## Type Parameters

### S

`S`
