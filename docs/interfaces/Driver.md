[**kysely**](../index.md)

***

[kysely](../modules.md) / Driver

# Interface: Driver

Defined in: [driver/driver.ts:10](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L10)

A Driver creates and releases [database connections](DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Methods

### acquireConnection()

> **acquireConnection**(`options?`): `Promise`\<[`DatabaseConnection`](DatabaseConnection.md)\>

Defined in: [driver/driver.ts:22](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L22)

Acquires a new connection from the pool.

#### Parameters

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<[`DatabaseConnection`](DatabaseConnection.md)\>

***

### beginTransaction()

> **beginTransaction**(`connection`, `settings`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:29](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L29)

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

Defined in: [driver/driver.ts:37](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L37)

Commits a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

***

### destroy()

> **destroy**(`options?`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:82](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L82)

Destroys the driver and releases all resources.

#### Parameters

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### init()

> **init**(`options?`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:17](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L17)

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

Defined in: [driver/driver.ts:74](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L74)

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

Defined in: [driver/driver.ts:65](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L65)

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

Defined in: [driver/driver.ts:56](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L56)

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

Defined in: [driver/driver.ts:42](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L42)

Rolls back a transaction.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

#### Returns

`Promise`\<`void`\>

***

### savepoint()?

> `optional` **savepoint**(`connection`, `savepointName`, `compileQuery`): `Promise`\<`void`\>

Defined in: [driver/driver.ts:47](https://github.com/kysely-org/kysely/blob/master/src/driver/driver.ts#L47)

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
