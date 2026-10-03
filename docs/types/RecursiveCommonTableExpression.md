[**kysely**](../index.md)

***

[kysely](../modules.md) / RecursiveCommonTableExpression

# Type Alias: RecursiveCommonTableExpression\<DB, CN\>

> **RecursiveCommonTableExpression**\<`DB`, `CN`\> = (`creator`) => [`CommonTableExpressionOutput`](CommonTableExpressionOutput.md)\<`DB`, `CN`\>

Defined in: [parser/with-parser.ts:26](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L26)

## Type Parameters

### DB

`DB`

### CN

`CN` *extends* `string`

## Parameters

### creator

[`QueryCreator`](../classes/QueryCreator.md)\<`DB` & `{ [K in ExtractTableFromCommonTableExpressionName<CN>]: ExtractRowFromCommonTableExpressionName<CN> }`\>

## Returns

[`CommonTableExpressionOutput`](CommonTableExpressionOutput.md)\<`DB`, `CN`\>
