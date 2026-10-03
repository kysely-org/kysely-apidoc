[**kysely**](../index.md)

***

[kysely](../modules.md) / OutputDatabase

# Type Alias: OutputDatabase\<DB, TB, OP\>

> **OutputDatabase**\<`DB`, `TB`, `OP`\> = `{ [K in OP]: DB[TB] }`

Defined in: [query-builder/output-interface.ts:170](https://github.com/kysely-org/kysely/blob/master/src/query-builder/output-interface.ts#L170)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### OP

`OP` *extends* [`OutputPrefix`](OutputPrefix.md) = [`OutputPrefix`](OutputPrefix.md)
