[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresPoolClient

# Interface: PostgresPoolClient

Defined in: [dialect/postgres/postgres-dialect-config.ts:120](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L120)

This interface is the subset of pg driver's `Client` class that
is returned by the `Pool` class, and that kysely needs.

We don't use the type from `pg` here to not have a dependency to it.

https://node-postgres.com/apis/pool#releasing-clients

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Omit`\<[`PostgresClient`](PostgresClient.md), `"connect"` \| `"end"`\>

## Properties

### processID?

> `optional` **processID?**: `number`

Defined in: [dialect/postgres/postgres-dialect-config.ts:102](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L102)

#### Inherited from

[`PostgresClient`](PostgresClient.md).[`processID`](PostgresClient.md#processid)

## Methods

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

##### Inherited from

[`PostgresClient`](PostgresClient.md).[`query`](PostgresClient.md#query)

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

##### Inherited from

[`PostgresClient`](PostgresClient.md).[`query`](PostgresClient.md#query)

***

### release()

> **release**(`destroy?`): `void`

Defined in: [dialect/postgres/postgres-dialect-config.ts:124](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L124)

#### Parameters

##### destroy?

`boolean`

#### Returns

`void`
