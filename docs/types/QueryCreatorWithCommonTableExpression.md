[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryCreatorWithCommonTableExpression

# Type Alias: QueryCreatorWithCommonTableExpression\<DB, CN, CTE\>

> **QueryCreatorWithCommonTableExpression**\<`DB`, `CN`, `CTE`\> = [`QueryCreator`](../classes/QueryCreator.md)\<`DB` & `{ [K in ExtractTableFromCommonTableExpressionName<CN>]: ExtractRowFromCommonTableExpression<CTE> }`\>

Defined in: [parser/with-parser.ts:37](https://github.com/kysely-org/kysely/blob/master/src/parser/with-parser.ts#L37)

## Type Parameters

### DB

`DB`

### CN

`CN` *extends* `string`

### CTE

`CTE`
