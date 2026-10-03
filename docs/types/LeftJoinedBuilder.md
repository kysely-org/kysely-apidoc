[**kysely**](../index.md)

***

[kysely](../modules.md) / LeftJoinedBuilder

# Type Alias: LeftJoinedBuilder\<DB, TB, O, A, R\>

> **LeftJoinedBuilder**\<`DB`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<[`LeftJoinedDB`](LeftJoinedDB.md)\<`DB`, `A`, `R`\>, `TB` \| `A`, `O`\> : [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, [`Nullable`](Nullable.md)\<`R`\>\>, `TB` \| `A`, `O`\>

Defined in: [query-builder/select-query-builder.ts:2836](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2836)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### A

`A` *extends* keyof `any`

### R

`R`
