[**kysely**](../index.md)

***

[kysely](../modules.md) / GeneratedAlways

# Type Alias: GeneratedAlways\<S\>

> **GeneratedAlways**\<`S`\> = [`ColumnType`](ColumnType.md)\<`S`, `never`, `never`\>

Defined in: [util/column-type.ts:64](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L64)

A shortcut for defining columns that are only database-generated
(like postgres GENERATED ALWAYS AS IDENTITY). No insert/update
is allowed.

## Type Parameters

### S

`S`
