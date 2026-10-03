[**kysely**](../index.md)

***

[kysely](../modules.md) / PrimaryKeyConstraintBuilder

# Class: PrimaryKeyConstraintBuilder

Defined in: [schema/primary-key-constraint-builder.ts:4](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L4)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new PrimaryKeyConstraintBuilder**(`node`): `PrimaryKeyConstraintBuilder`

Defined in: [schema/primary-key-constraint-builder.ts:7](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L7)

#### Parameters

##### node

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Returns

`PrimaryKeyConstraintBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/primary-key-constraint-builder.ts:43](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L43)

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

> **deferrable**(): `PrimaryKeyConstraintBuilder`

Defined in: [schema/primary-key-constraint-builder.ts:11](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L11)

#### Returns

`PrimaryKeyConstraintBuilder`

***

### initiallyDeferred()

> **initiallyDeferred**(): `PrimaryKeyConstraintBuilder`

Defined in: [schema/primary-key-constraint-builder.ts:23](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L23)

#### Returns

`PrimaryKeyConstraintBuilder`

***

### initiallyImmediate()

> **initiallyImmediate**(): `PrimaryKeyConstraintBuilder`

Defined in: [schema/primary-key-constraint-builder.ts:31](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L31)

#### Returns

`PrimaryKeyConstraintBuilder`

***

### notDeferrable()

> **notDeferrable**(): `PrimaryKeyConstraintBuilder`

Defined in: [schema/primary-key-constraint-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L17)

#### Returns

`PrimaryKeyConstraintBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

Defined in: [schema/primary-key-constraint-builder.ts:47](https://github.com/kysely-org/kysely/blob/master/src/schema/primary-key-constraint-builder.ts#L47)

#### Returns

[`PrimaryKeyConstraintNode`](../interfaces/PrimaryKeyConstraintNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
