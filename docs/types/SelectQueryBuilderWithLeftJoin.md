[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryBuilderWithLeftJoin

# Type Alias: SelectQueryBuilderWithLeftJoin\<DB, TB, O, TE\>

> **SelectQueryBuilderWithLeftJoin**\<`DB`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`LeftJoinedBuilder`](LeftJoinedBuilder.md)\<`DB`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`LeftJoinedBuilder`](LeftJoinedBuilder.md)\<`DB`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`LeftJoinedBuilder`](LeftJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`LeftJoinedBuilder`](LeftJoinedBuilder.md)\<`DB`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/select-query-builder.ts:2819](https://github.com/kysely-org/kysely/blob/master/src/query-builder/select-query-builder.ts#L2819)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

### TE

`TE` *extends* [`TableExpression`](TableExpression.md)\<`DB`, `TB`\>
