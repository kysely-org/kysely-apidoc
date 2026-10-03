[**kysely**](../index.md)

***

[kysely](../modules.md) / OperandExpressionFactory

# Type Alias: OperandExpressionFactory\<DB, TB, V\>

> **OperandExpressionFactory**\<`DB`, `TB`, `V`\> = (`eb`) => [`OperandExpression`](OperandExpression.md)\<`V`\>

Defined in: [parser/expression-parser.ts:39](https://github.com/kysely-org/kysely/blob/master/src/parser/expression-parser.ts#L39)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### V

`V`

## Parameters

### eb

[`ExpressionBuilder`](../interfaces/ExpressionBuilder.md)\<`DB`, `TB`\>

## Returns

[`OperandExpression`](OperandExpression.md)\<`V`\>
