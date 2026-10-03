[**kysely**](../index.md)

***

[kysely](../modules.md) / MergeQueryNode

# Interface: MergeQueryNode

Defined in: [operation-node/merge-query-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L12)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/merge-query-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L21)

***

### into

> `readonly` **into**: [`TableNode`](TableNode.md) \| [`AliasNode`](AliasNode.md)

Defined in: [operation-node/merge-query-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L14)

***

### kind

> `readonly` **kind**: `"MergeQueryNode"`

Defined in: [operation-node/merge-query-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L13)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### output?

> `readonly` `optional` **output?**: [`OutputNode`](OutputNode.md)

Defined in: [operation-node/merge-query-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L20)

***

### returning?

> `readonly` `optional` **returning?**: [`ReturningNode`](ReturningNode.md)

Defined in: [operation-node/merge-query-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L19)

***

### top?

> `readonly` `optional` **top?**: [`TopNode`](TopNode.md)

Defined in: [operation-node/merge-query-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L18)

***

### using?

> `readonly` `optional` **using?**: [`JoinNode`](JoinNode.md)

Defined in: [operation-node/merge-query-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L15)

***

### whens?

> `readonly` `optional` **whens?**: readonly [`WhenNode`](WhenNode.md)[]

Defined in: [operation-node/merge-query-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L16)

***

### with?

> `readonly` `optional` **with?**: [`WithNode`](WithNode.md)

Defined in: [operation-node/merge-query-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/merge-query-node.ts#L17)
