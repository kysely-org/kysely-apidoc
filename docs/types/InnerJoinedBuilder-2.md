[**kysely**](../index.md)

***

[kysely](../modules.md) / InnerJoinedBuilder

# Type Alias: InnerJoinedBuilder\<DB, TB, O, A, R\>

> **InnerJoinedBuilder**\<`DB`, `TB`, `O`, `A`, `R`\> = `A` *extends* keyof `DB` ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<[`InnerJoinedDB`](InnerJoinedDB-2.md)\<`DB`, `A`, `R`\>, `TB` \| `A`, `O`\> : [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `R`\>, `TB` \| `A`, `O`\>

Defined in: [query-builder/delete-query-builder.ts:1179](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1179)

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
