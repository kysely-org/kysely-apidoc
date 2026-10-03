[**kysely**](../index.md)

***

[kysely](../modules.md) / InsertQueryNode

# Interface: InsertQueryNode

Defined in: [operation-node/insert-query-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L16)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### columns?

> `readonly` `optional` **columns?**: readonly [`ColumnNode`](ColumnNode.md)[]

Defined in: [operation-node/insert-query-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L19)

***

### defaultValues?

> `readonly` `optional` **defaultValues?**: `boolean`

Defined in: [operation-node/insert-query-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L28)

***

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/insert-query-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L29)

***

### explain?

> `readonly` `optional` **explain?**: [`ExplainNode`](ExplainNode.md)

Defined in: [operation-node/insert-query-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L27)

***

### into?

> `readonly` `optional` **into?**: [`TableNode`](TableNode.md)

Defined in: [operation-node/insert-query-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L18)

***

### kind

> `readonly` **kind**: `"InsertQueryNode"`

Defined in: [operation-node/insert-query-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L17)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### onConflict?

> `readonly` `optional` **onConflict?**: [`OnConflictNode`](OnConflictNode.md)

Defined in: [operation-node/insert-query-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L22)

***

### onDuplicateKey?

> `readonly` `optional` **onDuplicateKey?**: [`OnDuplicateKeyNode`](OnDuplicateKeyNode.md)

Defined in: [operation-node/insert-query-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L23)

***

### orAction?

> `readonly` `optional` **orAction?**: [`OrActionNode`](OrActionNode.md)

Defined in: [operation-node/insert-query-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L25)

***

### output?

> `readonly` `optional` **output?**: [`OutputNode`](OutputNode.md)

Defined in: [operation-node/insert-query-node.ts:31](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L31)

***

### replace?

> `readonly` `optional` **replace?**: `boolean`

Defined in: [operation-node/insert-query-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L26)

***

### returning?

> `readonly` `optional` **returning?**: [`ReturningNode`](ReturningNode.md)

Defined in: [operation-node/insert-query-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L21)

***

### top?

> `readonly` `optional` **top?**: [`TopNode`](TopNode.md)

Defined in: [operation-node/insert-query-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L30)

***

### values?

> `readonly` `optional` **values?**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/insert-query-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L20)

***

### with?

> `readonly` `optional` **with?**: [`WithNode`](WithNode.md)

Defined in: [operation-node/insert-query-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/insert-query-node.ts#L24)
