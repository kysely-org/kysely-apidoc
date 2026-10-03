[**kysely**](../index.md)

***

[kysely](../modules.md) / Selection

# Type Alias: Selection\<DB, TB, SE\>

> **Selection**\<`DB`, `TB`, `SE`\> = \[`DB`\] *extends* \[`unknown`\] ? `{ [E in FlattenSelectExpression<SE> as ExtractAliasFromSelectExpression<E>]: SelectType<ExtractTypeFromSelectExpression<DB, TB, E>> }` : `object`

Defined in: [parser/select-parser.ts:44](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L44)

Turns a SelectExpression or a union of them into a selection object.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### SE

`SE`
