[**kysely**](../index.md)

***

[kysely](../modules.md) / UsingBuilder

# Type Alias: UsingBuilder\<DB, TT, A, R, O\>

> **UsingBuilder**\<`DB`, `TT`, `A`, `R`, `O`\> = `A` *extends* keyof `DB` ? [`WheneableMergeQueryBuilder`](../classes/WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `A`, `O`\> : [`WheneableMergeQueryBuilder`](../classes/WheneableMergeQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `R`\>, `TT`, `A`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1256](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1256)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### A

`A` *extends* `string`

### R

`R`

### O

`O`
