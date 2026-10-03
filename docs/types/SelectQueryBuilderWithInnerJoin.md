[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryBuilderWithInnerJoin

# Type Alias: SelectQueryBuilderWithInnerJoin\<DB, TB, O, TE\>

> **SelectQueryBuilderWithInnerJoin**\<`DB`, `TB`, `O`, `TE`\> = [`TableExpression`](TableExpression.md)\<`DB`, `TB`\> *extends* `TE` ? [`JoinResultForUnknownTable`](JoinResultForUnknownTable.md)\<`O`\> : `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`InnerJoinedBuilder`](InnerJoinedBuilder.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`DB`, `TB` \| `TE`, `O`\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/select-query-builder.ts:2810](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2810)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
