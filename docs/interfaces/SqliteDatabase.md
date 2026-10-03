[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteDatabase

# Interface: SqliteDatabase

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:38](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L38)

This interface is the subset of better-sqlite3 driver's `Database` class that
kysely needs.

We don't use the type from `better-sqlite3` here to not have a dependency to it.

https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#new-databasepath-options

## Methods

### close()

> **close**(): `void`

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:39](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L39)

#### Returns

`void`

***

### prepare()

> **prepare**(`sql`): [`SqliteStatement`](SqliteStatement.md)

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:40](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L40)

#### Parameters

##### sql

`string`

#### Returns

[`SqliteStatement`](SqliteStatement.md)
