[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableExecutor

# Class: AlterTableExecutor

Defined in: [schema/alter-table-executor.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-executor.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new AlterTableExecutor**(`props`): `AlterTableExecutor`

Defined in: [schema/alter-table-executor.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-executor.ts#L13)

#### Parameters

##### props

[`AlterTableExecutorProps`](../interfaces/AlterTableExecutorProps.md)

#### Returns

`AlterTableExecutor`

## Methods

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/alter-table-executor.ts:24](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-executor.ts#L24)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/alter-table-executor.ts:31](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-executor.ts#L31)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### toOperationNode()

> **toOperationNode**(): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [schema/alter-table-executor.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-executor.ts#L17)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
