[**kysely**](../index.md)

***

[kysely](../modules.md) / SchemaModule

# Class: SchemaModule

Defined in: [schema/schema-module.ts:39](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L39)

Provides methods for building database schema.

## Constructors

### Constructor

> **new SchemaModule**(`executor`): `SchemaModule`

Defined in: [schema/schema-module.ts:42](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L42)

#### Parameters

##### executor

[`QueryExecutor`](../interfaces/QueryExecutor.md)

#### Returns

`SchemaModule`

## Methods

### alterTable()

> **alterTable**(`table`): [`AlterTableBuilder`](AlterTableBuilder.md)

Defined in: [schema/schema-module.ts:214](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L214)

Alter a table.

### Examples

```ts
await db.schema
  .alterTable('person')
  .alterColumn('first_name', (ac) => ac.setDataType('text'))
  .execute()
```

#### Parameters

##### table

`string`

#### Returns

[`AlterTableBuilder`](AlterTableBuilder.md)

***

### alterType()

> **alterType**\<`N`\>(`name`): [`AlterTypeBuilder`](AlterTypeBuilder.md)\<`N`\>

Defined in: [schema/schema-module.ts:317](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L317)

Alter a type. Rename it, change schema or add/rename enum type values.

Only some dialects like PostgreSQL have user-defined types.

```ts
await db.schema
  .alterType('species')
  .addValue('capybara')
  .execute()
```

#### Type Parameters

##### N

`N` *extends* `string`

#### Parameters

##### name

`N`

#### Returns

[`AlterTypeBuilder`](AlterTypeBuilder.md)\<`N`\>

***

### createIndex()

> **createIndex**(`indexName`): [`CreateIndexBuilder`](CreateIndexBuilder.md)

Defined in: [schema/schema-module.ts:137](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L137)

Create a new index.

### Examples

```ts
await db.schema
  .createIndex('person_full_name_unique_index')
  .on('person')
  .columns(['first_name', 'last_name'])
  .execute()
```

#### Parameters

##### indexName

`string`

#### Returns

[`CreateIndexBuilder`](CreateIndexBuilder.md)

***

### createSchema()

> **createSchema**(`schema`): [`CreateSchemaBuilder`](CreateSchemaBuilder.md)

Defined in: [schema/schema-module.ts:175](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L175)

Create a new schema.

### Examples

```ts
await db.schema
  .createSchema('some_schema')
  .execute()
```

#### Parameters

##### schema

`string`

#### Returns

[`CreateSchemaBuilder`](CreateSchemaBuilder.md)

***

### createTable()

> **createTable**\<`TB`\>(`table`): [`CreateTableBuilder`](CreateTableBuilder.md)\<`TB`, `never`\>

Defined in: [schema/schema-module.ts:97](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L97)

Create a new table.

### Examples

This example creates a new table with columns `id`, `first_name`,
`last_name` and `gender`:

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
  .addColumn('first_name', 'varchar', col => col.notNull())
  .addColumn('last_name', 'varchar', col => col.notNull())
  .addColumn('gender', 'varchar')
  .execute()
```

This example creates a table with a foreign key. Not all database
engines support column-level foreign key constraint definitions.
For example if you are using MySQL 5.X see the next example after
this one.

```ts
await db.schema
  .createTable('pet')
  .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
  .addColumn('owner_id', 'integer', col => col
    .references('person.id')
    .onDelete('cascade')
  )
  .execute()
```

This example adds a foreign key constraint for a columns just
like the previous example, but using a table-level statement.
On MySQL 5.X you need to define foreign key constraints like
this:

```ts
await db.schema
  .createTable('pet')
  .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
  .addColumn('owner_id', 'integer')
  .addForeignKeyConstraint(
    'pet_owner_id_foreign', ['owner_id'], 'person', ['id'],
    (constraint) => constraint.onDelete('cascade')
  )
  .execute()
```

#### Type Parameters

##### TB

`TB` *extends* `string`

#### Parameters

##### table

`TB`

#### Returns

[`CreateTableBuilder`](CreateTableBuilder.md)\<`TB`, `never`\>

***

### createType()

> **createType**(`typeName`): [`CreateTypeBuilder`](CreateTypeBuilder.md)

Defined in: [schema/schema-module.ts:297](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L297)

Create a new type.

Only some dialects like PostgreSQL have user-defined types.

### Examples

```ts
await db.schema
  .createType('species')
  .asEnum(['dog', 'cat', 'frog'])
  .execute()
```

#### Parameters

##### typeName

`string`

#### Returns

[`CreateTypeBuilder`](CreateTypeBuilder.md)

***

### createView()

> **createView**(`viewName`): [`CreateViewBuilder`](CreateViewBuilder.md)

Defined in: [schema/schema-module.ts:235](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L235)

Create a new view.

### Examples

```ts
await db.schema
  .createView('dogs')
  .orReplace()
  .as(db.selectFrom('pet').selectAll().where('species', '=', 'dog'))
  .execute()
```

#### Parameters

##### viewName

`string`

#### Returns

[`CreateViewBuilder`](CreateViewBuilder.md)

***

### dropIndex()

> **dropIndex**(`indexName`): [`DropIndexBuilder`](DropIndexBuilder.md)

Defined in: [schema/schema-module.ts:156](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L156)

Drop an index.

### Examples

```ts
await db.schema
  .dropIndex('person_full_name_unique_index')
  .execute()
```

#### Parameters

##### indexName

`string`

#### Returns

[`DropIndexBuilder`](DropIndexBuilder.md)

***

### dropSchema()

> **dropSchema**(`schema`): [`DropSchemaBuilder`](DropSchemaBuilder.md)

Defined in: [schema/schema-module.ts:194](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L194)

Drop a schema.

### Examples

```ts
await db.schema
  .dropSchema('some_schema')
  .execute()
```

#### Parameters

##### schema

`string`

#### Returns

[`DropSchemaBuilder`](DropSchemaBuilder.md)

***

### dropTable()

> **dropTable**(`table`): [`DropTableBuilder`](DropTableBuilder.md)

Defined in: [schema/schema-module.ts:116](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L116)

Drop a table.

### Examples

```ts
await db.schema
  .dropTable('person')
  .execute()
```

#### Parameters

##### table

`string`

#### Returns

[`DropTableBuilder`](DropTableBuilder.md)

***

### dropType()

> **dropType**(`typeName`): [`DropTypeBuilder`](DropTypeBuilder.md)

Defined in: [schema/schema-module.ts:349](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L349)

Drop a type.

Only some dialects like PostgreSQL have user-defined types.

### Examples

```ts
await db.schema
  .dropType('species')
  .ifExists()
  .execute()
```

You can also provide multiple type names:

```ts
await db.schema
  .dropType(['species', 'colors'])
  .ifExists()
  .cascade()
  .execute()
```

#### Parameters

##### typeName

`string` \| `string`[]

#### Returns

[`DropTypeBuilder`](DropTypeBuilder.md)

***

### dropView()

> **dropView**(`viewName`): [`DropViewBuilder`](DropViewBuilder.md)

Defined in: [schema/schema-module.ts:275](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L275)

Drop a view.

### Examples

```ts
await db.schema
  .dropView('dogs')
  .ifExists()
  .execute()
```

#### Parameters

##### viewName

`string`

#### Returns

[`DropViewBuilder`](DropViewBuilder.md)

***

### refreshMaterializedView()

> **refreshMaterializedView**(`viewName`): [`RefreshMaterializedViewBuilder`](RefreshMaterializedViewBuilder.md)

Defined in: [schema/schema-module.ts:255](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L255)

Refresh a materialized view.

### Examples

```ts
await db.schema
  .refreshMaterializedView('my_view')
  .concurrently()
  .execute()
```

#### Parameters

##### viewName

`string`

#### Returns

[`RefreshMaterializedViewBuilder`](RefreshMaterializedViewBuilder.md)

***

### withoutPlugins()

> **withoutPlugins**(): `SchemaModule`

Defined in: [schema/schema-module.ts:367](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L367)

Returns a copy of this schema module  without any plugins.

#### Returns

`SchemaModule`

***

### withPlugin()

> **withPlugin**(`plugin`): `SchemaModule`

Defined in: [schema/schema-module.ts:360](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L360)

Returns a copy of this schema module with the given plugin installed.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`SchemaModule`

***

### withSchema()

> **withSchema**(`schema`): `SchemaModule`

Defined in: [schema/schema-module.ts:374](https://github.com/kysely-org/kysely/blob/master/src/schema/schema-module.ts#L374)

See [QueryCreator.withSchema](QueryCreator.md#withschema)

#### Parameters

##### schema

`string`

#### Returns

`SchemaModule`
