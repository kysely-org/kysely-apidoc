[**kysely**](../index.md)

***

[kysely](../modules.md) / PostgresCursorConstructor

# Type Alias: PostgresCursorConstructor

> **PostgresCursorConstructor** = \<`T`\>(`sql`, `parameters`) => [`PostgresCursor`](../interfaces/PostgresCursor.md)\<`T`\>

Defined in: [dialect/postgres/postgres-dialect-config.ts:136](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-dialect-config.ts#L136)

This interface is pg driver's `Cursor` class constructor that kysely needs.

We don't use the type from `pg-cursor` here to not have a dependency to it.

https://node-postgres.com/apis/cursor#constructor

## Parameters

### sql

`string`

### parameters

`unknown`[]

## Returns

[`PostgresCursor`](../interfaces/PostgresCursor.md)\<`T`\>
