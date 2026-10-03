[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / FileMigrationProvider

# Class: FileMigrationProvider

Defined in: [migration/file-migration-provider.ts:20](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L20)

Reads all migrations from a folder.

### Examples

```ts
import { promises as fs } from 'node:fs'
import path from 'node:path'

new FileMigrationProvider({
  fs,
  path,
  migrationFolder: 'path/to/migrations/folder'
})
```

## Implements

- [`MigrationProvider`](../interfaces/migration.MigrationProvider.md)

## Constructors

### Constructor

> **new FileMigrationProvider**(`props`): `FileMigrationProvider`

Defined in: [migration/file-migration-provider.ts:23](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L23)

#### Parameters

##### props

[`FileMigrationProviderProps`](../interfaces/migration.FileMigrationProviderProps.md)

#### Returns

`FileMigrationProvider`

## Methods

### getMigrations()

> **getMigrations**(): `Promise`\<`Record`\<`string`, [`Migration`](../interfaces/migration.Migration.md)\>\>

Defined in: [migration/file-migration-provider.ts:27](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L27)

Returns all migrations, old and new.

For example if you have your migrations in a folder as separate files,
you can implement this method to return all migration in that folder
as [Migration](../interfaces/migration.Migration.md) objects.

Kysely already has a built-in FileMigrationProvider for node.js
that does exactly that.

The keys of the returned object are migration names and values are the
migrations. The order of the migrations is determined by the alphabetical
order of the migration names. The items in the object don't need to be
sorted, they are sorted by Kysely.

#### Returns

`Promise`\<`Record`\<`string`, [`Migration`](../interfaces/migration.Migration.md)\>\>

#### Implementation of

[`MigrationProvider`](../interfaces/migration.MigrationProvider.md).[`getMigrations`](../interfaces/migration.MigrationProvider.md#getmigrations)

***

### hasExpectedExtension()

> `protected` **hasExpectedExtension**(`fileName`): `boolean`

Defined in: [migration/file-migration-provider.ts:61](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L61)

#### Parameters

##### fileName

`string`

#### Returns

`boolean`
