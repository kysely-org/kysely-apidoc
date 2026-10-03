[**kysely**](../index.md)

***

[kysely](../modules.md) / OrderByExpression

# Type Alias: OrderByExpression\<DB, TB, O\>

> **OrderByExpression**\<`DB`, `TB`, `O`\> = [`StringReference`](StringReference.md)\<`DB`, `TB`\> \| keyof `O` & `string` \| [`ExpressionOrFactory`](ExpressionOrFactory.md)\<`DB`, `TB`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\>

Defined in: [parser/order-by-parser.ts:22](https://github.com/kysely-org/kysely/blob/master/src/parser/order-by-parser.ts#L22)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`
