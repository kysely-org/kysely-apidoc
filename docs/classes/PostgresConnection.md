[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresConnection

# Class: PostgresConnection

Defined in: [dialect/postgres/postgres-driver.ts:156](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L156)

A single connection to the database engine.

These are created by an instance of [Driver](../interfaces/Driver.md).

## Implements

- [`DatabaseConnection`](../interfaces/DatabaseConnection.md)

## Constructors

### Constructor

> **new PostgresConnection**(`client`, `options`): `PostgresConnection`

Defined in: [dialect/postgres/postgres-driver.ts:162](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L162)

#### Parameters

##### client

[`PostgresPoolClient`](../interfaces/PostgresPoolClient.md)

##### options

[`PostgresConnectionOptions`](../interfaces/PostgresConnectionOptions.md)

#### Returns

`PostgresConnection`

## Methods

### \[PRIVATE\_RELEASE\_METHOD\]()

> **\[PRIVATE\_RELEASE\_METHOD\]**(): `void`

Defined in: [dialect/postgres/postgres-driver.ts:278](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L278)

#### Returns

`void`

***

### cancelQuery()

> **cancelQuery**(`controlConnectionProvider`): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-driver.ts:167](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L167)

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

Defined in: [dialect/postgres/postgres-driver.ts:176](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L176)

Used by executors to prepare the connection for operations on the database side.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`collectSessionInfo`](../interfaces/DatabaseConnection.md#collectsessioninfo)

***

### executeQuery()

> **executeQuery**\<`O`\>(`compiledQuery`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/postgres/postgres-driver.ts:200](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L200)

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

Defined in: [dialect/postgres/postgres-driver.ts:230](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L230)

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

> **streamQuery**\<`O`\>(`compiledQuery`, `chunkSize`): `AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/postgres/postgres-driver.ts:239](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-driver.ts#L239)

#### Type Parameters

##### O

`O`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

##### chunkSize

`number`

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`streamQuery`](../interfaces/DatabaseConnection.md#streamquery)
