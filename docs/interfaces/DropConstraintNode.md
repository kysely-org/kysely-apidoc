[**kysely**](../index.md)

***

[kysely](../modules.md) / DropConstraintNode

# Interface: DropConstraintNode

Defined in: [operation-node/drop-constraint-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-constraint-node.ts#L10)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### constraintName

> `readonly` **constraintName**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/drop-constraint-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-constraint-node.ts#L12)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-constraint-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-constraint-node.ts#L13)

***

### kind

> `readonly` **kind**: `"DropConstraintNode"`

Defined in: [operation-node/drop-constraint-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-constraint-node.ts#L11)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### modifier?

> `readonly` `optional` **modifier?**: `"cascade"` \| `"restrict"`

Defined in: [operation-node/drop-constraint-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-constraint-node.ts#L14)
