[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateObjectFactory

# Type Alias: UpdateObjectFactory\<DB, TB, UT\>

> **UpdateObjectFactory**\<`DB`, `TB`, `UT`\> = (`eb`) => [`UpdateObject`](UpdateObject.md)\<`DB`, `TB`, `UT`\>

Defined in: [parser/update-set-parser.ts:29](https://github.com/kysely-org/kysely/blob/master/src/parser/update-set-parser.ts#L29)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### UT

`UT` *extends* keyof `DB`

## Parameters

### eb

[`ExpressionBuilder`](../interfaces/ExpressionBuilder.md)\<`DB`, `TB`\>

## Returns

[`UpdateObject`](UpdateObject.md)\<`DB`, `TB`, `UT`\>
