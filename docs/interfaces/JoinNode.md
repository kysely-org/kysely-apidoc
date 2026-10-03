[**kysely**](../index.md)

***

[kysely](../modules.md) / JoinNode

# Interface: JoinNode

Defined in: [operation-node/join-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/join-node.ts#L18)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### joinType

> `readonly` **joinType**: [`JoinType`](../types/JoinType.md)

Defined in: [operation-node/join-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/join-node.ts#L20)

***

### kind

> `readonly` **kind**: `"JoinNode"`

Defined in: [operation-node/join-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/join-node.ts#L19)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### on?

> `readonly` `optional` **on?**: [`OnNode`](OnNode.md)

Defined in: [operation-node/join-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/join-node.ts#L22)

***

### table

> `readonly` **table**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/join-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/join-node.ts#L21)
