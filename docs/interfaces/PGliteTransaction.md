[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteTransaction

# Interface: PGliteTransaction

Defined in: [dialect/pglite/pglite-dialect-config.ts:70](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L70)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Pick`\<[`PGlite`](PGlite.md), `"query"`\>

## Methods

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

#### Inherited from

[`PGlite`](PGlite.md).[`query`](PGlite.md#query)

***

### rollback()

> **rollback**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:71](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L71)

#### Returns

`Promise`\<`void`\>
