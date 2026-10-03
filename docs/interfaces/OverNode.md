[**kysely**](../index.md)

***

[kysely](../modules.md) / OverNode

# Interface: OverNode

Defined in: [operation-node/over-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/over-node.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"OverNode"`

Defined in: [operation-node/over-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/over-node.ts#L9)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### orderBy?

> `readonly` `optional` **orderBy?**: [`OrderByNode`](OrderByNode.md)

Defined in: [operation-node/over-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/over-node.ts#L10)

***

### partitionBy?

> `readonly` `optional` **partitionBy?**: [`PartitionByNode`](PartitionByNode.md)

Defined in: [operation-node/over-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/over-node.ts#L11)
