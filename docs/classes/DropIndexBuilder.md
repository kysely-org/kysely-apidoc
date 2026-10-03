[**kysely**](../index.md)

***

[kysely](../modules.md) / DropIndexBuilder

# Class: DropIndexBuilder

Defined in: [schema/drop-index-builder.ts:11](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L11)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new DropIndexBuilder**(`props`): `DropIndexBuilder`

Defined in: [schema/drop-index-builder.ts:14](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L14)

#### Parameters

##### props

[`DropIndexBuilderProps`](../interfaces/DropIndexBuilderProps.md)

#### Returns

`DropIndexBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/drop-index-builder.ts:53](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L53)

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

> **cascade**(): `DropIndexBuilder`

Defined in: [schema/drop-index-builder.ts:40](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L40)

#### Returns

`DropIndexBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/drop-index-builder.ts:64](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L64)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/drop-index-builder.ts:71](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L71)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `DropIndexBuilder`

Defined in: [schema/drop-index-builder.ts:31](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L31)

#### Returns

`DropIndexBuilder`

***

### on()

> **on**(`table`): `DropIndexBuilder`

Defined in: [schema/drop-index-builder.ts:22](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L22)

Specifies the table the index was created for. This is not needed
in all dialects.

#### Parameters

##### table

`string`

#### Returns

`DropIndexBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropIndexNode`](../interfaces/DropIndexNode.md)

Defined in: [schema/drop-index-builder.ts:57](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-index-builder.ts#L57)

#### Returns

[`DropIndexNode`](../interfaces/DropIndexNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
