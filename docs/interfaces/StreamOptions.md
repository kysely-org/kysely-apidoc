[**kysely**](../index.md)

***

[kysely](../modules.md) / StreamOptions

# Interface: StreamOptions

Defined in: [util/streamable.ts:35](https://github.com/kysely-org/kysely/blob/master/src/util/streamable.ts#L35)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`AbortableOperationOptions`](AbortableOperationOptions.md)

## Properties

### chunkSize?

> `optional` **chunkSize?**: `number`

Defined in: [util/streamable.ts:41](https://github.com/kysely-org/kysely/blob/master/src/util/streamable.ts#L41)

How many rows should be pulled from the database at once.

Supported only by some dialects like PostgreSQL.

***

### signal?

> `readonly` `optional` **signal?**: `AbortSignal`

Defined in: [util/abort.ts:14](https://github.com/kysely-org/kysely/blob/master/src/util/abort.ts#L14)

An optional signal that can be used to abort the execution of (async) operations.

This is useful for cancelling long-running queries, for example when
the user navigates away from the page or closes the browser tab.

See inflightQueryAbortStrategy for handling of database side query.

#### Inherited from

[`AbortableOperationOptions`](AbortableOperationOptions.md).[`signal`](AbortableOperationOptions.md#signal)
