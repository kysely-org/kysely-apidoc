[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableAddForeignKeyConstraintBuilder

# Class: AlterTableAddForeignKeyConstraintBuilder

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:16](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L16)

## Implements

- [`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md)\<`AlterTableAddForeignKeyConstraintBuilder`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new AlterTableAddForeignKeyConstraintBuilder**(`props`): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:24](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L24)

#### Parameters

##### props

[`AlterTableAddForeignKeyConstraintBuilderProps`](../interfaces/AlterTableAddForeignKeyConstraintBuilderProps.md)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:78](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L78)

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

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:93](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L93)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### deferrable()

> **deferrable**(): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:46](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L46)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`deferrable`](../interfaces/ForeignKeyConstraintBuilderInterface.md#deferrable)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:100](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L100)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### initiallyDeferred()

> **initiallyDeferred**(): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:60](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L60)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`initiallyDeferred`](../interfaces/ForeignKeyConstraintBuilderInterface.md#initiallydeferred)

***

### initiallyImmediate()

> **initiallyImmediate**(): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:67](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L67)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`initiallyImmediate`](../interfaces/ForeignKeyConstraintBuilderInterface.md#initiallyimmediate)

***

### notDeferrable()

> **notDeferrable**(): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:53](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L53)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`notDeferrable`](../interfaces/ForeignKeyConstraintBuilderInterface.md#notdeferrable)

***

### onDelete()

> **onDelete**(`onDelete`): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:28](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L28)

#### Parameters

##### onDelete

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`onDelete`](../interfaces/ForeignKeyConstraintBuilderInterface.md#ondelete)

***

### onUpdate()

> **onUpdate**(`onUpdate`): `AlterTableAddForeignKeyConstraintBuilder`

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L37)

#### Parameters

##### onUpdate

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`AlterTableAddForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`onUpdate`](../interfaces/ForeignKeyConstraintBuilderInterface.md#onupdate)

***

### toOperationNode()

> **toOperationNode**(): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [schema/alter-table-add-foreign-key-constraint-builder.ts:82](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-foreign-key-constraint-builder.ts#L82)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
