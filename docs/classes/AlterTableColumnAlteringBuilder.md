[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableColumnAlteringBuilder

# Class: AlterTableColumnAlteringBuilder

Defined in: [schema/alter-table-builder.ts:422](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L422)

## Implements

- [`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md)
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new AlterTableColumnAlteringBuilder**(`props`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:427](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L427)

#### Parameters

##### props

[`AlterTableColumnAlteringBuilderProps`](../interfaces/AlterTableColumnAlteringBuilderProps.md)

#### Returns

`AlterTableColumnAlteringBuilder`

## Methods

### addColumn()

> **addColumn**(`columnName`, `dataType`, `build?`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:476](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L476)

See [CreateTableBuilder.addColumn](CreateTableBuilder.md#addcolumn)

#### Parameters

##### columnName

`string`

##### dataType

[`DataTypeExpression`](../types/DataTypeExpression.md)

##### build?

[`ColumnDefinitionBuilderCallback`](../types/ColumnDefinitionBuilderCallback.md) = `noop`

#### Returns

`AlterTableColumnAlteringBuilder`

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`addColumn`](../interfaces/ColumnAlteringInterface.md#addcolumn)

***

### alterColumn()

> **alterColumn**(`column`, `alteration`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:431](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L431)

#### Parameters

##### column

`string`

##### alteration

[`AlterColumnBuilderCallback`](../types/AlterColumnBuilderCallback.md)

#### Returns

`AlterTableColumnAlteringBuilder`

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`alterColumn`](../interfaces/ColumnAlteringInterface.md#altercolumn)

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/alter-table-builder.ts:529](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L529)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### dropColumn()

> **dropColumn**(`column`, `build?`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:446](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L446)

#### Parameters

##### column

`string`

##### build?

[`DropColumnBuilderCallback`](../types/DropColumnBuilderCallback.md) = `noop`

#### Returns

`AlterTableColumnAlteringBuilder`

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`dropColumn`](../interfaces/ColumnAlteringInterface.md#dropcolumn)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/alter-table-builder.ts:536](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L536)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### modifyColumn()

> **modifyColumn**(`columnName`, `dataType`, `build?`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:499](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L499)

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

`AlterTableColumnAlteringBuilder`

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`modifyColumn`](../interfaces/ColumnAlteringInterface.md#modifycolumn)

***

### renameColumn()

> **renameColumn**(`column`, `newColumn`): `AlterTableColumnAlteringBuilder`

Defined in: [schema/alter-table-builder.ts:463](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L463)

#### Parameters

##### column

`string`

##### newColumn

`string`

#### Returns

`AlterTableColumnAlteringBuilder`

#### Implementation of

[`ColumnAlteringInterface`](../interfaces/ColumnAlteringInterface.md).[`renameColumn`](../interfaces/ColumnAlteringInterface.md#renamecolumn)

***

### toOperationNode()

> **toOperationNode**(): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [schema/alter-table-builder.ts:522](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-builder.ts#L522)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
