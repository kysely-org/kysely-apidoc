[**kysely**](../index.md)

***

[kysely](../modules.md) / AnyAliasedColumnWithTable

# Type Alias: AnyAliasedColumnWithTable\<DB, TB\>

> **AnyAliasedColumnWithTable**\<`DB`, `TB`\> = `` `${AnyColumnWithTable<DB, TB>} as ${string}` ``

Defined in: [util/type-utils.ts:96](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L96)

Just like [AnyColumnWithTable](AnyColumnWithTable.md) but with a ` as <string>` suffix.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
