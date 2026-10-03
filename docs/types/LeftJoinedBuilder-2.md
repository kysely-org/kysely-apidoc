[**kysely**](../index.md)

***

[kysely](../modules.md) / LeftJoinedBuilder

# Type Alias: LeftJoinedBuilder\<DB, TB, O, A, R\>

> **LeftJoinedBuilder**\<`DB`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<[`LeftJoinedDB`](LeftJoinedDB-2.md)\<`DB`, `A`, `R`\>, `TB` \| `A`, `O`\> : [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, [`Nullable`](Nullable.md)\<`R`\>\>, `TB` \| `A`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:1211](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1211)

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
