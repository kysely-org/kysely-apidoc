[**kysely**](../index.md)

***

[kysely](../modules.md) / DropTableNode

# Interface: DropTableNode

Defined in: [operation-node/drop-table-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L13)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### cascade?

> `readonly` `optional` **cascade?**: `boolean`

Defined in: [operation-node/drop-table-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L17)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-table-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L16)

***

### kind

> `readonly` **kind**: `"DropTableNode"`

Defined in: [operation-node/drop-table-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L14)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### table

> `readonly` **table**: [`TableNode`](TableNode.md)

Defined in: [operation-node/drop-table-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L15)

***

### temporary?

> `readonly` `optional` **temporary?**: `boolean`

Defined in: [operation-node/drop-table-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-table-node.ts#L18)
