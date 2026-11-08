[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteTransaction

# Interface: PGliteTransaction

Defined in: [dialect/pglite/pglite-dialect-config.ts:80](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L80)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Pick`\<[`PGlite`](PGlite.md), `"query"`\>

## Methods

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

#### Inherited from

[`PGlite`](PGlite.md).[`query`](PGlite.md#query)

***

### rollback()

> **rollback**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:81](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L81)

#### Returns

`Promise`\<`void`\>
