[**kysely**](../index.md)

***

[kysely](../modules.md) / DropIndexNode

# Interface: DropIndexNode

Defined in: [operation-node/drop-index-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### cascade?

> `readonly` `optional` **cascade?**: `boolean`

Defined in: [operation-node/drop-index-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L13)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-index-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L12)

***

### kind

> `readonly` **kind**: `"DropIndexNode"`

Defined in: [operation-node/drop-index-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L9)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/drop-index-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L10)

***

### table?

> `readonly` `optional` **table?**: [`TableNode`](TableNode.md)

Defined in: [operation-node/drop-index-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-index-node.ts#L11)
