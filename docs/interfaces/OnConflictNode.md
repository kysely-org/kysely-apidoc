[**kysely**](../index.md)

***

[kysely](../modules.md) / OnConflictNode

# Interface: OnConflictNode

Defined in: [operation-node/on-conflict-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L13)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns?

> `readonly` `optional` **columns?**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/on-conflict-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L15)

***

### constraint?

> `readonly` `optional` **constraint?**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/on-conflict-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L16)

***

### doNothing?

> `readonly` `optional` **doNothing?**: `boolean`

Defined in: [operation-node/on-conflict-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L21)

***

### indexExpression?

> `readonly` `optional` **indexExpression?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/on-conflict-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L17)

***

### indexWhere?

> `readonly` `optional` **indexWhere?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/on-conflict-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L18)

***

### kind

> `readonly` **kind**: `"OnConflictNode"`

Defined in: [operation-node/on-conflict-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L14)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### updates?

> `readonly` `optional` **updates?**: readonly [`ColumnUpdateNode`](ColumnUpdateNode.md)[]

Defined in: [operation-node/on-conflict-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L19)

***

### updateWhere?

> `readonly` `optional` **updateWhere?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/on-conflict-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-conflict-node.ts#L20)
