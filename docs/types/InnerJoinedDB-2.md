[**kysely**](../index.md)

***

[kysely](../modules.md) / InnerJoinedDB

# Type Alias: InnerJoinedDB\<DB, A, R\>

> **InnerJoinedDB**\<`DB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? R : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/delete-query-builder.ts:1185](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1185)

## Type Parameters

### DB

`DB`

### A

`A` *extends* `string`

### R

`R`
