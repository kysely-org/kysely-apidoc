[**kysely**](../index.md)

***

[kysely](../modules.md) / AnyAliasedColumn

# Type Alias: AnyAliasedColumn\<DB, TB\>

> **AnyAliasedColumn**\<`DB`, `TB`\> = `` `${AnyColumn<DB, TB>} as ${string}` ``

Defined in: [util/type-utils.ts:88](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L88)

Just like [AnyColumn](AnyColumn.md) but with a ` as <string>` suffix.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
