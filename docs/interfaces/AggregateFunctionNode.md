[**kysely**](../index.md)

***

[kysely](../modules.md) / AggregateFunctionNode

# Interface: AggregateFunctionNode

Defined in: [operation-node/aggregate-function-node.ts:8](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### aggregated

> `readonly` **aggregated**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/aggregate-function-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L11)

***

### distinct?

> `readonly` `optional` **distinct?**: `boolean`

Defined in: [operation-node/aggregate-function-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L12)

***

### filter?

> `readonly` `optional` **filter?**: [`WhereNode`](WhereNode.md)

Defined in: [operation-node/aggregate-function-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L15)

***

### func

> `readonly` **func**: `string`

Defined in: [operation-node/aggregate-function-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L10)

***

### kind

> `readonly` **kind**: `"AggregateFunctionNode"`

Defined in: [operation-node/aggregate-function-node.ts:9](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L9)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### orderBy?

> `readonly` `optional` **orderBy?**: [`OrderByNode`](OrderByNode.md)

Defined in: [operation-node/aggregate-function-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L13)

***

### over?

> `readonly` `optional` **over?**: [`OverNode`](OverNode.md)

Defined in: [operation-node/aggregate-function-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L16)

***

### withinGroup?

> `readonly` `optional` **withinGroup?**: [`OrderByNode`](OrderByNode.md)

Defined in: [operation-node/aggregate-function-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/aggregate-function-node.ts#L14)
