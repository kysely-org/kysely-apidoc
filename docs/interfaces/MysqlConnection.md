[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlConnection

# Interface: MysqlConnection

Defined in: [dialect/mysql/mysql-dialect-config.ts:74](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L74)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`MysqlPoolConnection`](MysqlPoolConnection.md)

## Properties

### config

> **config**: `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:75](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L75)

***

### threadId

> **threadId**: `number`

Defined in: [dialect/mysql/mysql-dialect-config.ts:86](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L86)

## Methods

### connect()

> **connect**(`callback?`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:76](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L76)

#### Parameters

##### callback?

(`error`) => `void`

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:77](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L77)

#### Returns

`void`

***

### query()

> **query**(`sql`, `parameters`, `callback?`): `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:81](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L81)

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
