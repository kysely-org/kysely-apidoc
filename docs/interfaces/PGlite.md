[**kysely**](../index.md)

***

[kysely](../modules.md) / PGlite

# Interface: PGlite

Defined in: [dialect/pglite/pglite-dialect-config.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L48)

This interface is the subset of the PGlite instance that kysely needs.

We don't use the type from `@electric-sql/pglite` here to not have a dependency
to it.

https://pglite.dev/docs/api

## Properties

### closed

> **closed**: `boolean`

Defined in: [dialect/pglite/pglite-dialect-config.ts:50](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L50)

***

### ready

> **ready**: `boolean`

Defined in: [dialect/pglite/pglite-dialect-config.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L56)

***

### waitReady

> **waitReady**: `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:58](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L58)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:49](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L49)

#### Returns

`Promise`\<`void`\>

***

### query()

> **query**\<`T`\>(`query`, `params?`, `options?`): `Promise`\<[`PGliteQueryResults`](PGliteQueryResults.md)\<`T`\>\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:51](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L51)

#### Type Parameters

##### T

`T`

#### Parameters

##### query

`string`

##### params?

`any`[]

##### options?

[`PGliteQueryOptions`](PGliteQueryOptions.md)

#### Returns

`Promise`\<[`PGliteQueryResults`](PGliteQueryResults.md)\<`T`\>\>

***

### transaction()

> **transaction**\<`T`\>(`callback`): `Promise`\<`T`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:57](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L57)

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`tx`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
