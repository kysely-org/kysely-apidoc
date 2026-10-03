[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateQueryBuilderWithRightJoin

# Type Alias: UpdateQueryBuilderWithRightJoin\<DB, UT, TB, O, TE\>

> **UpdateQueryBuilderWithRightJoin**\<`DB`, `UT`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/update-query-builder.ts:1323](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1323)

## Type Parameters

### DB

`DB`

### UT

`UT` *extends* keyof `DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
