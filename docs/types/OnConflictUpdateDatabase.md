[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictUpdateDatabase

# Type Alias: OnConflictUpdateDatabase\<DB, TB\>

> **OnConflictUpdateDatabase**\<`DB`, `TB`\> = \{ \[K in keyof DB \| "excluded"\]: Updateable\<K extends keyof DB ? DB\[K\] : DB\[TB\]\> \}

Defined in: [query-builder/on-conflict-builder.ts:279](https://github.com/kysely-org/kysely/blob/master/src/query-builder/on-conflict-builder.ts#L279)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
