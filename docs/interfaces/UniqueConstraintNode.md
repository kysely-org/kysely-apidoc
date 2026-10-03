[**kysely**](../index.md)

***

[kysely](../modules.md) / UniqueConstraintNode

# Interface: UniqueConstraintNode

Defined in: [operation-node/unique-constraint-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns

> `readonly` **columns**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/unique-constraint-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L9)

***

### deferrable?

> `readonly` `optional` **deferrable?**: `boolean`

Defined in: [operation-node/unique-constraint-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L12)

***

### initiallyDeferred?

> `readonly` `optional` **initiallyDeferred?**: `boolean`

Defined in: [operation-node/unique-constraint-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L13)

***

### kind

> `readonly` **kind**: `"UniqueConstraintNode"`

Defined in: [operation-node/unique-constraint-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name?

> `readonly` `optional` **name?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/unique-constraint-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L10)

***

### nullsNotDistinct?

> `readonly` `optional` **nullsNotDistinct?**: `boolean`

Defined in: [operation-node/unique-constraint-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/unique-constraint-node.ts#L11)
