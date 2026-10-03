[**kysely**](../index.md)

***

[kysely](../modules.md) / [readonly](../modules/readonly.md) / ReadonlyRecursiveCommonTableExpression

# Type Alias: ReadonlyRecursiveCommonTableExpression\<DB, CN\>

> **ReadonlyRecursiveCommonTableExpression**\<`DB`, `CN`\> = (`creator`) => [`ReadonlyCommonTableExpressionOutput`](readonly.ReadonlyCommonTableExpressionOutput.md)\<`DB`, `CN`\>

Defined in: [readonly/readonly-with-parser.ts:32](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-with-parser.ts#L32)

Similar to [RecursiveCommonTableExpression](RecursiveCommonTableExpression.md) but read-only.

## Type Parameters

### DB

`DB`

### CN

`CN` *extends* `string`

## Parameters

### creator

[`ReadonlyQueryCreator`](../interfaces/readonly.ReadonlyQueryCreator.md)\<`DB` & `{ [K in ExtractTableFromCommonTableExpressionName<CN>]: ExtractRowFromCommonTableExpressionName<CN> }`\>

## Returns

[`ReadonlyCommonTableExpressionOutput`](readonly.ReadonlyCommonTableExpressionOutput.md)\<`DB`, `CN`\>
