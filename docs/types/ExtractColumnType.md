[**kysely**](../index.md)

***

[kysely](../modules.md) / ExtractColumnType

# Type Alias: ExtractColumnType\<DB, TB, C\>

> **ExtractColumnType**\<`DB`, `TB`, `C`\> = `{ [T in TB]: C extends keyof DB[T] ? DB[T][C] : never }`\[`TB`\]

Defined in: [util/type-utils.ts:46](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L46)

Extracts a column type.

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### C

`C`
