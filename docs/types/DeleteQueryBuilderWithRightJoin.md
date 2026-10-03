[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteQueryBuilderWithRightJoin

# Type Alias: DeleteQueryBuilderWithRightJoin\<DB, TB, O, TE\>

> **DeleteQueryBuilderWithRightJoin**\<`DB`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`RightJoinedBuilder`](RightJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`RightJoinedBuilder`](RightJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/delete-query-builder.ts:1225](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1225)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
