[**kysely**](../index.md)

***

[kysely](../modules.md) / ColumnAlteringInterface

# Interface: ColumnAlteringInterface

Defined in: [schema/alter-table-builder.ts:391](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L391)

## Methods

### addColumn()

> **addColumn**(`columnName`, `dataType`, `build?`): `ColumnAlteringInterface`

Defined in: [schema/alter-table-builder.ts:404](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L404)

See [CreateTableBuilder.addColumn](../classes/CreateTableBuilder.md#addcolumn)

#### Parameters

##### columnName

`string`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build?

[`ColumnDefinitionBuilderCallback`](../types/ColumnDefinitionBuilderCallback.md)

#### Returns

`ColumnAlteringInterface`

***

### alterColumn()

> **alterColumn**(`column`, `alteration`): `ColumnAlteringInterface`

Defined in: [schema/alter-table-builder.ts:392](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L392)

#### Parameters

##### column

`string`

##### alteration

[`AlterColumnBuilderCallback`](../types/AlterColumnBuilderCallback.md)

#### Returns

`ColumnAlteringInterface`

***

### dropColumn()

> **dropColumn**(`column`): `ColumnAlteringInterface`

Defined in: [schema/alter-table-builder.ts:397](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L397)

#### Parameters

##### column

`string`

#### Returns

`ColumnAlteringInterface`

***

### modifyColumn()

> **modifyColumn**(`columnName`, `dataType`, `build`): `ColumnAlteringInterface`

Defined in: [schema/alter-table-builder.ts:415](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L415)

Creates an `alter table modify column` query. The `modify column` statement
is only implemeted by MySQL and oracle AFAIK. On other databases you
should use the `alterColumn` method.

#### Parameters

##### columnName

`string`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build

[`ColumnDefinitionBuilderCallback`](../types/ColumnDefinitionBuilderCallback.md)

#### Returns

`ColumnAlteringInterface`

***

### renameColumn()

> **renameColumn**(`column`, `newColumn`): `ColumnAlteringInterface`

Defined in: [schema/alter-table-builder.ts:399](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L399)

#### Parameters

##### column

`string`

##### newColumn

`string`

#### Returns

`ColumnAlteringInterface`
