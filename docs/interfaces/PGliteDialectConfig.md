[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteDialectConfig

# Interface: PGliteDialectConfig

Defined in: [dialect/pglite/pglite-dialect-config.ts:7](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L7)

Config for the PGlite dialect.

## Properties

### onCreateConnection?

> `optional` **onCreateConnection?**: (`connection`, `options?`) => `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L14)

Called once when the first query is executed.

This is a Kysely specific feature and does not come from the `@electric-sql/pglite`
module.

#### Parameters

##### connection

[`DatabaseConnection`](DatabaseConnection.md)

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`void`\>

***

### pglite

> **pglite**: [`PGlite`](PGlite.md) \| ((`options?`) => [`PGlite`](PGlite.md) \| `Promise`\<[`PGlite`](PGlite.md)\>)

Defined in: [dialect/pglite/pglite-dialect-config.ts:36](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L36)

A PGlite instance or a function that returns one.

If a function is provided, it's called once when the first query is executed.

Once the driver has initialized, [Kysely.destroy](../classes/Kysely.md#destroy) calls `pglite.close()`
if the instance is still open, whether it is supplied directly or returned
by a function. If initialization hasn't started, `db.destroy()` does nothing,
even if the supplied instance has been used outside Kysely.

If Kysely is not the sole consumer of the instance, or its lifecycle is
managed elsewhere, skip `db.destroy()`. Let the application call
`pglite.close()` once all consumers, including Kysely, have finished. No
separate cleanup of the `Kysely` instance is needed.

https://pglite.dev/docs/api#main-constructor
