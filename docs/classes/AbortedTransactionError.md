[**kysely**](../index.md)

***

[kysely](../modules.md) / AbortedTransactionError

# Class: AbortedTransactionError

Defined in: [driver/aborted-transaction-error.ts:8](https://github.com/kysely-org/kysely/blob/master/src/driver/aborted-transaction-error.ts#L8)

Thrown when the database rolls back a transaction instead of committing it.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- `Error`

## Constructors

### Constructor

> **new AbortedTransactionError**(): `AbortedTransactionError`

Defined in: [driver/aborted-transaction-error.ts:12](https://github.com/kysely-org/kysely/blob/master/src/driver/aborted-transaction-error.ts#L12)

#### Returns

`AbortedTransactionError`

#### Overrides

`Error.constructor`

## Properties

### \[ABORTED\_TRANSACTION\_ERROR\]

> `readonly` **\[ABORTED\_TRANSACTION\_ERROR\]**: `true` = `true`

Defined in: [driver/aborted-transaction-error.ts:10](https://github.com/kysely-org/kysely/blob/master/src/driver/aborted-transaction-error.ts#L10)

***

### name

> **name**: `string` = `'AbortedTransactionError'`

Defined in: [driver/aborted-transaction-error.ts:9](https://github.com/kysely-org/kysely/blob/master/src/driver/aborted-transaction-error.ts#L9)

#### Overrides

`Error.name`
