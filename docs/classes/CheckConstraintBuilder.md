[**kysely**](../index.md)

***

[kysely](../modules.md) / CheckConstraintBuilder

# Class: CheckConstraintBuilder

Defined in: [schema/check-constraint-builder.ts:4](https://github.com/kysely-org/kysely/blob/master/src/schema/check-constraint-builder.ts#L4)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new CheckConstraintBuilder**(`node`): `CheckConstraintBuilder`

Defined in: [schema/check-constraint-builder.ts:7](https://github.com/kysely-org/kysely/blob/master/src/schema/check-constraint-builder.ts#L7)

#### Parameters

##### node

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Returns

`CheckConstraintBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/check-constraint-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/schema/check-constraint-builder.ts#L15)

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

### toOperationNode()

> **toOperationNode**(): [`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

Defined in: [schema/check-constraint-builder.ts:19](https://github.com/kysely-org/kysely/blob/master/src/schema/check-constraint-builder.ts#L19)

#### Returns

[`CheckConstraintNode`](../interfaces/CheckConstraintNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
