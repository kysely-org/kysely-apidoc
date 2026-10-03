[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractRowTypeFromTableExpression

# Type Alias: ExtractRowTypeFromTableExpression\<DB, TE, A\>

> **ExtractRowTypeFromTableExpression**\<`DB`, `TE`, `A`\> = `TE` *extends* `` `${infer T} as ${infer TA}` `` ? `TA` *extends* `A` ? `T` *extends* keyof `DB` ? `DB`\[`T`\] : `never` : `never` : `TE` *extends* `A` ? `TE` *extends* keyof `DB` ? `DB`\[`TE`\] : `never` : `TE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer O, infer QA\> ? `QA` *extends* `A` ? `O` : `never` : `TE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer O, infer QA\> ? `QA` *extends* `A` ? `O` : `never` : `TE` *extends* [`AliasedDynamicTableBuilder`](../classes/AliasedDynamicTableBuilder.md)\<infer T, infer DA\> ? `DA` *extends* `A` ? `T` *extends* keyof `DB` ? `DB`\[`T`\] : `never` : `never` : `never`

Defined in: [parser/table-parser.ts:66](https://github.com/kysely-org/kysely/blob/master/src/parser/table-parser.ts#L66)

## Type Parameters

### DB

`DB`

### TE

`TE`

### A

`A` *extends* keyof `any`
