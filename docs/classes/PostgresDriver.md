[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresDriver

# Class: PostgresDriver

Defined in: [dialect/postgres/postgres-driver.ts:26](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L26)

A Driver creates and releases [database connections](../interfaces/DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Implements

- [`Driver`](../interfaces/Driver.md)

## Constructors

### Constructor

> **new PostgresDriver**(`config`): `PostgresDriver`

Defined in: [dialect/postgres/postgres-driver.ts:31](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L31)

#### Parameters

##### config

[`PostgresDialectConfig`](../interfaces/PostgresDialectConfig.md)

#### Returns

`PostgresDriver`

## Methods

### acquireConnection()

> **acquireConnection**(`options?`): `Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

Defined in: [dialect/postgres/postgres-driver.ts:41](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L41)

Acquires a new connection from the pool.

#### Parameters

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`acquireConnection`](../interfaces/Driver.md#acquireconnection)

***

### beginTransaction()

> **beginTransaction**(`connection`, `settings`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:77](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L77)

Begins a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](../interfaces/DatabaseConnection.md)

##### settings

[`TransactionSettings`](../interfaces/TransactionSettings.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`beginTransaction`](../interfaces/Driver.md#begintransaction)

***

### commitTransaction()

> **commitTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:98](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L98)

Commits a transaction.

Throws [AbortedTransactionError](AbortedTransactionError.md) if the database confirms that
the transaction was rolled back instead of committed.

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

Defined in: [dialect/postgres/postgres-driver.ts:162](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L162)

Destroys the driver and releases all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`destroy`](../interfaces/Driver.md#destroy)

***

### init()

> **init**(`options?`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:35](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L35)

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

> **releaseConnection**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:158](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L158)

Releases a connection back to the pool.

#### Parameters

##### connection

[`PostgresConnection`](PostgresConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseConnection`](../interfaces/Driver.md#releaseconnection)

***

### releaseSavepoint()

> **releaseSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:145](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L145)

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

Defined in: [dialect/postgres/postgres-driver.ts:132](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L132)

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

Defined in: [dialect/postgres/postgres-driver.ts:110](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L110)

Rolls back a transaction.

#### Parameters

##### connection

[`PostgresConnection`](PostgresConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackTransaction`](../interfaces/Driver.md#rollbacktransaction)

***

### savepoint()

> **savepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:119](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L119)

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
