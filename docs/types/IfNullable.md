[**kysely**](../index.md)

***

[kysely](../modules.md) / IfNullable

# Type Alias: IfNullable\<T, K\>

> **IfNullable**\<`T`, `K`\> = [`IsNullable`](IsNullable.md)\<`T`\> *extends* `true` ? `K` : `never`

Defined in: [util/column-type.ts:79](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L79)

Evaluates to `K` if `T` can be `null` or `undefined`.

## Type Parameters

### T

`T`

### K

`K`
