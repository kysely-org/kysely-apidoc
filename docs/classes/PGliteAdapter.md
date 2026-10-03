[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteAdapter

# Class: PGliteAdapter

Defined in: [dialect/pglite/pglite-adapter.ts:3](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-adapter.ts#L3)

A basic implementation of `DialectAdapter` with sensible default values.
Third-party dialects can extend this instead of implementing the `DialectAdapter`
interface from scratch. That way all new settings will get default values when
they are added and there will be less breaking changes.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`PostgresAdapter`](PostgresAdapter.md)

## Constructors

### Constructor

> **new PGliteAdapter**(): `PGliteAdapter`

#### Returns

`PGliteAdapter`

#### Inherited from

[`PostgresAdapter`](PostgresAdapter.md).[`constructor`](PostgresAdapter.md#constructor)

## Accessors

### supportsCreateIfNotExists

#### Get Signature

> **get** **supportsCreateIfNotExists**(): `boolean`

Defined in: [dialect/dialect-adapter-base.ts:11](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter-base.ts#L11)

Whether or not this dialect supports `if not exists` in creation of tables/schemas/views/etc.

Default is `false`.

If this is false, Kysely's internal migrations tables and schemas are created
without `if not exists` in migrations. This is not a problem if the dialect
supports transactional DDL.

##### Returns

`boolean`

Whether or not this dialect supports `if not exists` in creation of tables/schemas/views/etc.

Default is `false`.

If this is false, Kysely's internal migrations tables and schemas are created
without `if not exists` in migrations. This is not a problem if the dialect
supports transactional DDL.

#### Inherited from

[`PostgresAdapter`](PostgresAdapter.md).[`supportsCreateIfNotExists`](PostgresAdapter.md#supportscreateifnotexists)

***

### supportsMultipleConnections

#### Get Signature

> **get** **supportsMultipleConnections**(): `boolean`

Defined in: [dialect/pglite/pglite-adapter.ts:4](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-adapter.ts#L4)

Whether or not this dialect supports multiple connections at the same time.

Default is `true`.

If this is false, Kysely will use a single connection for all database operations.

##### Returns

`boolean`

Whether or not this dialect supports multiple connections at the same time.

Default is `true`.

If this is false, Kysely will use a single connection for all database operations.

#### Overrides

[`PostgresAdapter`](PostgresAdapter.md).[`supportsMultipleConnections`](PostgresAdapter.md#supportsmultipleconnections)

***

### supportsOutput

#### Get Signature

> **get** **supportsOutput**(): `boolean`

Defined in: [dialect/dialect-adapter-base.ts:27](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter-base.ts#L27)

Whether or not this dialect supports the `output` clause in inserts
updates and deletes.

Default is `false`.

##### Returns

`boolean`

Whether or not this dialect supports the `output` clause in inserts
updates and deletes.

Default is `false`.

#### Inherited from

[`PostgresAdapter`](PostgresAdapter.md).[`supportsOutput`](PostgresAdapter.md#supportsoutput)

***

### supportsReturning

#### Get Signature

> **get** **supportsReturning**(): `boolean`

Defined in: [dialect/postgres/postgres-adapter.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-adapter.ts#L14)

Whether or not this dialect supports the `returning` in inserts
updates and deletes.

Default is `false`.

##### Returns

`boolean`

Whether or not this dialect supports the `returning` in inserts
updates and deletes.

Default is `false`.

#### Inherited from

[`PostgresAdapter`](PostgresAdapter.md).[`supportsReturning`](PostgresAdapter.md#supportsreturning)

***

### supportsTransactionalDdl

#### Get Signature

> **get** **supportsTransactionalDdl**(): `boolean`

Defined in: [dialect/postgres/postgres-adapter.ts:10](https://github.com/kysely-org/kysely/blob/master/src/dialect/postgres/postgres-adapter.ts#L10)

Whether or not this dialect supports transactional DDL.

Default is `false`.

If this is true, migrations are executed inside a transaction.

##### Returns

`boolean`

Whether or not this dialect supports transactional DDL.

Default is `false`.

If this is true, migrations are executed inside a transaction.

#### Inherited from

[`PostgresAdapter`](PostgresAdapter.md).[`supportsTransactionalDdl`](PostgresAdapter.md#supportstransactionalddl)

## Methods

### acquireMigrationLock()

> **acquireMigrationLock**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-adapter.ts:8](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-adapter.ts#L8)

This method is used to acquire a lock for the migrations so that
it's not possible for two migration operations to run in parallel.

Most dialects have explicit locks that can be used, like advisory locks
in PostgreSQL and the get_lock function in MySQL.

If the dialect doesn't have explicit locks the [MigrationLockOptions.lockTable](../interfaces/MigrationLockOptions.md#locktable)
created by Kysely can be used instead. You can access it through the `options` object.
The lock table has two columns `id` and `is_locked` and there's only one row in the table
whose id is [MigrationLockOptions.lockRowId](../interfaces/MigrationLockOptions.md#lockrowid). `is_locked` is an integer. Kysely
takes care of creating the lock table and inserting the one single row to it before this
method is executed. If the dialect supports schemas and the user has specified a custom
schema in their migration settings, the options object also contains the schema name in
[MigrationLockOptions.lockTableSchema](../interfaces/MigrationLockOptions.md#locktableschema).

Here's an example of how you might implement this method for a dialect that doesn't
have explicit locks but supports `FOR UPDATE` row locks and transactional DDL:

```ts
import { DialectAdapterBase, type MigrationLockOptions, Kysely } from 'kysely'

export class MyAdapter extends DialectAdapterBase {
  override async acquireMigrationLock(
    db: Kysely<any>,
    options: MigrationLockOptions
  ): Promise<void> {
    const queryDb = options.lockTableSchema
      ? db.withSchema(options.lockTableSchema)
      : db

    // Since our imaginary dialect supports transactional DDL and has
    // row locks, we can simply take a row lock here and it will guarantee
    // all subsequent calls to this method from other transactions will
    // wait until this transaction finishes.
    await queryDb
      .selectFrom(options.lockTable)
      .selectAll()
      .where('id', '=', options.lockRowId)
      .forUpdate()
      .execute()
  }

  override async releaseMigrationLock() {
    // noop
  }
}
```

If `supportsTransactionalDdl` is `true` then the `db` passed to this method
is a transaction inside which the migrations will be executed. Otherwise
`db` is a single connection (session) that will be used to execute the
migrations.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PostgresAdapter`](PostgresAdapter.md).[`acquireMigrationLock`](PostgresAdapter.md#acquiremigrationlock)

***

### releaseMigrationLock()

> **releaseMigrationLock**(): `Promise`\<`void`\>

Defined in: [dialect/pglite/pglite-adapter.ts:14](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-adapter.ts#L14)

Releases the migration lock. See [acquireMigrationLock](../interfaces/DialectAdapter.md#acquiremigrationlock).

If `supportsTransactionalDdl` is `true` then the `db` passed to this method
is a transaction inside which the migrations were executed. Otherwise `db`
is a single connection (session) that was used to execute the migrations
and the `acquireMigrationLock` call.

#### Returns

`Promise`\<`void`\>

#### Overrides

[`PostgresAdapter`](PostgresAdapter.md).[`releaseMigrationLock`](PostgresAdapter.md#releasemigrationlock)
