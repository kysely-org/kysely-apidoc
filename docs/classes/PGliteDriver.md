[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteDriver

# Class: PGliteDriver

Defined in: [dialect/pglite/pglite-driver.ts:27](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L27)

A Driver creates and releases [database connections](../interfaces/DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Implements

- [`Driver`](../interfaces/Driver.md)

## Constructors

### Constructor

> **new PGliteDriver**(`config`): `PGliteDriver`

Defined in: [dialect/pglite/pglite-driver.ts:32](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L32)

#### Parameters

##### config

[`PGliteDialectConfig`](../interfaces/PGliteDialectConfig.md)

#### Returns

`PGliteDriver`

## Methods

### acquireConnection()

> **acquireConnection**(): `Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

Defined in: [dialect/pglite/pglite-driver.ts:36](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L36)

Acquires a new connection from the pool.

#### Returns

`Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`acquireConnection`](../interfaces/Driver.md#acquireconnection)

***

### beginTransaction()

> **beginTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:40](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L40)

Begins a transaction.

#### Parameters

##### connection

[`PGliteConnection`](PGliteConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`beginTransaction`](../interfaces/Driver.md#begintransaction)

***

### commitTransaction()

> **commitTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:44](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L44)

Commits a transaction.

#### Parameters

##### connection

[`PGliteConnection`](PGliteConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`commitTransaction`](../interfaces/Driver.md#committransaction)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L48)

Destroys the driver and releases all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`destroy`](../interfaces/Driver.md#destroy)

***

### init()

> **init**(`options?`): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L54)

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

Defined in: [dialect/pglite/pglite-driver.ts:74](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L74)

Releases a connection back to the pool.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseConnection`](../interfaces/Driver.md#releaseconnection)

***

### releaseSavepoint()

> **releaseSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:78](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L78)

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

Defined in: [dialect/pglite/pglite-driver.ts:91](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L91)

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

Defined in: [dialect/pglite/pglite-driver.ts:104](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L104)

Rolls back a transaction.

#### Parameters

##### connection

[`PGliteConnection`](PGliteConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackTransaction`](../interfaces/Driver.md#rollbacktransaction)

***

### savepoint()

> **savepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:108](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L108)

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
