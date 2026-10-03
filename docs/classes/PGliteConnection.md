[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteConnection

# Class: PGliteConnection

Defined in: [dialect/pglite/pglite-driver.ts:122](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L122)

A single connection to the database engine.

These are created by an instance of [Driver](../interfaces/Driver.md).

## Implements

- [`DatabaseConnection`](../interfaces/DatabaseConnection.md)

## Constructors

### Constructor

> **new PGliteConnection**(`pglite`): `PGliteConnection`

Defined in: [dialect/pglite/pglite-driver.ts:129](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L129)

#### Parameters

##### pglite

[`PGlite`](../interfaces/PGlite.md)

#### Returns

`PGliteConnection`

## Methods

### \[PRIVATE\_BEGIN\_TRANSACTION\_METHOD\]()

> **\[PRIVATE\_BEGIN\_TRANSACTION\_METHOD\]**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:155](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L155)

#### Returns

`Promise`\<`void`\>

***

### \[PRIVATE\_COMMIT\_TRANSACTION\_METHOD\]()

> **\[PRIVATE\_COMMIT\_TRANSACTION\_METHOD\]**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:179](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L179)

#### Returns

`Promise`\<`void`\>

***

### \[PRIVATE\_ROLLBACK\_TRANSACTION\_METHOD\]()

> **\[PRIVATE\_ROLLBACK\_TRANSACTION\_METHOD\]**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-driver.ts:188](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L188)

#### Returns

`Promise`\<`void`\>

***

### executeQuery()

> **executeQuery**\<`R`\>(`compiledQuery`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

Defined in: [dialect/pglite/pglite-driver.ts:133](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L133)

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`executeQuery`](../interfaces/DatabaseConnection.md#executequery)

***

### streamQuery()

> **streamQuery**\<`R`\>(): `AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

Defined in: [dialect/pglite/pglite-driver.ts:151](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-driver.ts#L151)

#### Type Parameters

##### R

`R`

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

#### Implementation of

[`DatabaseConnection`](../interfaces/DatabaseConnection.md).[`streamQuery`](../interfaces/DatabaseConnection.md#streamquery)
