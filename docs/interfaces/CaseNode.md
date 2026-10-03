[**kysely**](../index.md)

***

[kysely](../modules.md) / CaseNode

# Interface: CaseNode

Defined in: [operation-node/case-node.ts:5](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L5)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### else?

> `readonly` `optional` **else?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/case-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L9)

***

### isStatement?

> `readonly` `optional` **isStatement?**: `boolean`

Defined in: [operation-node/case-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L10)

***

### kind

> `readonly` **kind**: `"CaseNode"`

Defined in: [operation-node/case-node.ts:6](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L6)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### value?

> `readonly` `optional` **value?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/case-node.ts:7](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L7)

***

### when?

> `readonly` `optional` **when?**: readonly [`WhenNode`](WhenNode.md)[]

Defined in: [operation-node/case-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/case-node.ts#L8)
