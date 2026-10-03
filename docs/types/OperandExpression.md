[**kysely**](../index.md)

***

[kysely](../modules.md) / OperandExpression

# Type Alias: OperandExpression\<V\>

> **OperandExpression**\<`V`\> = [`Expression`](../interfaces/Expression.md)\<`V`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `V`\>\>

Defined in: [parser/expression-parser.ts:22](https://github.com/kysely-org/kysely/blob/master/src/parser/expression-parser.ts#L22)

Like `Expression<V>` but also accepts a select query with an output
type extending `Record<string, V>`. This type is useful because SQL
treats records with a single column as single values.

## Type Parameters

### V

`V`
