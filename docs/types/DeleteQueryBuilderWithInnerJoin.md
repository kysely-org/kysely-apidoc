[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteQueryBuilderWithInnerJoin

# Type Alias: DeleteQueryBuilderWithInnerJoin\<DB, TB, O, TE\>

> **DeleteQueryBuilderWithInnerJoin**\<`DB`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`InnerJoinedBuilder`](InnerJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB`, `TB` \| `TE`, `O`\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`InnerJoinedBuilder`](InnerJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/delete-query-builder.ts:1157](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1157)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
