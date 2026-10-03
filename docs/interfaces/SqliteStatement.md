[**kysely**](../index.md)

***

[kysely](../modules.md) / SqliteStatement

# Interface: SqliteStatement

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:43](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L43)

## Properties

### reader

> `readonly` **reader**: `boolean`

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:44](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L44)

## Methods

### all()

> **all**(`parameters`): `unknown`[]

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:45](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L45)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`unknown`[]

***

### iterate()

> **iterate**(`parameters`): `IterableIterator`\<`unknown`\>

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:50](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L50)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`IterableIterator`\<`unknown`\>

***

### run()

> **run**(`parameters`): `object`

Defined in: [dialect/sqlite/sqlite-dialect-config.ts:46](https://github.com/kysely-org/kysely/blob/master/src/dialect/sqlite/sqlite-dialect-config.ts#L46)

#### Parameters

##### parameters

readonly `unknown`[]

#### Returns

`object`

##### changes

> **changes**: `number` \| `bigint`

##### lastInsertRowid

> **lastInsertRowid**: `number` \| `bigint`
