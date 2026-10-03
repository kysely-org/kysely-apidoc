[**kysely**](../index.md)

***

[kysely](../modules.md) / RightJoinedDB

# Type Alias: RightJoinedDB\<DB, TB, A, R\>

> **RightJoinedDB**\<`DB`, `TB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? R : C extends TB ? Nullable\<DB\[C\]\> : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/delete-query-builder.ts:1255](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1255)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### A

`A` *extends* keyof `any`

### R

`R`
