[**kysely**](../index.md)

***

[kysely](../modules.md) / DummyDriver

# Class: DummyDriver

Defined in: [driver/dummy-driver.ts:41](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L41)

A driver that does absolutely nothing.

You can use this to create Kysely instances solely for building queries

### Examples

This example creates a Kysely instance for building postgres queries:

```ts
import {
  DummyDriver,
  Kysely,
  PostgresAdapter,
  PostgresIntrospector,
  PostgresQueryCompiler
} from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: {
    createAdapter: () => new PostgresAdapter(),
    createDriver: () => new DummyDriver(),
    createIntrospector: (db: Kysely<any>) => new PostgresIntrospector(db),
    createQueryCompiler: () => new PostgresQueryCompiler(),
  },
})
```

You can use it to build a query and compile it to SQL but trying to
execute the query will throw an error.

```ts
const { sql } = db.selectFrom('person').selectAll().compile()
console.log(sql) // select * from "person"
```

## Implements

- [`Driver`](../interfaces/Driver.md)

## Constructors

### Constructor

> **new DummyDriver**(): `DummyDriver`

#### Returns

`DummyDriver`

## Methods

### acquireConnection()

> **acquireConnection**(): `Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

Defined in: [driver/dummy-driver.ts:46](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L46)

Acquires a new connection from the pool.

#### Returns

`Promise`\<[`DatabaseConnection`](../interfaces/DatabaseConnection.md)\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`acquireConnection`](../interfaces/Driver.md#acquireconnection)

***

### beginTransaction()

> **beginTransaction**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:50](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L50)

Begins a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`beginTransaction`](../interfaces/Driver.md#begintransaction)

***

### commitTransaction()

> **commitTransaction**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:54](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L54)

Commits a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`commitTransaction`](../interfaces/Driver.md#committransaction)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:66](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L66)

Destroys the driver and releases all resources.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`destroy`](../interfaces/Driver.md#destroy)

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:42](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L42)

Initializes the driver.

After calling this method the driver should be usable and `acquireConnection` etc.
methods should be callable.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`init`](../interfaces/Driver.md#init)

***

### releaseConnection()

> **releaseConnection**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:62](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L62)

Releases a connection back to the pool.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseConnection`](../interfaces/Driver.md#releaseconnection)

***

### releaseSavepoint()

> **releaseSavepoint**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:70](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L70)

Releases a savepoint within a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`releaseSavepoint`](../interfaces/Driver.md#releasesavepoint)

***

### rollbackToSavepoint()

> **rollbackToSavepoint**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:74](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L74)

Rolls back to a savepoint within a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackToSavepoint`](../interfaces/Driver.md#rollbacktosavepoint)

***

### rollbackTransaction()

> **rollbackTransaction**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:58](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L58)

Rolls back a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`rollbackTransaction`](../interfaces/Driver.md#rollbacktransaction)

***

### savepoint()

> **savepoint**(): `Promise`\<`void`\>

Defined in: [driver/dummy-driver.ts:78](https://github.com/kysely-org/kysely/blob/master/src/driver/dummy-driver.ts#L78)

Establishses a new savepoint within a transaction.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Driver`](../interfaces/Driver.md).[`savepoint`](../interfaces/Driver.md#savepoint)
