[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresClient

# Interface: PostgresClient

Defined in: [dialect/postgres/postgres-dialect-config.ts:98](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L98)

This interface is the subset of pg driver's `Client` class that
kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/client

## Properties

### processID?

> `optional` **processID?**: `number`

Defined in: [dialect/postgres/postgres-dialect-config.ts:102](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L102)

## Methods

### connect()

> **connect**(): `Promise`\<`PostgresClient`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:99](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L99)

#### Returns

`Promise`\<`PostgresClient`\>

***

### end()

> **end**(): `void`

Defined in: [dialect/postgres/postgres-dialect-config.ts:100](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L100)

#### Returns

`void`

***

### query()

#### Call Signature

> **query**\<`R`\>(`sql`, `parameters`): `Promise`\<[`PostgresQueryResult`](PostgresQueryResult.md)\<`R`\>\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:103](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L103)

##### Type Parameters

###### R

`R`

##### Parameters

###### sql

`string`

###### parameters

readonly `unknown`[]

##### Returns

`Promise`\<[`PostgresQueryResult`](PostgresQueryResult.md)\<`R`\>\>

#### Call Signature

> **query**\<`R`\>(`cursor`): [`PostgresCursor`](PostgresCursor.md)\<`R`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:107](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L107)

##### Type Parameters

###### R

`R`

##### Parameters

###### cursor

[`PostgresCursor`](PostgresCursor.md)\<`R`\>

##### Returns

[`PostgresCursor`](PostgresCursor.md)\<`R`\>
