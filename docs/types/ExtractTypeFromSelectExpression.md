[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromSelectExpression

# Type Alias: ExtractTypeFromSelectExpression\<DB, TB, SE\>

> **ExtractTypeFromSelectExpression**\<`DB`, `TB`, `SE`\> = `SE` *extends* `string` ? [`ExtractTypeFromStringSelectExpression`](ExtractTypeFromStringSelectExpression.md)\<`DB`, `TB`, `SE`\> : `SE` *extends* [`AliasedSelectQueryBuilder`](../interfaces/AliasedSelectQueryBuilder.md)\<infer O, `any`\> ? `O`\[keyof `O`\] \| `null` : `SE` *extends* (`eb`) => [`AliasedSelectQueryBuilder`](../interfaces/AliasedSelectQueryBuilder.md)\<infer O, `any`\> ? `O`\[keyof `O`\] \| `null` : `SE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer O, `any`\> ? `O` : `SE` *extends* (`eb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<infer O, `any`\> ? `O` : `SE` *extends* [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<infer RA\> ? [`ExtractTypeFromStringSelectExpression`](ExtractTypeFromStringSelectExpression.md)\<`DB`, `TB`, `RA`\> \| `undefined` : `never`

Defined in: [parser/select-parser.ts:104](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L104)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### SE

`SE`
