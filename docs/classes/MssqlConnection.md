[**kysely**](../index.md)

***

[kysely](../modules.md) / MssqlConnection

# Class: MssqlConnection

Defined in: [dialect/mssql/mssql-driver.ts:116](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L116)

A single connection to the database engine.

These are created by an instance of [Driver](../interfaces/Driver.md).

## Implements

- [`DatabaseConnection`](../interfaces/DatabaseConnection.md)

## Constructors

### Constructor

> **new MssqlConnection**(`connection`, `tedious`): `MssqlConnection`

Defined in: [dialect/mssql/mssql-driver.ts:122](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L122)

#### Parameters

##### connection

[`TediousConnection`](../interfaces/TediousConnection.md)

##### tedious

[`Tedious`](../interfaces/Tedious.md)

#### Returns

`MssqlConnection`

## Methods

### \[PRIVATE\_DESTROY\_METHOD\]()

> **\[PRIVATE\_DESTROY\_METHOD\]**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:310](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L310)

#### Returns

`Promise`\<`void`\>

***

### \[PRIVATE\_RESET\_METHOD\]()

> **\[PRIVATE\_RESET\_METHOD\]**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:322](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L322)

#### Returns

`Promise`\<`void`\>

***

### \[PRIVATE\_VALIDATE\_METHOD\]()

> **\[PRIVATE\_VALIDATE\_METHOD\]**(): `Promise`\<`boolean`\>

Defined in: [dialect/mssql/mssql-driver.ts:334](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L334)

#### Returns

`Promise`\<`boolean`\>

***

### beginTransaction()

> **beginTransaction**(`settings`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:128](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L128)

#### Parameters

##### settings

[`TransactionSettings`](../interfaces/TransactionSettings.md)

#### Returns

`Promise`\<`void`\>

***

### cancelQuery()

> **cancelQuery**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:145](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L145)

Used by executors to cancel the inflight query on the database side.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`cancelQuery`](../interfaces/DatabaseConnection.md#cancelquery)

***

### commitTransaction()

> **commitTransaction**(): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:162](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L162)

#### Returns

`Promise`\<`void`\>

***

### connect()

> **connect**(): `Promise`\<`MssqlConnection`\>

Defined in: [dialect/mssql/mssql-driver.ts:171](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L171)

#### Returns

`Promise`\<`MssqlConnection`\>

***

### executeQuery()

> **executeQuery**\<`O`\>(`compiledQuery`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/mssql/mssql-driver.ts:212](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L212)

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

### rollbackTransaction()

> **rollbackTransaction**(`savepointName?`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:237](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L237)

#### Parameters

##### savepointName?

`string`

#### Returns

`Promise`\<`void`\>

***

### savepoint()

> **savepoint**(`savepointName`): `Promise`\<`void`\>

Defined in: [dialect/mssql/mssql-driver.ts:246](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L246)

#### Parameters

##### savepointName

`string`

#### Returns

`Promise`\<`void`\>

***

### streamQuery()

> **streamQuery**\<`O`\>(`compiledQuery`, `chunkSize`): `AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [dialect/mssql/mssql-driver.ts:255](https://github.com/kysely-org/kysely/blob/master/src/dialect/mssql/mssql-driver.ts#L255)

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
