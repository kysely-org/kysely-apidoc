[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractTypeFromValueExpression

# Type Alias: ExtractTypeFromValueExpression\<VE\>

> **ExtractTypeFromValueExpression**\<`VE`\> = `VE` *extends* [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, infer SV\>\> ? `SV` : `VE` *extends* [`Expression`](../interfaces/Expression.md)\<infer V\> ? `V` : `VE`

Defined in: [parser/value-parser.ts:30](https://github.com/kysely-org/kysely/blob/master/src/parser/value-parser.ts#L30)

## Type Parameters

### VE

`VE`
