[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateObjectExpression

# Type Alias: UpdateObjectExpression\<DB, TB, UT\>

> **UpdateObjectExpression**\<`DB`, `TB`, `UT`\> = [`UpdateObject`](UpdateObject.md)\<`DB`, `TB`, `UT`\> \| [`UpdateObjectFactory`](UpdateObjectFactory.md)\<`DB`, `TB`, `UT`\>

Defined in: [parser/update-set-parser.ts:35](https://github.com/kysely-org/kysely/blob/master/src/parser/update-set-parser.ts#L35)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### UT

`UT` *extends* keyof `DB` = `TB`
