[**kysely**](../index.md)

***

[kysely](../modules.md) / CommonTableExpressionOutput

# Type Alias: CommonTableExpressionOutput\<DB, CN\>

> **CommonTableExpressionOutput**\<`DB`, `CN`\> = [`Expression`](../interfaces/Expression.md)\<[`ExtractRowFromCommonTableExpressionName`](ExtractRowFromCommonTableExpressionName.md)\<`CN`\>\> \| [`InsertQueryBuilder`](../classes/InsertQueryBuilder.md)\<`DB`, `any`, [`ExtractRowFromCommonTableExpressionName`](ExtractRowFromCommonTableExpressionName.md)\<`CN`\>\> \| [`UpdateQueryBuilder`](../classes/UpdateQueryBuilder.md)\<`DB`, `any`, `any`, [`ExtractRowFromCommonTableExpressionName`](ExtractRowFromCommonTableExpressionName.md)\<`CN`\>\> \| [`DeleteQueryBuilder`](../classes/DeleteQueryBuilder.md)\<`DB`, `any`, [`ExtractRowFromCommonTableExpressionName`](ExtractRowFromCommonTableExpressionName.md)\<`CN`\>\>

Defined in: [parser/with-parser.ts:49](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L49)

## Type Parameters

### DB

`DB`

### CN

`CN`
