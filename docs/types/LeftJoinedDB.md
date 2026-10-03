[**kysely**](../index.md)

***

[kysely](../modules.md) / LeftJoinedDB

# Type Alias: LeftJoinedDB\<DB, A, R\>

> **LeftJoinedDB**\<`DB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? Nullable\<R\> : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/select-query-builder.ts:2847](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2847)

## Type Parameters

### DB

`DB`

### A

`A` *extends* keyof `any`

### R

`R`
