[**kysely**](../index.md)

***

[kysely](../modules.md) / InnerJoinedBuilder

# Type Alias: InnerJoinedBuilder\<DB, UT, TB, O, A, R\>

> **InnerJoinedBuilder**\<`DB`, `UT`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<[`InnerJoinedDB`](InnerJoinedDB-1.md)\<`DB`, `A`, `R`\>, `UT`, `TB` \| `A`, `O`\> : [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `R`\>, `UT`, `TB` \| `A`, `O`\>

Defined in: [query-builder/update-query-builder.ts:1269](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1269)

## Type Parameters

### DB

`DB`

### UT

`UT` *extends* keyof `DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### A

`A` *extends* `string`

### R

`R`
