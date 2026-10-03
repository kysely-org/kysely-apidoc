[**kysely**](../index.md)

***

[kysely](../modules.md) / ReferenceNode

# Interface: ReferenceNode

Defined in: [operation-node/reference-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/reference-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### column

> `readonly` **column**: [`ColumnNode`](ColumnNode.md) \| [`SelectAllNode`](SelectAllNode.md)

Defined in: [operation-node/reference-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/reference-node.ts#L9)

***

### kind

> `readonly` **kind**: `"ReferenceNode"`

Defined in: [operation-node/reference-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/reference-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### table?

> `readonly` `optional` **table?**: [`TableNode`](TableNode.md)

Defined in: [operation-node/reference-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/reference-node.ts#L10)
