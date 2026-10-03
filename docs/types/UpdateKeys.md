[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateKeys

# Type Alias: UpdateKeys\<R\>

> **UpdateKeys**\<`R`\> = `{ [K in keyof R]: IfNotNever<UpdateType<R[K]>, K> }`\[keyof `R`\]

Defined in: [util/column-type.ts:119](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L119)

Keys of `R` whose `UpdateType` values are not `never`

## Type Parameters

### R

`R`
