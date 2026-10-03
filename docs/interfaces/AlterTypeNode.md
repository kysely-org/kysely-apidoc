[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTypeNode

# Interface: AlterTypeNode

Defined in: [operation-node/alter-type-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L10)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### addValue?

> `readonly` `optional` **addValue?**: [`AddValueNode`](AddValueNode.md)

Defined in: [operation-node/alter-type-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L13)

***

### kind

> `readonly` **kind**: `"AlterTypeNode"`

Defined in: [operation-node/alter-type-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L11)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/alter-type-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L12)

***

### renameTo?

> `readonly` `optional` **renameTo?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/alter-type-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L14)

***

### renameValue?

> `readonly` `optional` **renameValue?**: [`RenameValueNode`](RenameValueNode.md)

Defined in: [operation-node/alter-type-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L15)

***

### setSchema?

> `readonly` `optional` **setSchema?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/alter-type-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/alter-type-node.ts#L16)
