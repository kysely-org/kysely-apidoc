[**kysely**](../index.md)

***

[kysely](../modules.md) / NonNullableInsertKeys

# Type Alias: NonNullableInsertKeys\<R\>

> **NonNullableInsertKeys**\<`R`\> = `{ [K in keyof R]: IfNotNullable<InsertType<R[K]>, K> }`\[keyof `R`\]

Defined in: [util/column-type.ts:105](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L105)

Keys of `R` whose `InsertType` values can't be `null` or `undefined`.

## Type Parameters

### R

`R`
