[**kysely**](../index.md)

***

[kysely](../modules.md) / DropColumnBuilder

# Class: DropColumnBuilder

Defined in: [schema/drop-column-builder.ts:5](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-column-builder.ts#L5)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new DropColumnBuilder**(`props`): `DropColumnBuilder`

Defined in: [schema/drop-column-builder.ts:8](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-column-builder.ts#L8)

#### Parameters

##### props

[`DropColumnBuilderProps`](../interfaces/DropColumnBuilderProps.md)

#### Returns

`DropColumnBuilder`

## Methods

### ifExists()

> **ifExists**(): `DropColumnBuilder`

Defined in: [schema/drop-column-builder.ts:12](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-column-builder.ts#L12)

#### Returns

`DropColumnBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropColumnNode`](../interfaces/DropColumnNode.md)

Defined in: [schema/drop-column-builder.ts:19](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-column-builder.ts#L19)

#### Returns

[`DropColumnNode`](../interfaces/DropColumnNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
