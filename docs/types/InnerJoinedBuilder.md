[**kysely**](../index.md)

***

[kysely](../modules.md) / InnerJoinedBuilder

# Type Alias: InnerJoinedBuilder\<DB, TB, O, A, R\>

> **InnerJoinedBuilder**\<`DB`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<[`InnerJoinedDB`](InnerJoinedDB.md)\<`DB`, `A`, `R`\>, `TB` \| `A`, `O`\> : [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `R`\>, `TB` \| `A`, `O`\>

Defined in: [query-builder/select-query-builder.ts:2830](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2830)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### A

`A` *extends* `string`

### R

`R`
