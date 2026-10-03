[**kysely**](../index.md)

***

[kysely](../modules.md) / UniqueConstraintNodeBuilder

# Class: UniqueConstraintNodeBuilder

Defined in: [schema/unique-constraint-builder.ts:4](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L4)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new UniqueConstraintNodeBuilder**(`node`): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:7](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L7)

#### Parameters

##### node

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Returns

`UniqueConstraintNodeBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/unique-constraint-builder.ts:54](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L54)

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

> **deferrable**(): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:22](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L22)

#### Returns

`UniqueConstraintNodeBuilder`

***

### initiallyDeferred()

> **initiallyDeferred**(): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:34](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L34)

#### Returns

`UniqueConstraintNodeBuilder`

***

### initiallyImmediate()

> **initiallyImmediate**(): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:42](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L42)

#### Returns

`UniqueConstraintNodeBuilder`

***

### notDeferrable()

> **notDeferrable**(): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:28](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L28)

#### Returns

`UniqueConstraintNodeBuilder`

***

### nullsNotDistinct()

> **nullsNotDistinct**(): `UniqueConstraintNodeBuilder`

Defined in: [schema/unique-constraint-builder.ts:16](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L16)

Adds `nulls not distinct` to the unique constraint definition

Supported by PostgreSQL dialect only

#### Returns

`UniqueConstraintNodeBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

Defined in: [schema/unique-constraint-builder.ts:58](https://github.com/kysely-org/kysely/blob/master/src/schema/unique-constraint-builder.ts#L58)

#### Returns

[`UniqueConstraintNode`](../interfaces/UniqueConstraintNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
