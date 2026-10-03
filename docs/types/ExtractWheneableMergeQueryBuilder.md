[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractWheneableMergeQueryBuilder

# Type Alias: ExtractWheneableMergeQueryBuilder\<DB, TT, TE, O\>

> **ExtractWheneableMergeQueryBuilder**\<`DB`, `TT`, `TE`, `O`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`UsingBuilder`](UsingBuilder.md)\<`DB`, `TT`, `A`, `DB`\[`T`\], `O`\> : `never` : `TE` *extends* keyof `DB` ? [`WheneableMergeQueryBuilder`](../classes/WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `TE`, `O`\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`UsingBuilder`](UsingBuilder.md)\<`DB`, `TT`, `QA`, `QO`, `O`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`UsingBuilder`](UsingBuilder.md)\<`DB`, `TT`, `QA`, `QO`, `O`\> : `never`

Defined in: [query-builder/merge-query-builder.ts:1239](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1239)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TT`\>

### O

`O`
