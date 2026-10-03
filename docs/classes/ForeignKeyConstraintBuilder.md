[**kysely**](../index.md)

***

[kysely](../modules.md) / ForeignKeyConstraintBuilder

# Class: ForeignKeyConstraintBuilder

Defined in: [schema/foreign-key-constraint-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L15)

## Implements

- [`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md)\<`ForeignKeyConstraintBuilder`\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new ForeignKeyConstraintBuilder**(`node`): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:22](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L22)

#### Parameters

##### node

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Returns

`ForeignKeyConstraintBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/foreign-key-constraint-builder.ts:74](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L74)

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

### deferrable()

> **deferrable**(): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:42](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L42)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`deferrable`](../interfaces/ForeignKeyConstraintBuilderInterface.md#deferrable)

***

### initiallyDeferred()

> **initiallyDeferred**(): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:54](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L54)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`initiallyDeferred`](../interfaces/ForeignKeyConstraintBuilderInterface.md#initiallydeferred)

***

### initiallyImmediate()

> **initiallyImmediate**(): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:62](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L62)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`initiallyImmediate`](../interfaces/ForeignKeyConstraintBuilderInterface.md#initiallyimmediate)

***

### notDeferrable()

> **notDeferrable**(): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L48)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`notDeferrable`](../interfaces/ForeignKeyConstraintBuilderInterface.md#notdeferrable)

***

### onDelete()

> **onDelete**(`onDelete`): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L26)

#### Parameters

##### onDelete

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`onDelete`](../interfaces/ForeignKeyConstraintBuilderInterface.md#ondelete)

***

### onUpdate()

> **onUpdate**(`onUpdate`): `ForeignKeyConstraintBuilder`

Defined in: [schema/foreign-key-constraint-builder.ts:34](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L34)

#### Parameters

##### onUpdate

[`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

#### Returns

`ForeignKeyConstraintBuilder`

#### Implementation of

[`ForeignKeyConstraintBuilderInterface`](../interfaces/ForeignKeyConstraintBuilderInterface.md).[`onUpdate`](../interfaces/ForeignKeyConstraintBuilderInterface.md#onupdate)

***

### toOperationNode()

> **toOperationNode**(): [`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

Defined in: [schema/foreign-key-constraint-builder.ts:78](https://github.com/kysely-org/kysely/blob/master/src/schema/foreign-key-constraint-builder.ts#L78)

#### Returns

[`ForeignKeyConstraintNode`](../interfaces/ForeignKeyConstraintNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
