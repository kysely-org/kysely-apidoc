[**kysely**](../index.md)

***

[kysely](../modules.md) / JSONPathNode

# Interface: JSONPathNode

Defined in: [operation-node/json-path-node.ts:6](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-path-node.ts#L6)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### inOperator?

> `readonly` `optional` **inOperator?**: [`OperatorNode`](OperatorNode.md)

Defined in: [operation-node/json-path-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-path-node.ts#L8)

***

### kind

> `readonly` **kind**: `"JSONPathNode"`

Defined in: [operation-node/json-path-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-path-node.ts#L7)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### pathLegs

> `readonly` **pathLegs**: readonly [`JSONPathLegNode`](JSONPathLegNode.md)[]

Defined in: [operation-node/json-path-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/json-path-node.ts#L9)
