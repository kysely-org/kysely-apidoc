[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteDialectConfig

# Interface: SqliteDialectConfig

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:7](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L7)

Config for the SQLite dialect.

## Properties

### database

> **database**: [`SqliteDatabase`](SqliteDatabase.md) \| ((`options?`) => `Promise`\<[`SqliteDatabase`](SqliteDatabase.md)\>)

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:25](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L25)

An sqlite Database instance or a function that returns one.

If a function is provided, it's called once when the first query is executed.

Once the driver has initialized, [Kysely.destroy](../classes/Kysely.md#destroy) calls
`database.close()`, whether the database is supplied directly or returned by
a function. If initialization hasn't started, `db.destroy()` does nothing,
even if the supplied database has been used outside Kysely.

If Kysely is not the sole consumer of the database, or the database's
lifecycle is managed elsewhere, skip `db.destroy()`. Let the application
call `database.close()` once all consumers, including Kysely, have finished.
No separate cleanup of the `Kysely` instance is needed.

https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#new-databasepath-options

***

### onCreateConnection?

> `optional` **onCreateConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:34](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L34)

Called once when the first query is executed.

This is a Kysely specific feature and does not come from the `better-sqlite3` module.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>
