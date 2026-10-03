[**kysely**](../index.md)

***

[kysely](../modules.md) / ColumnDefinitionBuilder

# Class: ColumnDefinitionBuilder

Defined in: [schema/column-definition-builder.ts:19](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L19)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new ColumnDefinitionBuilder**(`node`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:22](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L22)

#### Parameters

##### node

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Returns

`ColumnDefinitionBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/column-definition-builder.ts:679](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L679)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### autoIncrement()

> **autoIncrement**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:50](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L50)

Adds `auto_increment` or `autoincrement` to the column definition
depending on the dialect.

Some dialects like PostgreSQL don't support this. On PostgreSQL
you can use the `serial` or `bigserial` data type instead.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.autoIncrement().primaryKey())
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key auto_increment
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### check()

> **check**(`expression`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:398](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L398)

Adds a check constraint for the column.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('pet')
  .addColumn('number_of_legs', 'integer', (col) =>
    col.check(sql`number_of_legs < 5`)
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `pet` (
  `number_of_legs` integer check (number_of_legs < 5)
)
```

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`ColumnDefinitionBuilder`

***

### defaultTo()

> **defaultTo**(`value`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:366](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L366)

Adds a default value constraint for the column.

### Examples

```ts
await db.schema
  .createTable('pet')
  .addColumn('number_of_legs', 'integer', (col) => col.defaultTo(4))
  .execute()
```

The generated SQL (MySQL):

```sql
create table `pet` (
  `number_of_legs` integer default 4
)
```

Values passed to `defaultTo` are interpreted as value literals by default. You can define
an arbitrary SQL expression using the [sql](../variables/sql.md) template tag:

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('pet')
  .addColumn(
    'created_at',
    'timestamp',
    (col) => col.defaultTo(sql`CURRENT_TIMESTAMP`)
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `pet` (
  `created_at` timestamp default CURRENT_TIMESTAMP
)
```

#### Parameters

##### value

`unknown`

#### Returns

`ColumnDefinitionBuilder`

***

### generatedAlwaysAs()

> **generatedAlwaysAs**(`expression`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:430](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L430)

Makes the column a generated column using a `generated always as` statement.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('full_name', 'varchar(255)',
    (col) => col.generatedAlwaysAs(sql`concat(first_name, ' ', last_name)`)
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `full_name` varchar(255) generated always as (concat(first_name, ' ', last_name))
)
```

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`ColumnDefinitionBuilder`

***

### generatedAlwaysAsIdentity()

> **generatedAlwaysAsIdentity**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:464](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L464)

Adds the `generated always as identity` specifier.

This only works on some dialects like PostgreSQL.

For MS SQL Server (MSSQL)'s identity column use [identity](#identity).

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.generatedAlwaysAsIdentity().primaryKey())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "person" (
  "id" integer generated always as identity primary key
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### generatedByDefaultAsIdentity()

> **generatedByDefaultAsIdentity**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:496](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L496)

Adds the `generated by default as identity` specifier on supported dialects.

This only works on some dialects like PostgreSQL.

For MS SQL Server (MSSQL)'s identity column use [identity](#identity).

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.generatedByDefaultAsIdentity().primaryKey())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "person" (
  "id" integer generated by default as identity primary key
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### identity()

> **identity**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:80](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L80)

Makes the column an identity column.

This only works on some dialects like MS SQL Server (MSSQL).

For PostgreSQL's `generated always as identity` use [generatedAlwaysAsIdentity](#generatedalwaysasidentity).

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.identity().primaryKey())
  .execute()
```

The generated SQL (MSSQL):

```sql
create table "person" (
  "id" integer identity primary key
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### ifNotExists()

> **ifNotExists**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:630](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L630)

Adds `if not exists` specifier. This only works for PostgreSQL.

### Examples

```ts
await db.schema
  .alterTable('person')
  .addColumn('email', 'varchar(255)', col => col.unique().ifNotExists())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
alter table "person" add column if not exists "email" varchar(255) unique
```

#### Returns

`ColumnDefinitionBuilder`

***

### modifyEnd()

> **modifyEnd**(`modifier`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:666](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L666)

This can be used to add any additional SQL to the end of the column definition.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn(
    'age',
    'integer',
    col => col.unsigned()
      .notNull()
      .modifyEnd(sql`comment ${sql.lit('it is not polite to ask a woman her age')}`)
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key,
  `age` integer unsigned not null comment 'it is not polite to ask a woman her age'
)
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`ColumnDefinitionBuilder`

***

### modifyFront()

> **modifyFront**(`modifier`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:572](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L572)

This can be used to add any additional SQL right after the column's data type.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn(
    'first_name',
    'varchar(36)',
    (col) => col.modifyFront(sql`collate utf8mb4_general_ci`).notNull()
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key,
  `first_name` varchar(36) collate utf8mb4_general_ci not null
)
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`ColumnDefinitionBuilder`

***

### notNull()

> **notNull**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:288](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L288)

Adds a `not null` constraint for the column.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(255)', col => col.notNull())
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `first_name` varchar(255) not null
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### nullsNotDistinct()

> **nullsNotDistinct**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:606](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L606)

Adds `nulls not distinct` specifier.
Should be used with `unique` constraint.

This only works on some dialects like PostgreSQL.

### Examples

```ts
db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn('first_name', 'varchar(30)', col => col.unique().nullsNotDistinct())
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "person" (
  "id" integer primary key,
  "first_name" varchar(30) unique nulls not distinct
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### onDelete()

> **onDelete**(`onDelete`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:184](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L184)

Adds an `on delete` constraint for the foreign key column.

If your database engine doesn't support foreign key constraints in the
column definition (like MySQL 5) you need to call the table level
[CreateTableBuilder.addForeignKeyConstraint](CreateTableBuilder.md#addforeignkeyconstraint) method instead.

### Examples

```ts
await db.schema
  .createTable('pet')
  .addColumn(
    'owner_id',
    'integer',
    (col) => col.references('person.id').onDelete('cascade')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "pet" (
  "owner_id" integer references "person" ("id") on delete cascade
)
```

#### Parameters

##### onDelete

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`ColumnDefinitionBuilder`

***

### onUpdate()

> **onUpdate**(`onUpdate`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:227](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L227)

Adds an `on update` constraint for the foreign key column.

If your database engine doesn't support foreign key constraints in the
column definition (like MySQL 5) you need to call the table level
[CreateTableBuilder.addForeignKeyConstraint](CreateTableBuilder.md#addforeignkeyconstraint) method instead.

### Examples

```ts
await db.schema
  .createTable('pet')
  .addColumn(
    'owner_id',
    'integer',
    (col) => col.references('person.id').onUpdate('cascade')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "pet" (
  "owner_id" integer references "person" ("id") on update cascade
)
```

#### Parameters

##### onUpdate

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`ColumnDefinitionBuilder`

***

### primaryKey()

> **primaryKey**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:108](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L108)

Makes the column the primary key.

If you want to specify a composite primary key use the
[CreateTableBuilder.addPrimaryKeyConstraint](CreateTableBuilder.md#addprimarykeyconstraint) method.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey())
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key
)

#### Returns

`ColumnDefinitionBuilder`

***

### references()

> **references**(`ref`): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:138](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L138)

Adds a foreign key constraint for the column.

If your database engine doesn't support foreign key constraints in the
column definition (like MySQL 5) you need to call the table level
[CreateTableBuilder.addForeignKeyConstraint](CreateTableBuilder.md#addforeignkeyconstraint) method instead.

### Examples

```ts
await db.schema
  .createTable('pet')
  .addColumn('owner_id', 'integer', (col) => col.references('person.id'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create table "pet" (
  "owner_id" integer references "person" ("id")
)
```

#### Parameters

##### ref

`string`

#### Returns

`ColumnDefinitionBuilder`

***

### stored()

> **stored**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:530](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L530)

Makes a generated column stored instead of virtual. This method can only
be used with [generatedAlwaysAs](#generatedalwaysas)

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('full_name', 'varchar(255)', (col) => col
    .generatedAlwaysAs(sql`concat(first_name, ' ', last_name)`)
    .stored()
  )
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `full_name` varchar(255) generated always as (concat(first_name, ' ', last_name)) stored
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

Defined in: [schema/column-definition-builder.ts:683](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L683)

#### Returns

[`ColumnDefinitionNode`](../interfaces/ColumnDefinitionNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### unique()

> **unique**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:262](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L262)

Adds a unique constraint for the column.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('email', 'varchar(255)', col => col.unique())
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `email` varchar(255) unique
)
```

#### Returns

`ColumnDefinitionBuilder`

***

### unsigned()

> **unsigned**(): `ColumnDefinitionBuilder`

Defined in: [schema/column-definition-builder.ts:316](https://github.com/kysely-org/kysely/blob/master/src/schema/column-definition-builder.ts#L316)

Adds a `unsigned` modifier for the column.

This only works on some dialects like MySQL.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('age', 'integer', col => col.unsigned())
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `age` integer unsigned
)
```

#### Returns

`ColumnDefinitionBuilder`
