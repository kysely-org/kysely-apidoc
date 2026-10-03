[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyExtractRowFromCommonTableExpression

# Type Alias: ReadonlyExtractRowFromCommonTableExpression\<CTE\>

> **ReadonlyExtractRowFromCommonTableExpression**\<`CTE`\> = `CTE` *extends* [`Expression`](../interfaces/Expression.md)\<infer O\> ? `O` : `CTE` *extends* (`creator`) => infer Q ? `Q` *extends* [`Expression`](../interfaces/Expression.md)\<infer O\> ? `O` : `never` : `never`

Defined in: [readonly/readonly-with-parser.ts:68](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-with-parser.ts#L68)

Similar to [ExtractRowFromCommonTableExpression](ExtractRowFromCommonTableExpression.md) but read-only.

## Type Parameters

### CTE

`CTE`
