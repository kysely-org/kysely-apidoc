[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableBuilder

# Class: AlterTableBuilder

Defined in: [schema/alter-table-builder.ts:71](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L71)

This builder can be used to create a `alter table` query.

## Implements

- [`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md)

## Constructors

### Constructor

> **new AlterTableBuilder**(`props`): `AlterTableBuilder`

Defined in: [schema/alter-table-builder.ts:74](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L74)

#### Parameters

##### props

[`AlterTableBuilderProps`](../interfaces/AlterTableBuilderProps.md)

#### Returns

`AlterTableBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/alter-table-builder.ts:380](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L380)

Calls the given function passing `this` as the only argument.

See [CreateTableBuilder.$call](CreateTableBuilder.md#call)

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

> **addCheckConstraint**(`constraintName`, `checkExpression`, `build?`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:221](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L221)

See [CreateTableBuilder.addCheckConstraint](CreateTableBuilder.md#addcheckconstraint)

#### Parameters

##### constraintName

`string`

##### checkExpression

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### build?

[`CheckConstraintBuilderCallback`](../types/CheckConstraintBuilderCallback.md) = `noop`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)

***

### addColumn()

> **addColumn**(`columnName`, `dataType`, `build?`): [`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

Defined in: [schema/alter-table-builder.ts:141](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L141)

See [CreateTableBuilder.addColumn](CreateTableBuilder.md#addcolumn)

#### Parameters

##### columnName

`string`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build?

[`ColumnDefinitionBuilderCallback`](../types/ColumnDefinitionBuilderCallback.md) = `noop`

#### Returns

[`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`addColumn`](../interfaces/ColumnAlteringInterface.md#addcolumn)

***

### addForeignKeyConstraint()

> **addForeignKeyConstraint**(`constraintName`, `columns`, `targetTable`, `targetColumns`, `build?`): [`AlterTableAddForeignKeyConstraintBuilder`](AlterTableAddForeignKeyConstraintBuilder.md)

Defined in: [schema/alter-table-builder.ts:252](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L252)

See [CreateTableBuilder.addForeignKeyConstraint](CreateTableBuilder.md#addforeignkeyconstraint)

Unlike [CreateTableBuilder.addForeignKeyConstraint](CreateTableBuilder.md#addforeignkeyconstraint) this method returns
the constraint builder and doesn't take a callback as the last argument. This
is because you can only add one column per `ALTER TABLE` query.

#### Parameters

##### constraintName

`string`

##### columns

`string`[]

##### targetTable

`string`

##### targetColumns

`string`[]

##### build?

[`ForeignKeyConstraintBuilderCallback`](../types/ForeignKeyConstraintBuilderCallback.md) = `noop`

#### Returns

[`AlterTableAddForeignKeyConstraintBuilder`](AlterTableAddForeignKeyConstraintBuilder.md)

***

### addIndex()

> **addIndex**(`indexName`): [`AlterTableAddIndexBuilder`](AlterTableAddIndexBuilder.md)

Defined in: [schema/alter-table-builder.ts:340](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L340)

This can be used to add index to table.

 ### Examples

```ts
db.schema.alterTable('person')
  .addIndex('person_email_index')
  .column('email')
  .unique()
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` add unique index `person_email_index` (`email`)
```

#### Parameters

##### indexName

`string`

#### Returns

[`AlterTableAddIndexBuilder`](AlterTableAddIndexBuilder.md)

***

### addPrimaryKeyConstraint()

> **addPrimaryKeyConstraint**(`constraintName`, `columns`, `build?`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:279](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L279)

See [CreateTableBuilder.addPrimaryKeyConstraint](CreateTableBuilder.md#addprimarykeyconstraint)

#### Parameters

##### constraintName

`string`

##### columns

`string`[]

##### build?

[`PrimaryKeyConstraintBuilderCallback`](../types/PrimaryKeyConstraintBuilderCallback.md) = `noop`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)

***

### addUniqueConstraint()

> **addUniqueConstraint**(`constraintName`, `columns`, `build?`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:190](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L190)

See [CreateTableBuilder.addUniqueConstraint](CreateTableBuilder.md#adduniqueconstraint)

#### Parameters

##### constraintName

`string`

##### columns

(`string` \| [`ExpressionOrFactory`](../types/ExpressionOrFactory.md)\<`any`, `any`, `any`\>)[]

##### build?

[`UniqueConstraintNodeBuilderCallback`](../types/UniqueConstraintNodeBuilderCallback.md) = `noop`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)

***

### alterColumn()

> **alterColumn**(`column`, `alteration`): [`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

Defined in: [schema/alter-table-builder.ts:96](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L96)

#### Parameters

##### column

`string`

##### alteration

[`AlterColumnBuilderCallback`](../types/AlterColumnBuilderCallback.md)

#### Returns

[`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`alterColumn`](../interfaces/ColumnAlteringInterface.md#altercolumn)

***

### dropColumn()

> **dropColumn**(`column`, `build?`): [`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

Defined in: [schema/alter-table-builder.ts:111](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L111)

#### Parameters

##### column

`string`

##### build?

[`DropColumnBuilderCallback`](../types/DropColumnBuilderCallback.md) = `noop`

#### Returns

[`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`dropColumn`](../interfaces/ColumnAlteringInterface.md#dropcolumn)

***

### dropConstraint()

> **dropConstraint**(`constraintName`): [`AlterTableDropConstraintBuilder`](AlterTableDropConstraintBuilder.md)

Defined in: [schema/alter-table-builder.ts:300](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L300)

#### Parameters

##### constraintName

`string`

#### Returns

[`AlterTableDropConstraintBuilder`](AlterTableDropConstraintBuilder.md)

***

### dropIndex()

> **dropIndex**(`indexName`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:366](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L366)

This can be used to drop index from table.

### Examples

```ts
db.schema.alterTable('person')
  .dropIndex('person_email_index')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` drop index `test_first_name_index`
```

#### Parameters

##### indexName

`string`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)

***

### modifyColumn()

> **modifyColumn**(`columnName`, `dataType`, `build?`): [`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

Defined in: [schema/alter-table-builder.ts:164](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L164)

Creates an `alter table modify column` query. The `modify column` statement
is only implemeted by MySQL and oracle AFAIK. On other databases you
should use the `alterColumn` method.

#### Parameters

##### columnName

`string`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build?

[`ColumnDefinitionBuilderCallback`](../types/ColumnDefinitionBuilderCallback.md) = `noop`

#### Returns

[`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`modifyColumn`](../interfaces/ColumnAlteringInterface.md#modifycolumn)

***

### renameColumn()

> **renameColumn**(`column`, `newColumn`): [`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

Defined in: [schema/alter-table-builder.ts:128](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L128)

#### Parameters

##### column

`string`

##### newColumn

`string`

#### Returns

[`AlterTableColumnAlteringBuilder`](AlterTableColumnAlteringBuilder.md)

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`renameColumn`](../interfaces/ColumnAlteringInterface.md#renamecolumn)

***

### renameConstraint()

> **renameConstraint**(`oldName`, `newName`): [`AlterTableDropConstraintBuilder`](AlterTableDropConstraintBuilder.md)

Defined in: [schema/alter-table-builder.ts:309](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L309)

#### Parameters

##### oldName

`string`

##### newName

`string`

#### Returns

[`AlterTableDropConstraintBuilder`](AlterTableDropConstraintBuilder.md)

***

### renameTo()

> **renameTo**(`newTableName`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:78](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L78)

#### Parameters

##### newTableName

`string`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)

***

### setSchema()

> **setSchema**(`newSchema`): [`AlterTableExecutor`](AlterTableExecutor.md)

Defined in: [schema/alter-table-builder.ts:87](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L87)

#### Parameters

##### newSchema

`string`

#### Returns

[`AlterTableExecutor`](AlterTableExecutor.md)
