[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlDialectConfig

# Interface: MysqlDialectConfig

Defined in: [dialect/mysql/mysql-dialect-config.ts:7](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L7)

Config for the MySQL dialect.

## Properties

### controlConnection?

> `optional` **controlConnection?**: \{(`connectionUri`): [`MysqlConnection`](MysqlConnection.md); (`config`): [`MysqlConnection`](MysqlConnection.md); \}

Defined in: [dialect/mysql/mysql-dialect-config.ts:17](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L17)

A `mysql2` `Client` constructor, to be used for connecting to the database
outside of the `pool` to avoid waiting for an idle connection.

This is useful for cancelling queries on the database side.

#### Call Signature

> (`connectionUri`): [`MysqlConnection`](MysqlConnection.md)

##### Parameters

###### connectionUri

`string`

##### Returns

[`MysqlConnection`](MysqlConnection.md)

#### Call Signature

> (`config`): [`MysqlConnection`](MysqlConnection.md)

##### Parameters

###### config

`object`

##### Returns

[`MysqlConnection`](MysqlConnection.md)

***

### onCreateConnection?

> `optional` **onCreateConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/mysql/mysql-dialect-config.ts:35](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L35)

Called once for each created connection.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### onReserveConnection?

> `optional` **onReserveConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/mysql/mysql-dialect-config.ts:43](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L43)

Called every time a connection is acquired from the pool.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### pool

> **pool**: [`MysqlPool`](MysqlPool.md) \| ((`options?`) => `Promise`\<[`MysqlPool`](MysqlPool.md)\>)

Defined in: [dialect/mysql/mysql-dialect-config.ts:29](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L29)

A mysql2 Pool instance or a function that returns one.

If a function is provided, it's called once when the first query is executed.

https://github.com/sidorares/node-mysql2#using-connection-pools
