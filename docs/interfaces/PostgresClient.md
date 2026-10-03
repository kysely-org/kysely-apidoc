[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresClient

# Interface: PostgresClient

Defined in: [dialect/postgres/postgres-dialect-config.ts:88](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L88)

This interface is the subset of pg driver's `Client` class that
kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/client

## Properties

### processID?

> `optional` **processID?**: `number`

Defined in: [dialect/postgres/postgres-dialect-config.ts:92](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L92)

## Methods

### connect()

> **connect**(): `Promise`\<`PostgresClient`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:89](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L89)

#### Returns

`Promise`\<`PostgresClient`\>

***

### end()

> **end**(): `void`

Defined in: [dialect/postgres/postgres-dialect-config.ts:90](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L90)

#### Returns

`void`

***

### query()

#### Call Signature

> **query**\<`R`\>(`sql`, `parameters`): `Promise`\<[`PostgresQueryResult`](PostgresQueryResult.md)\<`R`\>\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:93](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L93)

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

Defined in: [dialect/postgres/postgres-dialect-config.ts:97](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L97)

##### Type Parameters

###### R

`R`

##### Parameters

###### cursor

[`PostgresCursor`](PostgresCursor.md)\<`R`\>

##### Returns

[`PostgresCursor`](PostgresCursor.md)\<`R`\>
