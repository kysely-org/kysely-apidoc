[**kysely**](../index.md)

***

[kysely](../modules.md) / RefreshMaterializedViewNode

# Interface: RefreshMaterializedViewNode

Defined in: [operation-node/refresh-materialized-view-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/refresh-materialized-view-node.ts#L10)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### concurrently?

> `readonly` `optional` **concurrently?**: `boolean`

Defined in: [operation-node/refresh-materialized-view-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/refresh-materialized-view-node.ts#L13)

***

### kind

> `readonly` **kind**: `"RefreshMaterializedViewNode"`

Defined in: [operation-node/refresh-materialized-view-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/refresh-materialized-view-node.ts#L11)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/refresh-materialized-view-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/refresh-materialized-view-node.ts#L12)

***

### withNoData?

> `readonly` `optional` **withNoData?**: `boolean`

Defined in: [operation-node/refresh-materialized-view-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/refresh-materialized-view-node.ts#L14)
