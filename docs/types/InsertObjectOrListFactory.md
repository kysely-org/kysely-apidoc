[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertObjectOrListFactory

# Type Alias: InsertObjectOrListFactory\<DB, TB, UT\>

> **InsertObjectOrListFactory**\<`DB`, `TB`, `UT`\> = (`eb`) => [`InsertObjectOrList`](InsertObjectOrList.md)\<`DB`, `TB`\>

Defined in: [parser/insert-values-parser.ts:38](https://github.com/kysely-org/kysely/blob/master/src/parser/insert-values-parser.ts#L38)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### UT

`UT` *extends* keyof `DB` = `never`

## Parameters

### eb

[`ExpressionBuilder`](../interfaces/ExpressionBuilder.md)\<`DB`, `TB` \| `UT`\>

## Returns

[`InsertObjectOrList`](InsertObjectOrList.md)\<`DB`, `TB`\>
