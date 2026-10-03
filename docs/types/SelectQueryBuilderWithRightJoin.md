[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryBuilderWithRightJoin

# Type Alias: SelectQueryBuilderWithRightJoin\<DB, TB, O, TE\>

> **SelectQueryBuilderWithRightJoin**\<`DB`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder.md)\<`DB`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/select-query-builder.ts:2855](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2855)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
