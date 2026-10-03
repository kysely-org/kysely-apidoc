[**kysely**](../index.md)

***

[kysely](../modules.md) / PrimaryKeyConstraintNode

# Interface: PrimaryKeyConstraintNode

Defined in: [operation-node/primary-key-constraint-node.ts:6](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L6)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns

> `readonly` **columns**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/primary-key-constraint-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L8)

***

### deferrable?

> `readonly` `optional` **deferrable?**: `boolean`

Defined in: [operation-node/primary-key-constraint-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L10)

***

### initiallyDeferred?

> `readonly` `optional` **initiallyDeferred?**: `boolean`

Defined in: [operation-node/primary-key-constraint-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L11)

***

### kind

> `readonly` **kind**: `"PrimaryKeyConstraintNode"`

Defined in: [operation-node/primary-key-constraint-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L7)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name?

> `readonly` `optional` **name?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/primary-key-constraint-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primary-key-constraint-node.ts#L9)
