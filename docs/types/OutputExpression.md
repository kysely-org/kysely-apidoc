[**kysely**](../index.md)

***

[kysely](../modules.md) / OutputExpression

# Type Alias: OutputExpression\<DB, TB, OP, ODB, OTB\>

> **OutputExpression**\<`DB`, `TB`, `OP`, `ODB`, `OTB`\> = [`AnyAliasedColumnWithTable`](AnyAliasedColumnWithTable.md)\<`ODB`, `OTB`\> \| [`AnyColumnWithTable`](AnyColumnWithTable.md)\<`ODB`, `OTB`\> \| [`AliasedExpressionOrFactory`](AliasedExpressionOrFactory.md)\<`ODB`, `OTB`\>

Defined in: [query-builder/output-interface.ts:178](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L178)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### OP

`OP` *extends* [`OutputPrefix`](OutputPrefix.md) = [`OutputPrefix`](OutputPrefix.md)

### ODB

`ODB` = [`OutputDatabase`](OutputDatabase.md)\<`DB`, `TB`, `OP`\>

### OTB

`OTB` *extends* keyof `ODB` = keyof `ODB`
