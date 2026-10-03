[**kysely**](../index.md)

***

[kysely](../modules.md) / DeleteQueryNode

# Interface: DeleteQueryNode

Defined in: [operation-node/delete-query-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L17)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/delete-query-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L28)

***

### explain?

> `readonly` `optional` **explain?**: [`ExplainNode`](ExplainNode.md)

Defined in: [operation-node/delete-query-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L27)

***

### from

> `readonly` **from**: [`FromNode`](FromNode.md)

Defined in: [operation-node/delete-query-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L19)

***

### joins?

> `readonly` `optional` **joins?**: readonly [`JoinNode`](JoinNode.md)[]

Defined in: [operation-node/delete-query-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L21)

***

### kind

> `readonly` **kind**: `"DeleteQueryNode"`

Defined in: [operation-node/delete-query-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L18)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### limit?

> `readonly` `optional` **limit?**: [`LimitNode`](LimitNode.md)

Defined in: [operation-node/delete-query-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L26)

***

### orderBy?

> `readonly` `optional` **orderBy?**: [`OrderByNode`](OrderByNode.md)

Defined in: [operation-node/delete-query-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L25)

***

### output?

> `readonly` `optional` **output?**: [`OutputNode`](OutputNode.md)

Defined in: [operation-node/delete-query-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L30)

***

### returning?

> `readonly` `optional` **returning?**: [`ReturningNode`](ReturningNode.md)

Defined in: [operation-node/delete-query-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L23)

***

### top?

> `readonly` `optional` **top?**: [`TopNode`](TopNode.md)

Defined in: [operation-node/delete-query-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L29)

***

### using?

> `readonly` `optional` **using?**: [`UsingNode`](UsingNode.md)

Defined in: [operation-node/delete-query-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L20)

***

### where?

> `readonly` `optional` **where?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/delete-query-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L22)

***

### with?

> `readonly` `optional` **with?**: [`WithNode`](WithNode.md)

Defined in: [operation-node/delete-query-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/delete-query-node.ts#L24)
