[**kysely**](../index.md)

***

[kysely](../modules.md) / AddIndexNode

# Interface: AddIndexNode

Defined in: [operation-node/add-index-node.ts:6](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L6)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns?

> `readonly` `optional` **columns?**: [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/add-index-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L9)

***

### ~~ifNotExists?~~

> `readonly` `optional` **ifNotExists?**: `boolean`

Defined in: [operation-node/add-index-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L16)

#### Deprecated

added by accident.

***

### kind

> `readonly` **kind**: `"AddIndexNode"`

Defined in: [operation-node/add-index-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L7)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/add-index-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L8)

***

### unique?

> `readonly` `optional` **unique?**: `boolean`

Defined in: [operation-node/add-index-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L10)

***

### using?

> `readonly` `optional` **using?**: [`RawNode`](RawNode.md)

Defined in: [operation-node/add-index-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/add-index-node.ts#L11)
