[**kysely**](../index.md)

***

[kysely](../modules.md) / ColumnDefinitionNode

# Interface: ColumnDefinitionNode

Defined in: [operation-node/column-definition-node.ts:14](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L14)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`OperationNode`](OperationNode.md)

## Properties

### autoIncrement?

> `readonly` `optional` **autoIncrement?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:20](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L20)

***

### check?

> `readonly` `optional` **check?**: [`CheckConstraintNode`](CheckConstraintNode.md)

Defined in: [operation-node/column-definition-node.ts:24](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L24)

***

### column

> `readonly` **column**: [`ColumnNode`](ColumnNode.md)

Defined in: [operation-node/column-definition-node.ts:16](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L16)

***

### dataType

> `readonly` **dataType**: [`OperationNode`](OperationNode.md)

Defined in: [operation-node/column-definition-node.ts:17](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L17)

***

### defaultTo?

> `readonly` `optional` **defaultTo?**: [`DefaultValueNode`](DefaultValueNode.md)

Defined in: [operation-node/column-definition-node.ts:23](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L23)

***

### endModifiers?

> `readonly` `optional` **endModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/column-definition-node.ts:28](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L28)

***

### frontModifiers?

> `readonly` `optional` **frontModifiers?**: readonly [`OperationNode`](OperationNode.md)[]

Defined in: [operation-node/column-definition-node.ts:27](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L27)

***

### generated?

> `readonly` `optional` **generated?**: [`GeneratedNode`](GeneratedNode.md)

Defined in: [operation-node/column-definition-node.ts:25](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L25)

***

### identity?

> `readonly` `optional` **identity?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:30](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L30)

***

### ifNotExists?

> `readonly` `optional` **ifNotExists?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:31](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L31)

***

### kind

> `readonly` **kind**: `"ColumnDefinitionNode"`

Defined in: [operation-node/column-definition-node.ts:15](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L15)

#### Overrides

[`OperationNode`](OperationNode.md).[`kind`](OperationNode.md#kind)

***

### notNull?

> `readonly` `optional` **notNull?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:22](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L22)

***

### nullsNotDistinct?

> `readonly` `optional` **nullsNotDistinct?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:29](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L29)

***

### primaryKey?

> `readonly` `optional` **primaryKey?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:19](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L19)

***

### references?

> `readonly` `optional` **references?**: [`ReferencesNode`](ReferencesNode.md)

Defined in: [operation-node/column-definition-node.ts:18](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L18)

***

### unique?

> `readonly` `optional` **unique?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:21](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L21)

***

### unsigned?

> `readonly` `optional` **unsigned?**: `boolean`

Defined in: [operation-node/column-definition-node.ts:26](https://github.com/kysely-org/kysely/blob/master/src/operation-node/column-definition-node.ts#L26)
