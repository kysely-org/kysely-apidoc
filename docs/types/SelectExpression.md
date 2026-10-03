[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectExpression

# Type Alias: SelectExpression\<DB, TB\>

> **SelectExpression**\<`DB`, `TB`\> = [`AnyAliasedColumnWithTable`](AnyAliasedColumnWithTable.md)\<`DB`, `TB`\> \| [`AnyAliasedColumn`](AnyAliasedColumn.md)\<`DB`, `TB`\> \| [`AnyColumnWithTable`](AnyColumnWithTable.md)\<`DB`, `TB`\> \| [`AnyColumn`](AnyColumn.md)\<`DB`, `TB`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionOrFactory`](AliasedExpressionOrFactory.md)\<`DB`, `TB`\>

Defined in: [parser/select-parser.ts:29](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L29)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
