[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateViewNode

# Interface: CreateViewNode

Defined in: [operation-node/create-view-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L13)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### as?

> `readonly` `optional` **as?**: [`RawNode`](RawNode.md) \| [`SelectQueryNode`](SelectQueryNode.md)

Defined in: [operation-node/create-view-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L21)

***

### columns?

> `readonly` `optional` **columns?**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/create-view-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L20)

***

### ifNotExists?

> `readonly` `optional` **ifNotExists?**: `boolean`

Defined in: [operation-node/create-view-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L19)

***

### kind

> `readonly` **kind**: `"CreateViewNode"`

Defined in: [operation-node/create-view-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L14)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### materialized?

> `readonly` `optional` **materialized?**: `boolean`

Defined in: [operation-node/create-view-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L17)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/create-view-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L15)

***

### orReplace?

> `readonly` `optional` **orReplace?**: `boolean`

Defined in: [operation-node/create-view-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L18)

***

### temporary?

> `readonly` `optional` **temporary?**: `boolean`

Defined in: [operation-node/create-view-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-view-node.ts#L16)
