[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresDialectConfig

# Interface: PostgresDialectConfig

Defined in: [dialect/postgres/postgres-dialect-config.ts:7](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L7)

Config for the PostgreSQL dialect.

## Properties

### controlClient?

> `optional` **controlClient?**: [`PostgresClientConstructor`](../types/PostgresClientConstructor.md)

Defined in: [dialect/postgres/postgres-dialect-config.ts:16](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L16)

A `pg` `Client` constructor, to be used for connecting to the database
outside of the `pool` to avoid waiting for an idle connection.

This is useful for cancelling queries on the database side.

Defaults to the `Pool`'s undocumented `Client` member, if it exists.

***

### cursor?

> `optional` **cursor?**: [`PostgresCursorConstructor`](../types/PostgresCursorConstructor.md)

Defined in: [dialect/postgres/postgres-dialect-config.ts:33](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L33)

https://github.com/brianc/node-postgres/tree/master/packages/pg-cursor

```ts
import { PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import Cursor from 'pg-cursor'
// or import * as Cursor from 'pg-cursor'

new PostgresDialect({
 cursor: Cursor,
 pool: new Pool('postgres://localhost:5432/mydb')
})
```

***

### onCreateConnection?

> `optional` **onCreateConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:38](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L38)

Called once for each created connection.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### onReserveConnection?

> `optional` **onReserveConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L46)

Called every time a connection is acquired from the pool.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### pool

> **pool**: [`PostgresPool`](PostgresPool.md) \| ((`options?`) => `Promise`\<[`PostgresPool`](PostgresPool.md)\>)

Defined in: [dialect/postgres/postgres-dialect-config.ts:58](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L58)

A postgres `Pool` instance or a function that returns one.

If a function is provided, it's called once when the first query is executed.

https://node-postgres.com/apis/pool
