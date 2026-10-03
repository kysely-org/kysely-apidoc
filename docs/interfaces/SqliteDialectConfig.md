[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteDialectConfig

# Interface: SqliteDialectConfig

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:7](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L7)

Config for the SQLite dialect.

## Properties

### database

> **database**: [`SqliteDatabase`](SqliteDatabase.md) \| ((`options?`) => `Promise`\<[`SqliteDatabase`](SqliteDatabase.md)\>)

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:15](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L15)

An sqlite Database instance or a function that returns one.

If a function is provided, it's called once when the first query is executed.

https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#new-databasepath-options

***

### onCreateConnection?

> `optional` **onCreateConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:24](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L24)

Called once when the first query is executed.

This is a Kysely specific feature and does not come from the `better-sqlite3` module.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>
