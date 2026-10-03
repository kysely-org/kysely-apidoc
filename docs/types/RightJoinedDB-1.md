[**kysely**](../index.md)

***

[kysely](../modules.md) / RightJoinedDB

# Type Alias: RightJoinedDB\<DB, TB, A, R\>

> **RightJoinedDB**\<`DB`, `TB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? R : C extends TB ? Nullable\<DB\[C\]\> : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/update-query-builder.ts:1350](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1350)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### A

`A` *extends* keyof `any`

### R

`R`
