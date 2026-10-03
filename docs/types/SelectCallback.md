[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectCallback

# Type Alias: SelectCallback\<DB, TB\>

> **SelectCallback**\<`DB`, `TB`\> = (`eb`) => `ReadonlyArray`\<[`SelectExpression`](SelectExpression.md)\<`DB`, `TB`\>\>

Defined in: [parser/select-parser.ts:37](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L37)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Parameters

### eb

[`ExpressionBuilder`](../interfaces/ExpressionBuilder.md)\<`DB`, `TB`\>

## Returns

`ReadonlyArray`\<[`SelectExpression`](SelectExpression.md)\<`DB`, `TB`\>\>
