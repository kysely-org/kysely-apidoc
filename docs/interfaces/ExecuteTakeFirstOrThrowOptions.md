[**kysely**](../index.md)

***

[kysely](../modules.md) / ExecuteTakeFirstOrThrowOptions

# Interface: ExecuteTakeFirstOrThrowOptions

Defined in: [util/executable.ts:37](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L37)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`AbortableQueryOptions`](AbortableQueryOptions.md)

## Properties

### errorConstructor?

> `optional` **errorConstructor?**: [`NoResultErrorConstructor`](../types/NoResultErrorConstructor.md) \| ((`node`) => `Error`)

Defined in: [util/executable.ts:44](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L44)

An optional error constructor that is used to create an error
when the query returns no results.

By default, an instance of [NoResultError](../classes/NoResultError.md) is thrown.

***

### inflightQueryAbortStrategy?

> `readonly` `optional` **inflightQueryAbortStrategy?**: [`InflightQueryAbortStrategy`](../types/InflightQueryAbortStrategy.md)

Defined in: [util/abort.ts:45](https://github.com/kysely-org/kysely/blob/master/src/util/abort.ts#L45)

Controls what happens when the [signal](AbortableOperationOptions.md#signal) is aborted while a query is
in-flight.

`'ignore query'` stops waiting for query results. The query continues running
on the database server, and the connection is released back to the pool only
after the in-flight query settles.

`'cancel query'` attempts to cancel the query on the database side (e.g. `pg_cancel_backend`
in PostgreSQL or `kill query` in MySQL). This requires the dialect's connection
to implement [DatabaseConnection.cancelQuery](DatabaseConnection.md#cancelquery). Otherwise, falls back
to `'ignore query'` with a warning. Writes (insert, update, delete) are not
cancellable in most database engines, so your mileage
may vary. Also, some databases do not cancel the running query immediately
resulting in changes being committed sometimes - consider `'kill session'`
when you need stronger guarantees, at all costs.

`'kill session'` attempts to kill the database process/session the query is
running in (e.g. `pg_terminate_backend` in PostgreSQL) and with it any running
queries, transactions and obtained locks. This requires the dialect's connection
to implement [DatabaseConnection.killSession](DatabaseConnection.md#killsession). Otherwise, falls back
to `'cancel query'` with a warning. Killing the session is very aggressive,
and will require reconnection on the next database operation if there are
no idle connections available in the pool.

Default is `'ignore query'`.

#### Inherited from

[`AbortableQueryOptions`](AbortableQueryOptions.md).[`inflightQueryAbortStrategy`](AbortableQueryOptions.md#inflightqueryabortstrategy)

***

### signal?

> `readonly` `optional` **signal?**: `AbortSignal`

Defined in: [util/abort.ts:14](https://github.com/kysely-org/kysely/blob/master/src/util/abort.ts#L14)

An optional signal that can be used to abort the execution of (async) operations.

This is useful for cancelling long-running queries, for example when
the user navigates away from the page or closes the browser tab.

See [inflightQueryAbortStrategy](#inflightqueryabortstrategy) for handling of database side query.

#### Inherited from

[`AbortableQueryOptions`](AbortableQueryOptions.md).[`signal`](AbortableQueryOptions.md#signal)
