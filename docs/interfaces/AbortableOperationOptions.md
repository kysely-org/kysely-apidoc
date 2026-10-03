[**kysely**](../index.md)

***

[kysely](../modules.md) / AbortableOperationOptions

# Interface: AbortableOperationOptions

Defined in: [util/abort.ts:5](https://github.com/kysely-org/kysely/blob/master/src/util/abort.ts#L5)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`PluginTransformResultArgs`](PluginTransformResultArgs.md)
- [`StreamOptions`](StreamOptions.md)
- [`AbortableQueryOptions`](AbortableQueryOptions.md)

## Properties

### signal?

> `readonly` `optional` **signal?**: `AbortSignal`

Defined in: [util/abort.ts:14](https://github.com/kysely-org/kysely/blob/master/src/util/abort.ts#L14)

An optional signal that can be used to abort the execution of (async) operations.

This is useful for cancelling long-running queries, for example when
the user navigates away from the page or closes the browser tab.

See inflightQueryAbortStrategy for handling of database side query.
