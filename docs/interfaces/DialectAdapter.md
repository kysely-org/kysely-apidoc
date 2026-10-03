[**kysely**](../index.md)

***

[kysely](../modules.md) / DialectAdapter

# Interface: DialectAdapter

Defined in: [dialect/dialect-adapter.ts:11](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L11)

A `DialectAdapter` encapsulates all differences between dialects outside
of `Driver` and `QueryCompiler`.

For example, some databases support transactional DDL and therefore we want
to run migrations inside a transaction, while other databases don't support
it. For that there's a `supportsTransactionalDdl` boolean in this interface.

## Properties

### supportsCreateIfNotExists?

> `readonly` `optional` **supportsCreateIfNotExists?**: `boolean`

Defined in: [dialect/dialect-adapter.ts:21](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L21)

Whether or not this dialect supports `if not exists` in creation of tables/schemas/views/etc.

Default is `false`.

If this is false, Kysely's internal migrations tables and schemas are created
without `if not exists` in migrations. This is not a problem if the dialect
supports transactional DDL.

***

### supportsMultipleConnections?

> `readonly` `optional` **supportsMultipleConnections?**: `boolean`

Defined in: [dialect/dialect-adapter.ts:30](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L30)

Whether or not this dialect supports multiple connections at the same time.

Default is `true`.

If this is false, Kysely will use a single connection for all database operations.

***

### supportsOutput?

> `readonly` `optional` **supportsOutput?**: `boolean`

Defined in: [dialect/dialect-adapter.ts:55](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L55)

Whether or not this dialect supports the `output` clause in inserts
updates and deletes.

Default is `false`.

***

### supportsReturning?

> `readonly` `optional` **supportsReturning?**: `boolean`

Defined in: [dialect/dialect-adapter.ts:47](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L47)

Whether or not this dialect supports the `returning` in inserts
updates and deletes.

Default is `false`.

***

### supportsTransactionalDdl?

> `readonly` `optional` **supportsTransactionalDdl?**: `boolean`

Defined in: [dialect/dialect-adapter.ts:39](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L39)

Whether or not this dialect supports transactional DDL.

Default is `false`.

If this is true, migrations are executed inside a transaction.

## Methods

### acquireMigrationLock()

> **acquireMigrationLock**(`db`, `options`): `Promise`\<`void`\>

Defined in: [dialect/dialect-adapter.ts:111](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L111)

This method is used to acquire a lock for the migrations so that
it's not possible for two migration operations to run in parallel.

Most dialects have explicit locks that can be used, like advisory locks
in PostgreSQL and the get_lock function in MySQL.

If the dialect doesn't have explicit locks the [MigrationLockOptions.lockTable](MigrationLockOptions.md#locktable)
created by Kysely can be used instead. You can access it through the `options` object.
The lock table has two columns `id` and `is_locked` and there's only one row in the table
whose id is [MigrationLockOptions.lockRowId](MigrationLockOptions.md#lockrowid). `is_locked` is an integer. Kysely
takes care of creating the lock table and inserting the one single row to it before this
method is executed. If the dialect supports schemas and the user has specified a custom
schema in their migration settings, the options object also contains the schema name in
[MigrationLockOptions.lockTableSchema](MigrationLockOptions.md#locktableschema).

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

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

##### options

[`MigrationLockOptions`](MigrationLockOptions.md)

#### Returns

`Promise`\<`void`\>

***

### releaseMigrationLock()

> **releaseMigrationLock**(`db`, `options`): `Promise`\<`void`\>

Defined in: [dialect/dialect-adapter.ts:124](https://github.com/kysely-org/kysely/blob/master/src/dialect/dialect-adapter.ts#L124)

Releases the migration lock. See [acquireMigrationLock](#acquiremigrationlock).

If `supportsTransactionalDdl` is `true` then the `db` passed to this method
is a transaction inside which the migrations were executed. Otherwise `db`
is a single connection (session) that was used to execute the migrations
and the `acquireMigrationLock` call.

#### Parameters

##### db

[`Kysely`](../classes/Kysely.md)\<`any`\>

##### options

[`MigrationLockOptions`](MigrationLockOptions.md)

#### Returns

`Promise`\<`void`\>
