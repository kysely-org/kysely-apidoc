[**kysely**](../index.md)

***

[kysely](../modules.md) / Driver

# Interface: Driver

Defined in: [driver/driver.ts:11](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L11)

A Driver creates and releases [database connections](DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Methods

### acquireConnection()

> **acquireConnection**(`options?`): `Promise`\<[`DatabaseConnection`](DatabaseConnection.md)\>

Defined in: [driver/driver.ts:23](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L23)

Acquires a new connection from the pool.

#### Parameters

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<[`DatabaseConnection`](DatabaseConnection.md)\>

***

### beginTransaction()

> **beginTransaction**(`connection`, `settings`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:30](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L30)

Begins a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### settings

[`TransactionSettings`](TransactionSettings.md)

#### Returns

`Promise`\<`void`\>

***

### commitTransaction()

> **commitTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:41](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L41)

Commits a transaction.

Throws [AbortedTransactionError](../classes/AbortedTransactionError.md) if the database confirms that
the transaction was rolled back instead of committed.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

***

### destroy()

> **destroy**(`options?`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:86](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L86)

Destroys the driver and releases all resources.

#### Parameters

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### init()

> **init**(`options?`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:18](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L18)

Initializes the driver.

After calling this method the driver should be usable and `acquireConnection` etc.
methods should be callable.

#### Parameters

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### releaseConnection()

> **releaseConnection**(`connection`, `options?`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:78](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L78)

Releases a connection back to the pool.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### releaseSavepoint()?

> `optional` **releaseSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:69](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L69)

Releases a savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](CompiledQuery.md)

#### Returns

`Promise`\<`void`\>

***

### rollbackToSavepoint()?

> `optional` **rollbackToSavepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:60](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L60)

Rolls back to a savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](CompiledQuery.md)

#### Returns

`Promise`\<`void`\>

***

### rollbackTransaction()

> **rollbackTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:46](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L46)

Rolls back a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

***

### savepoint()?

> `optional` **savepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:51](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L51)

Establishses a new savepoint within a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### savepointName

`string`

##### compileQuery

(`node`, `queryId`) => [`CompiledQuery`](CompiledQuery.md)

#### Returns

`Promise`\<`void`\>
