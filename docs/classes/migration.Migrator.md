[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / Migrator

# Class: Migrator

Defined in: [migration/migrator.ts:62](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L62)

A class for running migrations.

### Example

This example uses the [FileMigrationProvider](migration.FileMigrationProvider.md) that reads migrations
files from a single folder. You can easily implement your own
[MigrationProvider](../interfaces/migration.MigrationProvider.md) if you want to provide migrations some
other way.

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import * as Sqlite from 'better-sqlite3'
import { Kysely, SqliteDialect } from 'kysely'
import { FileMigrationProvider, Migrator } from 'kysely/migration'

const db = new Kysely<any>({
  dialect: new SqliteDialect({
    database: Sqlite(':memory:')
  })
})

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    // Path to the folder that contains all your migrations.
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})
```

## Constructors

### Constructor

> **new Migrator**(`props`): `Migrator`

Defined in: [migration/migrator.ts:65](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L65)

#### Parameters

##### props

[`MigratorProps`](../interfaces/migration.MigratorProps.md)

#### Returns

`Migrator`

## Methods

### getMigrations()

> **getMigrations**(): `Promise`\<readonly [`MigrationInfo`](../interfaces/migration.MigrationInfo.md)[]\>

Defined in: [migration/migrator.ts:74](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L74)

Returns a [MigrationInfo](../interfaces/migration.MigrationInfo.md) object for each migration.

The returned array is sorted by migration name.

#### Returns

`Promise`\<readonly [`MigrationInfo`](../interfaces/migration.MigrationInfo.md)[]\>

***

### migrateDown()

> **migrateDown**(`options?`): `Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

Defined in: [migration/migrator.ts:310](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L310)

Migrate one step down.

This method returns a [MigrationResultSet](../interfaces/migration.MigrationResultSet.md) instance and _never_ throws.
[MigrationResultSet.error](../interfaces/migration.MigrationResultSet.md#error) holds the error if something went wrong.
[MigrationResultSet.results](../interfaces/migration.MigrationResultSet.md#results) contains information about which migrations
were executed and which failed.

### Examples

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { FileMigrationProvider, Migrator } from 'kysely/migration'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    // Path to the folder that contains all your migrations.
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})

await migrator.migrateDown()
```

#### Parameters

##### options?

[`MigrateOptions`](../interfaces/migration.MigrateOptions.md)

#### Returns

`Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

***

### migrateTo()

> **migrateTo**(`targetMigrationName`, `options?`): `Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

Defined in: [migration/migrator.ts:200](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L200)

Migrate up/down to a specific migration.

This method returns a [MigrationResultSet](../interfaces/migration.MigrationResultSet.md) instance and _never_ throws.
[MigrationResultSet.error](../interfaces/migration.MigrationResultSet.md#error) holds the error if something went wrong.
[MigrationResultSet.results](../interfaces/migration.MigrationResultSet.md#results) contains information about which migrations
were executed and which failed.

### Examples

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { FileMigrationProvider, Migrator } from 'kysely/migration'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    // Path to the folder that contains all your migrations.
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})

await migrator.migrateTo('some_migration')
```

If you specify the name of the first migration, this method migrates
down to the first migration, but doesn't run the `down` method of
the first migration. In case you want to migrate all the way down,
you can use a special constant `NO_MIGRATIONS`:

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { FileMigrationProvider, Migrator, NO_MIGRATIONS } from 'kysely/migration'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    // Path to the folder that contains all your migrations.
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})

await migrator.migrateTo(NO_MIGRATIONS)
```

#### Parameters

##### targetMigrationName

`string` \| [`NoMigrations`](../interfaces/migration.NoMigrations.md)

##### options?

[`MigrateOptions`](../interfaces/migration.MigrateOptions.md)

#### Returns

`Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

***

### migrateToLatest()

> **migrateToLatest**(`options?`): `Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

Defined in: [migration/migrator.ts:145](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L145)

Runs all migrations that have not yet been run.

This method returns a [MigrationResultSet](../interfaces/migration.MigrationResultSet.md) instance and _never_ throws.
[MigrationResultSet.error](../interfaces/migration.MigrationResultSet.md#error) holds the error if something went wrong.
[MigrationResultSet.results](../interfaces/migration.MigrationResultSet.md#results) contains information about which migrations
were executed and which failed. See the examples below.

This method goes through all possible migrations provided by the provider and runs the
ones whose names come alphabetically after the last migration that has been run. If the
list of executed migrations doesn't match the beginning of the list of possible migrations
an error is returned.

### Examples

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import * as Sqlite from 'better-sqlite3'
import { FileMigrationProvider, Migrator } from 'kysely/migration'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})

const { error, results } = await migrator.migrateToLatest()

results?.forEach((it) => {
  if (it.status === 'Success') {
    console.log(`migration "${it.migrationName}" was executed successfully`)
  } else if (it.status === 'Error') {
    console.error(`failed to execute migration "${it.migrationName}"`)
  }
})

if (error) {
  console.error('failed to run `migrateToLatest`')
  console.error(error)
}
```

#### Parameters

##### options?

[`MigrateOptions`](../interfaces/migration.MigrateOptions.md)

#### Returns

`Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

***

### migrateUp()

> **migrateUp**(`options?`): `Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>

Defined in: [migration/migrator.ts:278](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L278)

Migrate one step up.

This method returns a [MigrationResultSet](../interfaces/migration.MigrationResultSet.md) instance and _never_ throws.
[MigrationResultSet.error](../interfaces/migration.MigrationResultSet.md#error) holds the error if something went wrong.
[MigrationResultSet.results](../interfaces/migration.MigrationResultSet.md#results) contains information about which migrations
were executed and which failed.

### Examples

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { FileMigrationProvider, Migrator } from 'kysely/migration'

const migrator = new Migrator({
  db,
  provider: new FileMigrationProvider({
    fs,
    // Path to the folder that contains all your migrations.
    migrationFolder: 'some/path/to/migrations',
    path,
  })
})

await migrator.migrateUp()
```

#### Parameters

##### options?

[`MigrateOptions`](../interfaces/migration.MigrateOptions.md)

#### Returns

`Promise`\<[`MigrationResultSet`](../interfaces/migration.MigrationResultSet.md)\>
