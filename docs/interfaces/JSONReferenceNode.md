[**kysely**](../index.md)

***

[kysely](../modules.md) / JSONReferenceNode

# Interface: JSONReferenceNode

Defined in: [operation-node/json-reference-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-reference-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"JSONReferenceNode"`

Defined in: [operation-node/json-reference-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-reference-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### reference

> `readonly` **reference**: [`ReferenceNode`](ReferenceNode.md)

Defined in: [operation-node/json-reference-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-reference-node.ts#L9)

***

### traversal

> `readonly` **traversal**: [`JSONOperatorChainNode`](JSONOperatorChainNode.md) \| [`JSONPathNode`](JSONPathNode.md)

Defined in: [operation-node/json-reference-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-reference-node.ts#L10)
