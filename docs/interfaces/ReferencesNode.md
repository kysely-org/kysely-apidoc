[**kysely**](../index.md)

***

[kysely](../modules.md) / ReferencesNode

# Interface: ReferencesNode

Defined in: [operation-node/references-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L25)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns

> `readonly` **columns**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/references-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L28)

***

### kind

> `readonly` **kind**: `"ReferencesNode"`

Defined in: [operation-node/references-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L26)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### onDelete?

> `readonly` `optional` **onDelete?**: [`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

Defined in: [operation-node/references-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L29)

***

### onUpdate?

> `readonly` `optional` **onUpdate?**: [`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

Defined in: [operation-node/references-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L30)

***

### table

> `readonly` **table**: [`TableNode`](TableNode.md)

Defined in: [operation-node/references-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/references-node.ts#L27)
