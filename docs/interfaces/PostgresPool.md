[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresPool

# Interface: PostgresPool

Defined in: [dialect/postgres/postgres-dialect-config.ts:71](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L71)

This interface is the subset of pg driver's `Pool` class that
kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/pool

## Properties

### Client?

> `optional` **Client?**: [`PostgresClientConstructor`](../types/PostgresClientConstructor.md)

Defined in: [dialect/postgres/postgres-dialect-config.ts:73](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L73)

***

### options

> **options**: `object`

Defined in: [dialect/postgres/postgres-dialect-config.ts:77](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L77)

## Methods

### connect()

> **connect**(): `Promise`\<[`PostgresPoolClient`](PostgresPoolClient.md)\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:74](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L74)

#### Returns

`Promise`\<[`PostgresPoolClient`](PostgresPoolClient.md)\>

***

### end()

> **end**(): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:75](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L75)

#### Returns

`Promise`\<`void`\>
