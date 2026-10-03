[**kysely**](../index.md)

***

[kysely](../modules.md) / DropSchemaNode

# Interface: DropSchemaNode

Defined in: [operation-node/drop-schema-node.ts:10](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-schema-node.ts#L10)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### cascade?

> `readonly` `optional` **cascade?**: `boolean`

Defined in: [operation-node/drop-schema-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-schema-node.ts#L14)

***

### ifExists?

> `readonly` `optional` **ifExists?**: `boolean`

Defined in: [operation-node/drop-schema-node.ts:13](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-schema-node.ts#L13)

***

### kind

> `readonly` **kind**: `"DropSchemaNode"`

Defined in: [operation-node/drop-schema-node.ts:11](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-schema-node.ts#L11)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### schema

> `readonly` **schema**: [`IdentifierNode`](IdentifierNode.md)

Defined in: [operation-node/drop-schema-node.ts:12](https://github.com/kysely-org/kysely/blob/master/src/operation-node/drop-schema-node.ts#L12)
