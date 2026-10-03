[**kysely**](../index.md)

***

[kysely](../modules.md) / DropTypeNode

# Interface: DropTypeNode

Defined in: [operation-node/drop-type-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L10)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### additionalNames?

> `readonly` `optional` **additionalNames?**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)[]

Defined in: [operation-node/drop-type-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L13)

***

### cascade?

> `readonly` `optional` **cascade?**: `boolean`

Defined in: [operation-node/drop-type-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L15)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-type-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L14)

***

### kind

> `readonly` **kind**: `"DropTypeNode"`

Defined in: [operation-node/drop-type-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L11)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### name

> `readonly` **name**: [`SchemableIdentifierNode`](SchemableIdentifierNode.md)

Defined in: [operation-node/drop-type-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-type-node.ts#L12)
