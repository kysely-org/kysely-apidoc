[**kysely**](../index.md)

***

[kysely](../modules.md) / SelectModifierNode

# Interface: SelectModifierNode

Defined in: [operation-node/select-modifier-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-modifier-node.ts#L13)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"SelectModifierNode"`

Defined in: [operation-node/select-modifier-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-modifier-node.ts#L14)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### modifier?

> `readonly` `optional` **modifier?**: [`SelectModifier`](../types/SelectModifier.md)

Defined in: [operation-node/select-modifier-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-modifier-node.ts#L15)

***

### of?

> `readonly` `optional` **of?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/select-modifier-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-modifier-node.ts#L17)

***

### rawModifier?

> `readonly` `optional` **rawModifier?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/select-modifier-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/select-modifier-node.ts#L16)
