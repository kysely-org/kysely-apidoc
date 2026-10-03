[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteQueryBuilderWithLeftJoin

# Type Alias: DeleteQueryBuilderWithLeftJoin\<DB, TB, O, TE\>

> **DeleteQueryBuilderWithLeftJoin**\<`DB`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`LeftJoinedBuilder`](LeftJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`LeftJoinedBuilder`](LeftJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`LeftJoinedBuilder`](LeftJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`LeftJoinedBuilder`](LeftJoinedBuilder-2.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/delete-query-builder.ts:1189](https://github.com/kysely-org/kysely/blob/master/src/query-builder/delete-query-builder.ts#L1189)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
