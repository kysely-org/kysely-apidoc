[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyQueryCreatorWithCommonTableExpression

# Type Alias: ReadonlyQueryCreatorWithCommonTableExpression\<DB, CN, CTE\>

> **ReadonlyQueryCreatorWithCommonTableExpression**\<`DB`, `CN`, `CTE`\> = [`ReadonlyQueryCreator`](../interfaces/readonly.ReadonlyQueryCreator.md)\<`DB` & `{ [K in ExtractTableFromCommonTableExpressionName<CN>]: ReadonlyExtractRowFromCommonTableExpression<CTE> }`\>

Defined in: [readonly/readonly-with-parser.ts:53](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-with-parser.ts#L53)

Similar to [QueryCreatorWithCommonTableExpression](QueryCreatorWithCommonTableExpression.md) but read-only.

## Type Parameters

### DB

`DB`

### CN

`CN` *extends* `string`

### CTE

`CTE`
