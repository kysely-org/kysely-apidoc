[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateIndexNode

# Interface: CreateIndexNode

Defined in: [operation-node/create-index-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L11)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns?

> `readonly` `optional` **columns?**: [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/create-index-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L18)

***

### ifNotExists?

> `readonly` `optional` **ifNotExists?**: `boolean`

Defined in: [operation-node/create-index-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L23)

***

### kind

> `readonly` **kind**: `"CreateIndexNode"`

Defined in: [operation-node/create-index-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L12)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/create-index-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L16)

***

### nullsNotDistinct?

> `readonly` `optional` **nullsNotDistinct?**: `boolean`

Defined in: [operation-node/create-index-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L25)

***

### table?

> `readonly` `optional` **table?**: [`TableNode`](TableNode.md)

Defined in: [operation-node/create-index-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L17)

***

### unique?

> `readonly` `optional` **unique?**: `boolean`

Defined in: [operation-node/create-index-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L19)

***

### using?

> `readonly` `optional` **using?**: [`RawNode`](RawNode.md)

Defined in: [operation-node/create-index-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L22)

***

### where?

> `readonly` `optional` **where?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/create-index-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-index-node.ts#L24)
