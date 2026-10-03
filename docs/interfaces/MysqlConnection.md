[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlConnection

# Interface: MysqlConnection

Defined in: [dialect/mysql/mysql-dialect-config.ts:64](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L64)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`MysqlPoolConnection`](MysqlPoolConnection.md)

## Properties

### config

> **config**: `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:65](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L65)

***

### threadId

> **threadId**: `number`

Defined in: [dialect/mysql/mysql-dialect-config.ts:76](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L76)

## Methods

### connect()

> **connect**(`callback?`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:66](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L66)

#### Parameters

##### callback?

(`error`) => `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:67](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L67)

#### Returns

`void`

***

### query()

> **query**(`sql`, `parameters`, `callback?`): `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:71](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L71)

#### Parameters

##### sql

`string`

##### parameters

`any`

##### callback?

(`error`, `result`) => `void`

#### Returns

`object`

##### stream

> **stream**: (`options`) => [`MysqlStream`](MysqlStream.md)

###### Parameters

###### options

[`MysqlStreamOptions`](MysqlStreamOptions.md)

###### Returns

[`MysqlStream`](MysqlStream.md)
