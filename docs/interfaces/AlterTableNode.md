[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableNode

# Interface: AlterTableNode

Defined in: [operation-node/alter-table-node.ts:34](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L34)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### addConstraint?

> `readonly` `optional` **addConstraint?**: [`AddConstraintNode`](AddConstraintNode.md)

Defined in: [operation-node/alter-table-node.ts:40](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L40)

***

### addIndex?

> `readonly` `optional` **addIndex?**: [`AddIndexNode`](AddIndexNode.md)

Defined in: [operation-node/alter-table-node.ts:43](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L43)

***

### columnAlterations?

> `readonly` `optional` **columnAlterations?**: readonly [`AlterTableColumnAlterationNode`](../types/AlterTableColumnAlterationNode.md)[]

Defined in: [operation-node/alter-table-node.ts:39](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L39)

***

### dropConstraint?

> `readonly` `optional` **dropConstraint?**: [`DropConstraintNode`](DropConstraintNode.md)

Defined in: [operation-node/alter-table-node.ts:41](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L41)

***

### dropIndex?

> `readonly` `optional` **dropIndex?**: [`DropIndexNode`](DropIndexNode.md)

Defined in: [operation-node/alter-table-node.ts:44](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L44)

***

### kind

> `readonly` **kind**: `"AlterTableNode"`

Defined in: [operation-node/alter-table-node.ts:35](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L35)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### renameConstraint?

> `readonly` `optional` **renameConstraint?**: [`RenameConstraintNode`](RenameConstraintNode.md)

Defined in: [operation-node/alter-table-node.ts:42](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L42)

***

### renameTo?

> `readonly` `optional` **renameTo?**: [`TableNode`](TableNode.md)

Defined in: [operation-node/alter-table-node.ts:37](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L37)

***

### setSchema?

> `readonly` `optional` **setSchema?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/alter-table-node.ts:38](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L38)

***

### table

> `readonly` **table**: [`TableNode`](TableNode.md)

Defined in: [operation-node/alter-table-node.ts:36](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-table-node.ts#L36)
