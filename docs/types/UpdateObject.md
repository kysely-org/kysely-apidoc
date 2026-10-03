[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateObject

# Type Alias: UpdateObject\<DB, TB, UT\>

> **UpdateObject**\<`DB`, `TB`, `UT`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in AnyColumn\<DB, UT\>\]?: \{ \[T in UT\]: C extends keyof DB\[T\] ? ValueExpression\<DB, TB, UpdateType\<DB\[T\]\[C\]\>\> \| undefined : never \}\[UT\] \}\>

Defined in: [parser/update-set-parser.ts:17](https://github.com/kysely-org/kysely/blob/master/src/parser/update-set-parser.ts#L17)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### UT

`UT` *extends* keyof `DB` = `TB`
