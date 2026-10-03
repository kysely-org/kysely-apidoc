[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertExpression

# Type Alias: InsertExpression\<DB, TB, UT\>

> **InsertExpression**\<`DB`, `TB`, `UT`\> = [`InsertObjectOrList`](InsertObjectOrList.md)\<`DB`, `TB`\> \| [`InsertObjectOrListFactory`](InsertObjectOrListFactory.md)\<`DB`, `TB`, `UT`\>

Defined in: [parser/insert-values-parser.ts:44](https://github.com/kysely-org/kysely/blob/master/src/parser/insert-values-parser.ts#L44)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### UT

`UT` *extends* keyof `DB` = `never`
