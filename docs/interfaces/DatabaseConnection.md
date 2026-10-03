[**kysely**](../index.md)

***

[kysely](../modules.md) / DatabaseConnection

# Interface: DatabaseConnection

Defined in: [driver/database-connection.ts:9](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L9)

A single connection to the database engine.

These are created by an instance of [Driver](Driver.md).

## Methods

### cancelQuery()?

> `optional` **cancelQuery**(`controlConnectionProvider`): `Promise`\<`void`\>

Defined in: [driver/database-connection.ts:13](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L13)

Used by executors to cancel the inflight query on the database side.

#### Parameters

##### controlConnectionProvider

[`ControlConnectionProvider`](../types/ControlConnectionProvider.md)

#### Returns

`Promise`\<`void`\>

***

### collectSessionInfo()?

> `optional` **collectSessionInfo**(): `Promise`\<`void`\>

Defined in: [driver/database-connection.ts:20](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L20)

Used by executors to prepare the connection for operations on the database side.

#### Returns

`Promise`\<`void`\>

***

### executeQuery()

> **executeQuery**\<`R`\>(`compiledQuery`, `options?`): `Promise`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

Defined in: [driver/database-connection.ts:22](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L22)

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](CompiledQuery.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

***

### killSession()?

> `optional` **killSession**(`controlConnectionProvider`): `Promise`\<`void`\>

Defined in: [driver/database-connection.ts:30](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L30)

Used by executors to kill the session on the database side.

#### Parameters

##### controlConnectionProvider

[`ControlConnectionProvider`](../types/ControlConnectionProvider.md)

#### Returns

`Promise`\<`void`\>

***

### streamQuery()

> **streamQuery**\<`R`\>(`compiledQuery`, `chunkSize`, `options?`): `AsyncIterableIterator`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

Defined in: [driver/database-connection.ts:34](https://github.com/kysely-org/kysely/blob/master/src/driver/database-connection.ts#L34)

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](CompiledQuery.md)

##### chunkSize

`number`

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](QueryResult.md)\<`R`\>\>
