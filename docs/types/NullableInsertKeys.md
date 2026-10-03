[**kysely**](../index.md)

***

[kysely](../modules.md) / NullableInsertKeys

# Type Alias: NullableInsertKeys\<R\>

> **NullableInsertKeys**\<`R`\> = `{ [K in keyof R]: IfNullable<InsertType<R[K]>, K> }`\[keyof `R`\]

Defined in: [util/column-type.ts:98](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L98)

Keys of `R` whose `InsertType` values can be `null` or `undefined`.

## Type Parameters

### R

`R`
