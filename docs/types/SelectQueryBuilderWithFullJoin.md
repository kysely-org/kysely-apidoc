[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryBuilderWithFullJoin

# Type Alias: SelectQueryBuilderWithFullJoin\<DB, TB, O, TE\>

> **SelectQueryBuilderWithFullJoin**\<`DB`, `TB`, `O`, `TE`\> = [`TableExpression`](TableExpression.md)\<`DB`, `TB`\> *extends* `TE` ? [`JoinResultForUnknownTable`](JoinResultForUnknownTable.md)\<`O`\> : `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`OuterJoinedBuilder`](OuterJoinedBuilder.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`OuterJoinedBuilder`](OuterJoinedBuilder.md)\<`DB`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`OuterJoinedBuilder`](OuterJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`OuterJoinedBuilder`](OuterJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/select-query-builder.ts:2927](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2927)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
