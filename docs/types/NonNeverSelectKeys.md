[**kysely**](../index.md)

***

[kysely](../modules.md) / NonNeverSelectKeys

# Type Alias: NonNeverSelectKeys\<R\>

> **NonNeverSelectKeys**\<`R`\> = `{ [K in keyof R]: IfNotNever<SelectType<R[K]>, K> }`\[keyof `R`\]

Defined in: [util/column-type.ts:112](https://github.com/kysely-org/kysely/blob/master/src/util/column-type.ts#L112)

Keys of `R` whose `SelectType` values are not `never`

## Type Parameters

### R

`R`
