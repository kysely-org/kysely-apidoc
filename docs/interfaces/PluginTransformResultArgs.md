[**kysely**](../index.md)

***

[kysely](../modules.md) / PluginTransformResultArgs

# Interface: PluginTransformResultArgs

Defined in: [plugin/kysely-plugin.ts:76](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L76)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`AbortableOperationOptions`](AbortableOperationOptions.md)

## Properties

### queryId

> `readonly` **queryId**: [`QueryId`](QueryId.md)

Defined in: [plugin/kysely-plugin.ts:77](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L77)

***

### result

> `readonly` **result**: [`QueryResult`](QueryResult.md)\<[`UnknownRow`](../types/UnknownRow.md)\>

Defined in: [plugin/kysely-plugin.ts:78](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L78)

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
