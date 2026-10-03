[**kysely**](../index.md)

***

[kysely](../modules.md) / JSONColumnType

# Type Alias: JSONColumnType\<SelectType, InsertType, UpdateType\>

> **JSONColumnType**\<`SelectType`, `InsertType`, `UpdateType`\> = [`ColumnType`](ColumnType.md)\<`SelectType`, `InsertType`, `UpdateType`\>

Defined in: [util/column-type.ts:70](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L70)

A shortcut for defining JSON columns, which are by default inserted/updated
as stringified JSON strings.

## Type Parameters

### SelectType

`SelectType` *extends* `object` \| `null`

### InsertType

`InsertType` = `string`

### UpdateType

`UpdateType` = `string`
