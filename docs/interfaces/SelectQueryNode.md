[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectQueryNode

# Interface: SelectQueryNode

Defined in: [operation-node/select-query-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L22)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### distinctOn?

> `readonly` `optional` **distinctOn?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/select-query-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L26)

***

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`SelectModifierNode`](SelectModifierNode.md)[]

Defined in: [operation-node/select-query-node.ts:32](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L32)

***

### explain?

> `readonly` `optional` **explain?**: [`ExplainNode`](ExplainNode.md)

Defined in: [operation-node/select-query-node.ts:37](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L37)

***

### fetch?

> `readonly` `optional` **fetch?**: [`FetchNode`](FetchNode.md)

Defined in: [operation-node/select-query-node.ts:39](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L39)

***

### from?

> `readonly` `optional` **from?**: [`FromNode`](FromNode.md)

Defined in: [operation-node/select-query-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L24)

***

### frontModifiers?

> `readonly` `optional` **frontModifiers?**: readonly [`SelectModifierNode`](SelectModifierNode.md)[]

Defined in: [operation-node/select-query-node.ts:31](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L31)

***

### groupBy?

> `readonly` `optional` **groupBy?**: [`GroupByNode`](GroupByNode.md)

Defined in: [operation-node/select-query-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L28)

***

### having?

> `readonly` `optional` **having?**: [`HavingNode`](HavingNode.md)

Defined in: [operation-node/select-query-node.ts:36](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L36)

***

### joins?

> `readonly` `optional` **joins?**: readonly [`JoinNode`](JoinNode.md)[]

Defined in: [operation-node/select-query-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L27)

***

### kind

> `readonly` **kind**: `"SelectQueryNode"`

Defined in: [operation-node/select-query-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L23)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### limit?

> `readonly` `optional` **limit?**: [`LimitNode`](LimitNode.md)

Defined in: [operation-node/select-query-node.ts:33](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L33)

***

### offset?

> `readonly` `optional` **offset?**: [`OffsetNode`](OffsetNode.md)

Defined in: [operation-node/select-query-node.ts:34](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L34)

***

### orderBy?

> `readonly` `optional` **orderBy?**: [`OrderByNode`](OrderByNode.md)

Defined in: [operation-node/select-query-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L29)

***

### selections?

> `readonly` `optional` **selections?**: readonly [`SelectionNode`](SelectionNode.md)[]

Defined in: [operation-node/select-query-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L25)

***

### setOperations?

> `readonly` `optional` **setOperations?**: readonly [`SetOperationNode`](SetOperationNode.md)[]

Defined in: [operation-node/select-query-node.ts:38](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L38)

***

### top?

> `readonly` `optional` **top?**: [`TopNode`](TopNode.md)

Defined in: [operation-node/select-query-node.ts:40](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L40)

***

### where?

> `readonly` `optional` **where?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/select-query-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L30)

***

### with?

> `readonly` `optional` **with?**: [`WithNode`](WithNode.md)

Defined in: [operation-node/select-query-node.ts:35](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-query-node.ts#L35)
