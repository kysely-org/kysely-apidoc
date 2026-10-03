[**kysely**](../index.md)

***

[kysely](../modules.md) / ForeignKeyConstraintNode

# Interface: ForeignKeyConstraintNode

Defined in: [operation-node/foreign-key-constraint-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L16)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns

> `readonly` **columns**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/foreign-key-constraint-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L18)

***

### deferrable?

> `readonly` `optional` **deferrable?**: `boolean`

Defined in: [operation-node/foreign-key-constraint-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L23)

***

### initiallyDeferred?

> `readonly` `optional` **initiallyDeferred?**: `boolean`

Defined in: [operation-node/foreign-key-constraint-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L24)

***

### kind

> `readonly` **kind**: `"ForeignKeyConstraintNode"`

Defined in: [operation-node/foreign-key-constraint-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L17)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name?

> `readonly` `optional` **name?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/foreign-key-constraint-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L22)

***

### onDelete?

> `readonly` `optional` **onDelete?**: [`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

Defined in: [operation-node/foreign-key-constraint-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L20)

***

### onUpdate?

> `readonly` `optional` **onUpdate?**: [`OnModifyForeignAction`](../types/OnModifyForeignAction.md)

Defined in: [operation-node/foreign-key-constraint-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L21)

***

### references

> `readonly` **references**: [`ReferencesNode`](ReferencesNode.md)

Defined in: [operation-node/foreign-key-constraint-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/foreign-key-constraint-node.ts#L19)
