[**kysely**](../index.md)

***

[kysely](../modules.md) / DropTableBuilder

# Class: DropTableBuilder

Defined in: [schema/drop-table-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new DropTableBuilder**(`props`): `DropTableBuilder`

Defined in: [schema/drop-table-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L13)

#### Parameters

##### props

[`DropTableBuilderProps`](../interfaces/DropTableBuilderProps.md)

#### Returns

`DropTableBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/drop-table-builder.ts:53](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L53)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### cascade()

> **cascade**(): `DropTableBuilder`

Defined in: [schema/drop-table-builder.ts:40](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L40)

#### Returns

`DropTableBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/drop-table-builder.ts:64](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L64)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/drop-table-builder.ts:71](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L71)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `DropTableBuilder`

Defined in: [schema/drop-table-builder.ts:31](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L31)

#### Returns

`DropTableBuilder`

***

### temporary()

> **temporary**(): `DropTableBuilder`

Defined in: [schema/drop-table-builder.ts:22](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L22)

Adds the "temporary" modifier.

This is only supported by some dialects like MySQL.

#### Returns

`DropTableBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropTableNode`](../interfaces/DropTableNode.md)

Defined in: [schema/drop-table-builder.ts:57](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-table-builder.ts#L57)

#### Returns

[`DropTableNode`](../interfaces/DropTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
