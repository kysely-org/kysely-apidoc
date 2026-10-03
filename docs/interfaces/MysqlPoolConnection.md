[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlPoolConnection

# Interface: MysqlPoolConnection

Defined in: [dialect/mysql/mysql-dialect-config.ts:81](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L81)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`MysqlConnection`](MysqlConnection.md)

## Properties

### config

> **config**: `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:65](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L65)

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`config`](MysqlConnection.md#config)

***

### threadId

> **threadId**: `number`

Defined in: [dialect/mysql/mysql-dialect-config.ts:76](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L76)

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`threadId`](MysqlConnection.md#threadid)

## Methods

### connect()

> **connect**(`callback?`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:66](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L66)

#### Parameters

##### callback?

(`error`) => `void`

#### Returns

`void`

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`connect`](MysqlConnection.md#connect)

***

### destroy()

> **destroy**(): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:67](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L67)

#### Returns

`void`

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`destroy`](MysqlConnection.md#destroy)

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

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`query`](MysqlConnection.md#query)

***

### release()

> **release**(): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:82](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L82)

#### Returns

`void`
