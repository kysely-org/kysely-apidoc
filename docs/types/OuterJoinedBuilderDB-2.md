[**kysely**](../index.md)

***

[kysely](../modules.md) / OuterJoinedBuilderDB

# Type Alias: OuterJoinedBuilderDB\<DB, TB, A, R\>

> **OuterJoinedBuilderDB**\<`DB`, `TB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? Nullable\<R\> : C extends TB ? Nullable\<DB\[C\]\> : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/delete-query-builder.ts:1290](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1290)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### A

`A` *extends* keyof `any`

### R

`R`
