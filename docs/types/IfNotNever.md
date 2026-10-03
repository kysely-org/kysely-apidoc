[**kysely**](../index.md)

***

[kysely](../modules.md) / IfNotNever

# Type Alias: IfNotNever\<T, K\>

> **IfNotNever**\<`T`, `K`\> = [`IsNever`](IsNever.md)\<`T`\> *extends* `true` ? `never` : `K`

Defined in: [util/column-type.ts:89](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L89)

Evaluates to `K` if `T` isn't `never`.

## Type Parameters

### T

`T`

### K

`K`
