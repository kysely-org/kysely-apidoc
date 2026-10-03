[**kysely**](../index.md)

***

[kysely](../modules.md) / UpdateResult

# Class: UpdateResult

Defined in: [query-builder/update-result.ts:1](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-result.ts#L1)

## Constructors

### Constructor

> **new UpdateResult**(`numUpdatedRows`, `numChangedRows`): `UpdateResult`

Defined in: [query-builder/update-result.ts:15](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-result.ts#L15)

#### Parameters

##### numUpdatedRows

`bigint`

##### numChangedRows

`bigint` \| `undefined`

#### Returns

`UpdateResult`

## Properties

### numChangedRows?

> `readonly` `optional` **numChangedRows?**: `bigint`

Defined in: [query-builder/update-result.ts:13](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-result.ts#L13)

The number of rows the update query changed.

This is **optional** and only supported in dialects such as MySQL.
You would probably use [numUpdatedRows](#numupdatedrows) in most cases.

***

### numUpdatedRows

> `readonly` **numUpdatedRows**: `bigint`

Defined in: [query-builder/update-result.ts:5](https://github.com/kysely-org/kysely/blob/master/src/query-builder/update-result.ts#L5)

The number of rows the update query updated (even if not changed).
