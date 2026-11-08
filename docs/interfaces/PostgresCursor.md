[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresCursor

# Interface: PostgresCursor\<T\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:134](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L134)

This interface is pg driver's `Cursor` class that kysely needs.

We don't use the type from `pg-cursor` here to not have a dependency to it.

https://node-postgres.com/apis/cursor

## Type Parameters

### T

`T`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:136](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L136)

#### Returns

`Promise`\<`void`\>

***

### read()

> **read**(`rowsCount`): `Promise`\<`T`[]\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:135](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L135)

#### Parameters

##### rowsCount

`number`

#### Returns

`Promise`\<`T`[]\>
