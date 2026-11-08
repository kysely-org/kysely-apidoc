[**kysely**](../index.md)

***

[kysely](../modules.md) / MysqlPool

# Interface: MysqlPool

Defined in: [dialect/mysql/mysql-dialect-config.ts:67](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L67)

This interface is the subset of mysql2 driver's `Pool` class that
kysely needs.

We don't use the type from `mysql2` here to not have a dependency to it.

https://github.com/sidorares/node-mysql2#using-connection-pools

## Methods

### end()

> **end**(`callback`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:71](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L71)

#### Parameters

##### callback

(`error`) => `void`

#### Returns

`void`

***

### getConnection()

> **getConnection**(`callback`): `void`

Defined in: [dialect/mysql/mysql-dialect-config.ts:68](https://github.com/kysely-org/kysely/blob/master/src/dialect/mysql/mysql-dialect-config.ts#L68)

#### Parameters

##### callback

(`error`, `connection`) => `void`

#### Returns

`void`
