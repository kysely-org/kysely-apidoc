[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlConnection

# Class: MysqlConnection

Defined in: [dialect/mysql/mysql-driver.ts:172](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L172)

A single connection to the database engine.

These are created by an instance of [Driver](../interfaces/Driver.md).

## Implements

- [`DatabaseConnection`](../interfaces/DatabaseConnection.md)

## Constructors

### Constructor

> **new MysqlConnection**(`connection`, `controlConnection`): `MysqlConnection`

Defined in: [dialect/mysql/mysql-driver.ts:178](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L178)

#### Parameters

##### connection

[`MysqlPoolConnection`](../interfaces/MysqlPoolConnection.md)

##### controlConnection

(\{(`connectionUri`): [`MysqlConnection`](../interfaces/MysqlConnection.md); (`config`): [`MysqlConnection`](../interfaces/MysqlConnection.md); \}) \| `undefined`

#### Returns

`MysqlConnection`

## Methods

### \[PRIVATE\_RELEASE\_METHOD\]()

> **\[PRIVATE\_RELEASE\_METHOD\]**(): `void`

Defined in: [dialect/mysql/mysql-driver.ts:299](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L299)

#### Returns

`void`

***

### cancelQuery()

> **cancelQuery**(`controlConnectionProvider`): `Promise`\<`void`\>

Defined in: [dialect/mysql/mysql-driver.ts:186](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L186)

Used by executors to cancel the inflight query on the database side.

#### Parameters

##### controlConnectionProvider

[`ControlConnectionProvider`](../types/ControlConnectionProvider.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`cancelQuery`](../interfaces/DatabaseConnection.md#cancelquery)

***

### collectSessionInfo()

> **collectSessionInfo**(): `Promise`\<`void`\>

Defined in: [dialect/mysql/mysql-driver.ts:195](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L195)

Used by executors to prepare the connection for operations on the database side.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`collectSessionInfo`](../interfaces/DatabaseConnection.md#collectsessioninfo)

***

### executeQuery()

> **executeQuery**\<`O`\>(`compiledQuery`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/mysql/mysql-driver.ts:213](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L213)

#### Type Parameters

##### O

`O`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`executeQuery`](../interfaces/DatabaseConnection.md#executequery)

***

### killSession()

> **killSession**(`controlConnectionProvider`): `Promise`\<`void`\>

Defined in: [dialect/mysql/mysql-driver.ts:246](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L246)

Used by executors to kill the session on the database side.

#### Parameters

##### controlConnectionProvider

[`ControlConnectionProvider`](../types/ControlConnectionProvider.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`killSession`](../interfaces/DatabaseConnection.md#killsession)

***

### streamQuery()

> **streamQuery**\<`O`\>(`compiledQuery`, `_chunkSize`): `AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/mysql/mysql-driver.ts:264](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-driver.ts#L264)

#### Type Parameters

##### O

`O`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

##### \_chunkSize

`number`

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`streamQuery`](../interfaces/DatabaseConnection.md#streamquery)
