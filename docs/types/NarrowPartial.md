[**kysely**](../index.md)

***

[kysely](../modules.md) / NarrowPartial

# Type Alias: NarrowPartial\<O, T\>

> **NarrowPartial**\<`O`, `T`\> = `T` *extends* `object` ? [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`` { [K in keyof O & string]: K extends keyof T ? T[K] extends NotNull ? Exclude<O[K], null> : T[K] extends O[K] ? T[K] : T[K] extends object ? SimplifyDeep<O[K] & NarrowPartial<(...)[(...)], (...)[(...)]>> : KyselyTypeError<`$narrowType() call failed: passed type does not exist in '${K}'s type union`> : O[K] } ``\> : `never`

Defined in: [util/type-utils.ts:151](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L151)

## Type Parameters

### O

`O`

### T

`T`
