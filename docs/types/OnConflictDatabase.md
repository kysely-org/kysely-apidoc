[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictDatabase

# Type Alias: OnConflictDatabase\<DB, TB\>

> **OnConflictDatabase**\<`DB`, `TB`\> = \{ \[K in keyof DB \| "excluded"\]: K extends keyof DB ? DB\[K\] : DB\[TB\] \}

Defined in: [query-builder/on-conflict-builder.ts:285](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L285)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
