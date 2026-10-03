[**kysely**](../index.md)

***

[kysely](../modules.md) / PGlite

# Interface: PGlite

Defined in: [dialect/pglite/pglite-dialect-config.ts:38](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L38)

This interface is the subset of the PGlite instance that kysely needs.

We don't use the type from `@electric-sql/pglite` here to not have a dependency
to it.

https://pglite.dev/docs/api

## Properties

### closed

> **closed**: `boolean`

Defined in: [dialect/pglite/pglite-dialect-config.ts:40](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L40)

***

### ready

> **ready**: `boolean`

Defined in: [dialect/pglite/pglite-dialect-config.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L46)

***

### waitReady

> **waitReady**: `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L48)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:39](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L39)

#### Returns

`Promise`\<`void`\>

***

### query()

> **query**\<`T`\>(`query`, `params?`, `options?`): `Promise`\<[`PGliteQueryResults`](PGliteQueryResults.md)\<`T`\>\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:41](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L41)

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

Defined in: [dialect/pglite/pglite-dialect-config.ts:47](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L47)

#### Type Parameters

##### T

`T`

#### Parameters

##### callback

(`tx`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>
