[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteDriver

# Class: SqliteDriver

Defined in: [dialect/sqlite/sqlite-driver.ts:18](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L18)

A Driver creates and releases [database connections](../interfaces/DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Implements

- [`Driver`](../interfaces/Driver.md)

## Constructors

### Constructor

> **new SqliteDriver**(`config`): `SqliteDriver`

Defined in: [dialect/sqlite/sqlite-driver.ts:24](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L24)

#### Parameters

##### config

[`SqliteDialectConfig`](../interfaces/SqliteDialectConfig.md)

#### Returns

`SqliteDriver`

## Methods

### acquireConnection()

> **acquireConnection**(): `Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

Defined in: [dialect/sqlite/sqlite-driver.ts:40](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L40)

Acquires a new connection from the pool.

#### Returns

`Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`acquireConnection`](../interfaces/Driver.md#acquireconnection)

***

### beginTransaction()

> **beginTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:44](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L44)

Begins a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`beginTransaction`](../interfaces/Driver.md#begintransaction)

***

### commitTransaction()

> **commitTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L48)

Commits a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`commitTransaction`](../interfaces/Driver.md#committransaction)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:99](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L99)

Destroys the driver and releases all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`destroy`](../interfaces/Driver.md#destroy)

***

### init()

> **init**(`options?`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:28](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L28)

Initializes the driver.

After calling this method the driver should be usable and `acquireConnection` etc.
methods should be callable.

#### Parameters

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`init`](../interfaces/Driver.md#init)

***

### releaseConnection()

> **releaseConnection**(): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:95](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L95)

Releases a connection back to the pool.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseConnection`](../interfaces/Driver.md#releaseconnection)

***

### releaseSavepoint()

> **releaseSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:82](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L82)

Releases a savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseSavepoint`](../interfaces/Driver.md#releasesavepoint)

***

### rollbackToSavepoint()

> **rollbackToSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:69](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L69)

Rolls back to a savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackToSavepoint`](../interfaces/Driver.md#rollbacktosavepoint)

***

### rollbackTransaction()

> **rollbackTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:52](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L52)

Rolls back a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackTransaction`](../interfaces/Driver.md#rollbacktransaction)

***

### savepoint()

> **savepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/sqlite/sqlite-driver.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-driver.ts#L56)

Establishses a new savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`savepoint`](../interfaces/Driver.md#savepoint)
