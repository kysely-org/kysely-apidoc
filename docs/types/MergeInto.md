[**kysely**](../index.md)

***

[kysely](../modules.md) / MergeInto

# Type Alias: MergeInto\<DB, TE\>

> **MergeInto**\<`DB`, `TE`\> = \[`TE`\] *extends* \[keyof `DB`\] ? [`MergeQueryBuilder`](../classes/MergeQueryBuilder.md)\<`DB`, [`ExtractTableAlias`](ExtractTableAlias.md)\<`DB`, `TE`\>, [`MergeResult`](../classes/MergeResult.md)\> : \[`TE`\] *extends* \[`` `${infer T} as ${infer A}` ``\] ? `T` *extends* keyof `DB` ? [`MergeQueryBuilder`](../classes/MergeQueryBuilder.md)\<`DB` & [`ShallowRecord`](ShallowRecord.md)\<`A`, `DB`\[`T`\]\>, `A`, [`MergeResult`](../classes/MergeResult.md)\> : `never` : `never`

Defined in: [parser/merge-into-parser.ts:6](https://github.com/kysely-org/kysely/blob/master/src/parser/merge-into-parser.ts#L6)

## Type Parameters

### DB

`DB`

### TE

`TE` *extends* [`SimpleTableReference`](SimpleTableReference.md)\<`DB`\>
