[**kysely**](../index.md)

***

[kysely](../modules.md) / PrimitiveValueListNode

# Interface: PrimitiveValueListNode

Defined in: [operation-node/primitive-value-list-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primitive-value-list-node.ts#L9)

This node is basically just a performance optimization over the normal ValueListNode.
The queries often contain large arrays of primitive values (for example in a `where in` list)
and we don't want to create a ValueNode for each item in those lists.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"PrimitiveValueListNode"`

Defined in: [operation-node/primitive-value-list-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primitive-value-list-node.ts#L10)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### values

> `readonly` **values**: readonly `unknown`[]

Defined in: [operation-node/primitive-value-list-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/primitive-value-list-node.ts#L11)
