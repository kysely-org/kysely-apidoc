[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresPool

# Interface: PostgresPool

Defined in: [dialect/postgres/postgres-dialect-config.ts:81](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L81)

This interface is the subset of pg driver's `Pool` class that
kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/pool

## Properties

### Client?

> `optional` **Client?**: [`PostgresClientConstructor`](../types/PostgresClientConstructor.md)

Defined in: [dialect/postgres/postgres-dialect-config.ts:83](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L83)

***

### options

> **options**: `object`

Defined in: [dialect/postgres/postgres-dialect-config.ts:87](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L87)

## Methods

### connect()

> **connect**(): `Promise`\<[`PostgresPoolClient`](PostgresPoolClient.md)\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:84](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L84)

#### Returns

`Promise`\<[`PostgresPoolClient`](PostgresPoolClient.md)\>

***

### end()

> **end**(): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:85](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L85)

#### Returns

`Promise`\<`void`\>
