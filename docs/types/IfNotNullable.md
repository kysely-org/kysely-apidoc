[**kysely**](../index.md)

***

[kysely](../modules.md) / IfNotNullable

# Type Alias: IfNotNullable\<T, K\>

> **IfNotNullable**\<`T`, `K`\> = [`IsNullable`](IsNullable.md)\<`T`\> *extends* `true` ? `never` : [`IfNotNever`](IfNotNever.md)\<`T`, `K`\>

Defined in: [util/column-type.ts:84](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L84)

Evaluates to `K` if `T` can't be `null` or `undefined`.

## Type Parameters

### T

`T`

### K

`K`
