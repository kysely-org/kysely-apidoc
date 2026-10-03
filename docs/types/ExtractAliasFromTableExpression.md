[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractAliasFromTableExpression

# Type Alias: ExtractAliasFromTableExpression\<DB, TE\>

> **ExtractAliasFromTableExpression**\<`DB`, `TE`\> = `TE` *extends* `string` ? `TE` *extends* `` `${string} as ${infer TA}` `` ? `TA` : `TE` *extends* keyof `DB` ? `TE` : `never` : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, infer QA\> ? `QA` : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, infer QA\> ? `QA` : `TE` *extends* [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<`any`, infer DA\> ? `DA` : `never`

Defined in: [parser/table-parser.ts:52](https://github.com/kysely-org/kysely/blob/master/src/parser/table-parser.ts#L52)

## Type Parameters

### DB

`DB`

### TE

`TE`
