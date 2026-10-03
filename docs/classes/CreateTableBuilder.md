[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateTableBuilder

# Class: CreateTableBuilder\<TB, C\>

Defined in: [schema/create-table-builder.ts:55](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L55)

This builder can be used to create a `create table` query.

## Type Parameters

### TB

`TB` *extends* `string`

### C

`C` *extends* `string` = `never`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new CreateTableBuilder**\<`TB`, `C`\>(`props`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:60](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L60)

#### Parameters

##### props

[`CreateTableBuilderProps`](../interfaces/CreateTableBuilderProps.md)

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-table-builder.ts:601](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L601)

Calls the given function passing `this` as the only argument.

### Examples

```ts
await db.schema
  .createTable('test')
  .$call((builder) => builder.addColumn('id', 'integer'))
  .execute()
```

This is useful for creating reusable functions that can be called with a builder.

```ts
import { type CreateTableBuilder, sql } from 'kysely'

const addDefaultColumns = (ctb: CreateTableBuilder<any, any>) => {
  return ctb
    .addColumn('id', 'integer', (col) => col.notNull())
    .addColumn('created_at', 'date', (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .addColumn('updated_at', 'date', (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
}

await db.schema
  .createTable('test')
  .$call(addDefaultColumns)
  .execute()
```

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### addCheckConstraint()

> **addCheckConstraint**(`constraintName`, `checkExpression`, `build?`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:372](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L372)

Adds a check constraint.

The constraint name can be anything you want, but it must be unique
across the whole database.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('animal')
  .addColumn('number_of_legs', 'integer')
  .addCheckConstraint('check_legs', sql`number_of_legs < 5`)
  .execute()
```

#### Parameters

##### constraintName

`string`

##### checkExpression

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### build?

[`CheckConstraintBuilderCallback`](../types/CheckConstraintBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### addColumn()

> **addColumn**\<`CN`\>(`columnName`, `dataType`, `build?`): `CreateTableBuilder`\<`TB`, `C` \| `CN`\>

Defined in: [schema/create-table-builder.ts:161](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L161)

Adds a column to the table.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey())
  .addColumn('first_name', 'varchar(50)', (col) => col.notNull())
  .addColumn('last_name', 'varchar(255)')
  .addColumn('bank_balance', 'numeric(8, 2)')
  // You can specify any data type using the `sql` tag if the types
  // don't include it.
  .addColumn('data', sql`any_type_here`)
  .addColumn('parent_id', 'integer', (col) =>
    col.references('person.id').onDelete('cascade')
  )
```

With this method, it's once again good to remember that Kysely just builds the
query and doesn't provide the same API for all databases. For example, some
databases like older MySQL don't support the `references` statement in the
column definition. Instead foreign key constraints need to be defined in the
`create table` query. See the next example:

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'integer', (col) => col.primaryKey())
  .addColumn('parent_id', 'integer')
  .addForeignKeyConstraint(
    'person_parent_id_fk',
    ['parent_id'],
    'person',
    ['id'],
    (cb) => cb.onDelete('cascade')
  )
  .execute()
```

Another good example is that PostgreSQL doesn't support the `auto_increment`
keyword and you need to define an autoincrementing column for example using
`serial`:

```ts
await db.schema
  .createTable('person')
  .addColumn('id', 'serial', (col) => col.primaryKey())
  .execute()
```

#### Type Parameters

##### CN

`CN` *extends* `string`

#### Parameters

##### columnName

`CN`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build?

[`ColumnBuilderCallback`](../types/ColumnBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C` \| `CN`\>

***

### addForeignKeyConstraint()

> **addForeignKeyConstraint**(`constraintName`, `columns`, `targetTable`, `targetColumns`, `build?`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:433](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L433)

Adds a foreign key constraint.

The constraint name can be anything you want, but it must be unique
across the whole database.

### Examples

```ts
await db.schema
  .createTable('pet')
  .addColumn('owner_id', 'integer')
  .addForeignKeyConstraint(
    'owner_id_foreign',
    ['owner_id'],
    'person',
    ['id'],
  )
  .execute()
```

Add constraint for multiple columns:

```ts
await db.schema
  .createTable('pet')
  .addColumn('owner_id1', 'integer')
  .addColumn('owner_id2', 'integer')
  .addForeignKeyConstraint(
    'owner_id_foreign',
    ['owner_id1', 'owner_id2'],
    'person',
    ['id1', 'id2'],
    (cb) => cb.onDelete('cascade')
  )
  .execute()
```

#### Parameters

##### constraintName

`string`

##### columns

`C`[]

##### targetTable

`string`

##### targetColumns

`string`[]

##### build?

[`ForeignKeyConstraintBuilderCallback`](../types/ForeignKeyConstraintBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### addIndex()

> **addIndex**(`indexName`, `columns`, `build?`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:327](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L327)

Adds an index that includes one or more columns.

This is only supported by some dialects like MySQL.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(64)')
  .addColumn('last_name', 'varchar(64)')
  .addIndex('last_name_key', ['last_name'])
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key,
  `first_name` varchar(64) not null,
  `last_name` varchar(64) not null,
  index `last_name_key` (`last_name`)
)
```

#### Parameters

##### indexName

`string`

##### columns

([`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`any`, `any`, `any`\> \| `C`)[]

##### build?

[`CreateTableAddIndexBuilderCallback`](../types/CreateTableAddIndexBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### addPrimaryKeyConstraint()

> **addPrimaryKeyConstraint**(`constraintName`, `columns`, `build?`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:201](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L201)

Adds a primary key constraint for one or more columns.

The constraint name can be anything you want, but it must be unique
across the whole database.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(64)')
  .addColumn('last_name', 'varchar(64)')
  .addPrimaryKeyConstraint('primary_key', ['first_name', 'last_name'])
  .execute()
```

#### Parameters

##### constraintName

`string`

##### columns

`C`[]

##### build?

[`PrimaryKeyConstraintBuilderCallback`](../types/PrimaryKeyConstraintBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### addUniqueConstraint()

> **addUniqueConstraint**(`constraintName`, `columns`, `build?`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:273](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L273)

Adds a unique constraint for one or more columns.

The constraint name can be anything you want, but it must be unique
across the whole database.

### Examples

```ts
await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(64)')
  .addColumn('last_name', 'varchar(64)')
  .addUniqueConstraint(
    'first_name_last_name_unique',
    ['first_name', 'last_name']
  )
  .execute()
```

In dialects such as PostgreSQL you can specify `nulls not distinct` as follows:

```ts
await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(64)')
  .addColumn('last_name', 'varchar(64)')
  .addUniqueConstraint(
    'first_name_last_name_unique',
    ['first_name', 'last_name'],
    (cb) => cb.nullsNotDistinct()
  )
  .execute()
```

In dialects such as MySQL you create unique constraints on expressions as follows:

```ts

import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('first_name', 'varchar(64)')
  .addColumn('last_name', 'varchar(64)')
  .addUniqueConstraint(
    'first_name_last_name_unique',
    [sql`(lower('first_name'))`, 'last_name']
  )
  .execute()
```

#### Parameters

##### constraintName

`string`

##### columns

([`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`any`, `any`, `any`\> \| `C`)[]

##### build?

[`UniqueConstraintNodeBuilderCallback`](../types/UniqueConstraintNodeBuilderCallback.md) = `noop`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### as()

> **as**(`expression`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:558](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L558)

Allows to create table from `select` query.

### Examples

```ts
await db.schema
  .createTable('copy')
  .temporary()
  .as(db.selectFrom('person').select(['first_name', 'last_name']))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create temporary table "copy" as
select "first_name", "last_name" from "person"
```

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`unknown`\>

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/create-table-builder.ts:612](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L612)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/create-table-builder.ts:619](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L619)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifNotExists()

> **ifNotExists**(): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:98](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L98)

Adds the "if not exists" modifier.

If the table already exists, no error is thrown if this method has been called.

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### modifyEnd()

> **modifyEnd**(`modifier`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:528](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L528)

This can be used to add any additional SQL to the end of the query.

Also see [onCommit](#oncommit).

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn('first_name', 'varchar(64)', col => col.notNull())
  .addColumn('last_name', 'varchar(64)', col => col.notNull())
  .modifyEnd(sql`collate utf8_unicode_ci`)
  .execute()
```

The generated SQL (MySQL):

```sql
create table `person` (
  `id` integer primary key,
  `first_name` varchar(64) not null,
  `last_name` varchar(64) not null
) collate utf8_unicode_ci
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### modifyFront()

> **modifyFront**(`modifier`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:489](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L489)

This can be used to add any additional SQL to the front of the query __after__ the `create` keyword.

Also see [temporary](#temporary).

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createTable('person')
  .modifyFront(sql`global temporary`)
  .addColumn('id', 'integer', col => col.primaryKey())
  .addColumn('first_name', 'varchar(64)', col => col.notNull())
  .addColumn('last_name', 'varchar(64)', col => col.notNull())
  .execute()
```

The generated SQL (Postgres):

```sql
create global temporary table "person" (
  "id" integer primary key,
  "first_name" varchar(64) not null,
  "last_name" varchar(64) not null
)
```

#### Parameters

##### modifier

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### onCommit()

> **onCommit**(`onCommit`): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:84](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L84)

Adds an "on commit" statement.

This can be used in conjunction with temporary tables on supported databases
like PostgreSQL.

#### Parameters

##### onCommit

`string`

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### temporary()

> **temporary**(): `CreateTableBuilder`\<`TB`, `C`\>

Defined in: [schema/create-table-builder.ts:69](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L69)

Adds the "temporary" modifier.

Use this to create a temporary table.

#### Returns

`CreateTableBuilder`\<`TB`, `C`\>

***

### toOperationNode()

> **toOperationNode**(): [`CreateTableNode`](../interfaces/CreateTableNode.md)

Defined in: [schema/create-table-builder.ts:605](https://github.com/kysely-org/kysely/blob/master/src/schema/create-table-builder.ts#L605)

#### Returns

[`CreateTableNode`](../interfaces/CreateTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
