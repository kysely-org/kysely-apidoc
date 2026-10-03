[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / MigrationProvider

# Interface: MigrationProvider

Defined in: [migration/migrator.ts:948](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L948)

## Methods

### getMigrations()

> **getMigrations**(): `Promise`\<`Record`\<`string`, [`Migration`](migration.Migration.md)\>\>

Defined in: [migration/migrator.ts:964](https://github.com/kysely-org/kysely/blob/master/src/migration/migrator.ts#L964)

Returns all migrations, old and new.

For example if you have your migrations in a folder as separate files,
you can implement this method to return all migration in that folder
as [Migration](migration.Migration.md) objects.

Kysely already has a built-in [FileMigrationProvider](../classes/migration.FileMigrationProvider.md) for node.js
that does exactly that.

The keys of the returned object are migration names and values are the
migrations. The order of the migrations is determined by the alphabetical
order of the migration names. The items in the object don't need to be
sorted, they are sorted by Kysely.

#### Returns

`Promise`\<`Record`\<`string`, [`Migration`](migration.Migration.md)\>\>
