[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractRawTypeFromReferenceExpression

# Type Alias: ExtractRawTypeFromReferenceExpression\<DB, TB, RE, DV\>

> **ExtractRawTypeFromReferenceExpression**\<`DB`, `TB`, `RE`, `DV`\> = `RE` *extends* `string` ? [`ExtractTypeFromStringReference`](ExtractTypeFromStringReference.md)\<`DB`, `TB`, `RE`\> : `RE` *extends* [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<infer O\> ? `O`\[keyof `O`\] \| `null` : `RE` *extends* (`qb`) => [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<infer O\> ? `O`\[keyof `O`\] \| `null` : `RE` *extends* [`Expression`](../interfaces/Expression.md)\<infer O\> ? `O` : `RE` *extends* (`qb`) => [`Expression`](../interfaces/Expression.md)\<infer O\> ? `O` : `DV`

Defined in: [parser/reference-parser.ts:56](https://github.com/kysely-org/kysely/blob/master/src/parser/reference-parser.ts#L56)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### RE

`RE`

### DV

`DV` = `unknown`
