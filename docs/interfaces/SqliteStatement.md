[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteStatement

# Interface: SqliteStatement

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:53](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L53)

## Properties

### reader

> `readonly` **reader**: `boolean`

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L54)

## Methods

### all()

> **all**(`parameters`): `unknown`[]

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:55](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L55)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`unknown`[]

***

### iterate()

> **iterate**(`parameters`): `IterableIterator`\<`unknown`\>

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:60](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L60)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`IterableIterator`\<`unknown`\>

***

### run()

> **run**(`parameters`): `object`

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L56)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`object`

##### changes

> **changes**: `number` \| `bigint`

##### lastInsertRowid

> **lastInsertRowid**: `number` \| `bigint`
