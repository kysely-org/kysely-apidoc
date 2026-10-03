[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlDriver

# Class: MssqlDriver

Defined in: [dialect/mssql/mssql-driver.ts:38](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L38)

A Driver creates and releases [database connections](../interfaces/DatabaseConnection.md)
and is also responsible for connection pooling (if the dialect supports pooling).

## Implements

- [`Driver`](../interfaces/Driver.md)

## Constructors

### Constructor

> **new MssqlDriver**(`config`): `MssqlDriver`

Defined in: [dialect/mssql/mssql-driver.ts:42](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L42)

#### Parameters

##### config

[`MssqlDialectConfig`](../interfaces/MssqlDialectConfig.md)

#### Returns

`MssqlDriver`

## Methods

### acquireConnection()

> **acquireConnection**(): `Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

Defined in: [dialect/mssql/mssql-driver.ts:70](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L70)

Acquires a new connection from the pool.

#### Returns

`Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`acquireConnection`](../interfaces/Driver.md#acquireconnection)

***

### beginTransaction()

> **beginTransaction**(`connection`, `settings`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:74](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L74)

Begins a transaction.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

##### settings

[`TransactionSettings`](../interfaces/TransactionSettings.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`beginTransaction`](../interfaces/Driver.md#begintransaction)

***

### commitTransaction()

> **commitTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:81](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L81)

Commits a transaction.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`commitTransaction`](../interfaces/Driver.md#committransaction)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:111](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L111)

Destroys the driver and releases all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`destroy`](../interfaces/Driver.md#destroy)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:66](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L66)

Initializes the driver.

After calling this method the driver should be usable and `acquireConnection` etc.
methods should be callable.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`init`](../interfaces/Driver.md#init)

***

### releaseConnection()

> **releaseConnection**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:103](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L103)

Releases a connection back to the pool.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseConnection`](../interfaces/Driver.md#releaseconnection)

***

### rollbackToSavepoint()

> **rollbackToSavepoint**(`connection`, `savepointName`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:96](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L96)

Rolls back to a savepoint within a transaction.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

##### savepointName

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackToSavepoint`](../interfaces/Driver.md#rollbacktosavepoint)

***

### rollbackTransaction()

> **rollbackTransaction**(`connection`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:85](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L85)

Rolls back a transaction.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackTransaction`](../interfaces/Driver.md#rollbacktransaction)

***

### savepoint()

> **savepoint**(`connection`, `savepointName`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:89](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L89)

Establishses a new savepoint within a transaction.

#### Parameters

##### connection

[`MssqlConnection`](MssqlConnection.md)

##### savepointName

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`savepoint`](../interfaces/Driver.md#savepoint)
