[**kysely**](../index.md)

***

[kysely](../modules.md) / DropViewNode

# Interface: DropViewNode

Defined in: [operation-node/drop-view-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### cascade?

> `readonly` `optional` **cascade?**: `boolean`

Defined in: [operation-node/drop-view-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L12)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-view-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L10)

***

### kind

> `readonly` **kind**: `"DropViewNode"`

Defined in: [operation-node/drop-view-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### materialized?

> `readonly` `optional` **materialized?**: `boolean`

Defined in: [operation-node/drop-view-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L11)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/drop-view-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-view-node.ts#L9)
