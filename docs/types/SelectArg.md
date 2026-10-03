[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectArg

# Type Alias: SelectArg\<DB, TB, SE\>

> **SelectArg**\<`DB`, `TB`, `SE`\> = `SE` \| `ReadonlyArray`\<`SE`\> \| ((`eb`) => `ReadonlyArray`\<`SE`\>)

Defined in: [parser/select-parser.ts:67](https://github.com/kysely-org/kysely/blob/master/src/parser/select-parser.ts#L67)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### SE

`SE` *extends* [`SelectExpression`](SelectExpression.md)\<`DB`, `TB`\>
