[**kysely**](../index.md)

***

[kysely](../modules.md) / ColumnType

# Type Alias: ColumnType\<SelectType, InsertType, UpdateType\>

> **ColumnType**\<`SelectType`, `InsertType`, `UpdateType`\> = `object`

Defined in: [util/column-type.ts:38](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L38)

This type can be used to specify a different type for
select, insert and update operations.

Also see the [Generated](Generated.md) type.

### Examples

The next example defines a number column that is optional
in inserts and updates. All columns are always optional
in updates so therefore we don't need to specify `undefined`
for the update type. The type below is useful for all kinds of
database generated columns like identifiers. The `Generated`
type is actually just a shortcut for the type in this example:

```ts
type GeneratedNumber = ColumnType<number, number | undefined, number>
```

The above example makes the column optional in inserts
and updates, but you can still choose to provide the
column. If you want to prevent insertion/update you
can se the type as `never`:

```ts
type ReadonlyNumber = ColumnType<number, never, never>
```

Here's one more example where the type is different
for each different operation:

```ts
type UnupdateableDate = ColumnType<Date, string, never>
```

## Type Parameters

### SelectType

`SelectType`

### InsertType

`InsertType` = `SelectType`

### UpdateType

`UpdateType` = `SelectType`

## Properties

### \_\_insert\_\_

> `readonly` **\_\_insert\_\_**: `InsertType`

Defined in: [util/column-type.ts:44](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L44)

***

### \_\_select\_\_

> `readonly` **\_\_select\_\_**: `SelectType`

Defined in: [util/column-type.ts:43](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L43)

***

### \_\_update\_\_

> `readonly` **\_\_update\_\_**: `UpdateType`

Defined in: [util/column-type.ts:45](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L45)
