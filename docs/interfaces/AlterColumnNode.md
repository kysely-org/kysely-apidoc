[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterColumnNode

# Interface: AlterColumnNode

Defined in: [operation-node/alter-column-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### column

> `readonly` **column**: [`ColumnNode`](ColumnNode.md)

Defined in: [operation-node/alter-column-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L10)

***

### dataType?

> `readonly` `optional` **dataType?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/alter-column-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L11)

***

### dataTypeExpression?

> `readonly` `optional` **dataTypeExpression?**: [`RawNode`](RawNode.md)

Defined in: [operation-node/alter-column-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L12)

***

### dropDefault?

> `readonly` `optional` **dropDefault?**: `true`

Defined in: [operation-node/alter-column-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L14)

***

### dropNotNull?

> `readonly` `optional` **dropNotNull?**: `true`

Defined in: [operation-node/alter-column-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L16)

***

### kind

> `readonly` **kind**: `"AlterColumnNode"`

Defined in: [operation-node/alter-column-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L9)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### setDefault?

> `readonly` `optional` **setDefault?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/alter-column-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L13)

***

### setNotNull?

> `readonly` `optional` **setNotNull?**: `true`

Defined in: [operation-node/alter-column-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-column-node.ts#L15)
