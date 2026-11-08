[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlPoolConnection

# Interface: MysqlPoolConnection

Defined in: [dialect/mysql/mysql-dialect-config.ts:91](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L91)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`MysqlConnection`](MysqlConnection.md)

## Properties

### config

> **config**: `object`

Defined in: [dialect/mysql/mysql-dialect-config.ts:75](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L75)

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`config`](MysqlConnection.md#config)

***

### threadId

> **threadId**: `number`

Defined in: [dialect/mysql/mysql-dialect-config.ts:86](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L86)

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`threadId`](MysqlConnection.md#threadid)

## Methods

### connect()

> **connect**(`callback?`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:76](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L76)

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

Defined in: [dialect/mysql/mysql-dialect-config.ts:77](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L77)

#### Returns

`void`

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`destroy`](MysqlConnection.md#destroy)

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

#### Inherited from

[`MysqlConnection`](MysqlConnection.md).[`query`](MysqlConnection.md#query)

***

### release()

> **release**(): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:92](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L92)

#### Returns

`void`
