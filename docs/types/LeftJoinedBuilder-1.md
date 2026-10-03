[**kysely**](../index.md)

***

[kysely](../modules.md) / LeftJoinedBuilder

# Type Alias: LeftJoinedBuilder\<DB, UT, TB, O, A, R\>

> **LeftJoinedBuilder**\<`DB`, `UT`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<[`LeftJoinedDB`](LeftJoinedDB-1.md)\<`DB`, `A`, `R`\>, `UT`, `TB` \| `A`, `O`\> : [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, [`Nullable`](Nullable.md)\<`R`\>\>, `UT`, `TB` \| `A`, `O`\>

Defined in: [query-builder/update-query-builder.ts:1311](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1311)

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

`A` *extends* keyof `any`

### R

`R`
