[**kysely**](../index.md)

***

[kysely](../modules.md) / OrderByItemNode

# Interface: OrderByItemNode

Defined in: [operation-node/order-by-item-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### collation?

> `readonly` `optional` **collation?**: [`CollateNode`](CollateNode.md)

Defined in: [operation-node/order-by-item-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L12)

***

### direction?

> `readonly` `optional` **direction?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/order-by-item-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L10)

***

### kind

> `readonly` **kind**: `"OrderByItemNode"`

Defined in: [operation-node/order-by-item-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### nulls?

> `readonly` `optional` **nulls?**: `"first"` \| `"last"`

Defined in: [operation-node/order-by-item-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L11)

***

### orderBy

> `readonly` **orderBy**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/order-by-item-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/order-by-item-node.ts#L9)
