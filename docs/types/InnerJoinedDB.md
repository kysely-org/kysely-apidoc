[**kysely**](../index.md)

***

[kysely](../modules.md) / InnerJoinedDB

# Type Alias: InnerJoinedDB\<DB, A, R\>

> **InnerJoinedDB**\<`DB`, `A`, `R`\> = [`DrainOuterGeneric`](DrainOuterGeneric.md)\<\{ \[C in keyof DB \| A\]: C extends A ? R : C extends keyof DB ? DB\[C\] : never \}\>

Defined in: [query-builder/select-query-builder.ts:2815](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2815)

## Type Parameters

### DB

`DB`

### A

`A` *extends* `string`

### R

`R`
