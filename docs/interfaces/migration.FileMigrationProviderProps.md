[**kysely**](../index.md)

***

[kysely](../modules.md) / [migration](../modules/migration.md) / FileMigrationProviderProps

# Interface: FileMigrationProviderProps

Defined in: [migration/file-migration-provider.ts:85](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L85)

## Properties

### fs

> **fs**: [`FileMigrationProviderFS`](migration.FileMigrationProviderFS.md)

Defined in: [migration/file-migration-provider.ts:86](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L86)

***

### migrationFolder

> **migrationFolder**: `string`

Defined in: [migration/file-migration-provider.ts:88](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L88)

***

### path

> **path**: [`FileMigrationProviderPath`](migration.FileMigrationProviderPath.md)

Defined in: [migration/file-migration-provider.ts:90](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L90)

## Methods

### import()?

> `optional` **import**(`module`): `Promise`\<`any`\>

Defined in: [migration/file-migration-provider.ts:87](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L87)

#### Parameters

##### module

`string`

#### Returns

`Promise`\<`any`\>

***

### onFileIgnored()?

> `optional` **onFileIgnored**(`fileName`, `reason`): `void`

Defined in: [migration/file-migration-provider.ts:89](https://github.com/kysely-org/kysely/blob/master/src/migration/file-migration-provider.ts#L89)

#### Parameters

##### fileName

`string`

##### reason

`"Extension"` \| `"NotMigration"`

#### Returns

`void`
