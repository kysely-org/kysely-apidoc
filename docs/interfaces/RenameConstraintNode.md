[**kysely**](../index.md)

***

[kysely](../modules.md) / RenameConstraintNode

# Interface: RenameConstraintNode

Defined in: [operation-node/rename-constraint-node.ts:5](https://github.com/kysely-org/kysely/blob/master/src/operation-node/rename-constraint-node.ts#L5)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"RenameConstraintNode"`

Defined in: [operation-node/rename-constraint-node.ts:6](https://github.com/kysely-org/kysely/blob/master/src/operation-node/rename-constraint-node.ts#L6)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### newName

> `readonly` **newName**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/rename-constraint-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/rename-constraint-node.ts#L8)

***

### oldName

> `readonly` **oldName**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/rename-constraint-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/rename-constraint-node.ts#L7)
