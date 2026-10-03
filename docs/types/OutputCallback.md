[**kysely**](../index.md)

***

[kysely](../modules.md) / OutputCallback

# Type Alias: OutputCallback\<DB, TB, OP\>

> **OutputCallback**\<`DB`, `TB`, `OP`\> = (`eb`) => `ReadonlyArray`\<[`OutputExpression`](OutputExpression.md)\<`DB`, `TB`, `OP`\>\>

Defined in: [query-builder/output-interface.ts:189](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L189)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### OP

`OP` *extends* [`OutputPrefix`](OutputPrefix.md) = [`OutputPrefix`](OutputPrefix.md)

## Parameters

### eb

[`ExpressionBuilder`](../interfaces/ExpressionBuilder.md)\<[`OutputDatabase`](OutputDatabase.md)\<`DB`, `TB`, `OP`\>, `OP`\>

## Returns

`ReadonlyArray`\<[`OutputExpression`](OutputExpression.md)\<`DB`, `TB`, `OP`\>\>
