[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateTableNode

# Interface: CreateTableNode

Defined in: [operation-node/create-table-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L23)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns

> `readonly` **columns**: readonly [`ColumnDefinitionNode`](ColumnDefinitionNode.md)[]

Defined in: [operation-node/create-table-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L26)

***

### constraints?

> `readonly` `optional` **constraints?**: readonly [`ConstraintNode`](../types/ConstraintNode.md)[]

Defined in: [operation-node/create-table-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L27)

***

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/create-table-node.ts:33](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L33)

***

### frontModifiers?

> `readonly` `optional` **frontModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/create-table-node.ts:32](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L32)

***

### ifNotExists?

> `readonly` `optional` **ifNotExists?**: `boolean`

Defined in: [operation-node/create-table-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L30)

***

### indexes?

> `readonly` `optional` **indexes?**: readonly [`AddIndexNode`](AddIndexNode.md)[]

Defined in: [operation-node/create-table-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L28)

***

### kind

> `readonly` **kind**: `"CreateTableNode"`

Defined in: [operation-node/create-table-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L24)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### onCommit?

> `readonly` `optional` **onCommit?**: `string`

Defined in: [operation-node/create-table-node.ts:31](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L31)

***

### selectQuery?

> `readonly` `optional` **selectQuery?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/create-table-node.ts:34](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L34)

***

### table

> `readonly` **table**: [`TableNode`](TableNode.md)

Defined in: [operation-node/create-table-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L25)

***

### temporary?

> `readonly` `optional` **temporary?**: `boolean`

Defined in: [operation-node/create-table-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/create-table-node.ts#L29)
