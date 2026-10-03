[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractAliasFromSelectExpression

# Type Alias: ExtractAliasFromSelectExpression\<SE\>

> **ExtractAliasFromSelectExpression**\<`SE`\> = `SE` *extends* `string` ? [`ExtractAliasFromStringSelectExpression`](ExtractAliasFromStringSelectExpression.md)\<`SE`\> : `SE` *extends* [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, infer EA\> ? `EA` : `SE` *extends* (`qb`) => [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`any`, infer EA\> ? `EA` : `SE` *extends* [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<infer RA\> ? [`ExtractAliasFromStringSelectExpression`](ExtractAliasFromStringSelectExpression.md)\<`RA`\> : `never`

Defined in: [parser/select-parser.ts:81](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L81)

## Type Parameters

### SE

`SE`
