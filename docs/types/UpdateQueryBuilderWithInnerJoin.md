[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateQueryBuilderWithInnerJoin

# Type Alias: UpdateQueryBuilderWithInnerJoin\<DB, UT, TB, O, TE\>

> **UpdateQueryBuilderWithInnerJoin**\<`DB`, `UT`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`InnerJoinedBuilder`](InnerJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB`, `UT`, `TB` \| `TE`, `O`\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/update-query-builder.ts:1251](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1251)

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
