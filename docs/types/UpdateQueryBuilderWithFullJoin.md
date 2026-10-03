[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateQueryBuilderWithFullJoin

# Type Alias: UpdateQueryBuilderWithFullJoin\<DB, UT, TB, O, TE\>

> **UpdateQueryBuilderWithFullJoin**\<`DB`, `UT`, `TB`, `O`, `TE`\> = `TE` *extends* `` `${infer T} as ${infer A}` `` ? `T` *extends* keyof `DB` ? [`OuterJoinedBuilder`](OuterJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `A`, `DB`\[`T`\]\> : `never` : `TE` *extends* keyof `DB` ? [`OuterJoinedBuilder`](OuterJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `TE`, `DB`\[`TE`\]\> : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`OuterJoinedBuilder`](OuterJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer QO, infer QA\> ? [`OuterJoinedBuilder`](OuterJoinedBuilder-1.md)\<`DB`, `UT`, `TB`, `O`, `QA`, `QO`\> : `never`

Defined in: [query-builder/update-query-builder.ts:1373](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-query-builder.ts#L1373)

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
