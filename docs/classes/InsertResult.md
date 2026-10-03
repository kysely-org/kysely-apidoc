[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertResult

# Class: InsertResult

Defined in: [query-builder/insert-result.ts:29](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-result.ts#L29)

The result of an insert query.

If the table has an auto incrementing primary key [insertId](#insertid) will hold
the generated id on dialects that support it. For example PostgreSQL doesn't
return the id by default and [insertId](#insertid) is undefined. On PostgreSQL you
need to use [ReturningInterface.returning](../interfaces/ReturningInterface.md#returning) or [ReturningInterface.returningAll](../interfaces/ReturningInterface.md#returningall)
to get out the inserted id.

[numInsertedOrUpdatedRows](#numinsertedorupdatedrows) holds the number of (actually) inserted rows.
On MySQL, updated rows are counted twice when using `on duplicate key update`.

### Examples

```ts
import type { NewPerson } from 'type-editor' // imaginary module

async function insertPerson(person: NewPerson) {
  const result = await db
    .insertInto('person')
    .values(person)
    .executeTakeFirstOrThrow()

  console.log(result.insertId) // relevant on MySQL
  console.log(result.numInsertedOrUpdatedRows) // always relevant
}
```

## Constructors

### Constructor

> **new InsertResult**(`insertId`, `numInsertedOrUpdatedRows`): `InsertResult`

Defined in: [query-builder/insert-result.ts:47](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-result.ts#L47)

#### Parameters

##### insertId

`bigint` \| `undefined`

##### numInsertedOrUpdatedRows

`bigint` \| `undefined`

#### Returns

`InsertResult`

## Properties

### insertId

> `readonly` **insertId**: `bigint` \| `undefined`

Defined in: [query-builder/insert-result.ts:40](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-result.ts#L40)

The auto incrementing primary key of the inserted row.

This property can be undefined when the query contains an `on conflict`
clause that makes the query succeed even when nothing gets inserted.

This property is always undefined on dialects like PostgreSQL that
don't return the inserted id by default. On those dialects you need
to use the [returning](../interfaces/ReturningInterface.md#returning) method.

***

### numInsertedOrUpdatedRows

> `readonly` **numInsertedOrUpdatedRows**: `bigint` \| `undefined`

Defined in: [query-builder/insert-result.ts:45](https://github.com/kysely-org/kysely/blob/master/src/query-builder/insert-result.ts#L45)

Affected rows count.
