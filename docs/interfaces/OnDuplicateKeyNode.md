[**kysely**](../index.md)

***

[kysely](../modules.md) / OnDuplicateKeyNode

# Interface: OnDuplicateKeyNode

Defined in: [operation-node/on-duplicate-key-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-duplicate-key-node.ts#L7)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### kind

> `readonly` **kind**: `"OnDuplicateKeyNode"`

Defined in: [operation-node/on-duplicate-key-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-duplicate-key-node.ts#L8)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### updates

> `readonly` **updates**: readonly [`ColumnUpdateNode`](ColumnUpdateNode.md)[]

Defined in: [operation-node/on-duplicate-key-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/on-duplicate-key-node.ts#L9)
