[**kysely**](../index.md)

***

[kysely](../modules.md) / DropTypeBuilder

# Class: DropTypeBuilder

Defined in: [schema/drop-type-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new DropTypeBuilder**(`props`): `DropTypeBuilder`

Defined in: [schema/drop-type-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L13)

#### Parameters

##### props

[`DropTypeBuilderProps`](../interfaces/DropTypeBuilderProps.md)

#### Returns

`DropTypeBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/drop-type-builder.ts:45](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L45)

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

> **cascade**(): `DropTypeBuilder`

Defined in: [schema/drop-type-builder.ts:32](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L32)

Adds `cascade` to the query.

#### Returns

`DropTypeBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/drop-type-builder.ts:56](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L56)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/drop-type-builder.ts:63](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L63)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `DropTypeBuilder`

Defined in: [schema/drop-type-builder.ts:20](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L20)

Adds `if exists` to the query.

#### Returns

`DropTypeBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropTypeNode`](../interfaces/DropTypeNode.md)

Defined in: [schema/drop-type-builder.ts:49](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-type-builder.ts#L49)

#### Returns

[`DropTypeNode`](../interfaces/DropTypeNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
