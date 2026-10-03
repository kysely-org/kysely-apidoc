[**kysely**](../index.md)

***

[kysely](../modules.md) / AllSelection

# Type Alias: AllSelection\<DB, TB\>

> **AllSelection**\<`DB`, `TB`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<`{ [C in AnyColumn<DB, TB>]: { [T in TB]: SelectType<C extends keyof DB[T] ? DB[T][C] : never> }[TB] }`\>

Defined in: [parser/select-parser.ts:158](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L158)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
