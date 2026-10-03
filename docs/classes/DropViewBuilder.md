[**kysely**](../index.md)

***

[kysely](../modules.md) / DropViewBuilder

# Class: DropViewBuilder

Defined in: [schema/drop-view-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new DropViewBuilder**(`props`): `DropViewBuilder`

Defined in: [schema/drop-view-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L13)

#### Parameters

##### props

[`DropViewBuilderProps`](../interfaces/DropViewBuilderProps.md)

#### Returns

`DropViewBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/drop-view-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L48)

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

> **cascade**(): `DropViewBuilder`

Defined in: [schema/drop-view-builder.ts:35](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L35)

#### Returns

`DropViewBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/drop-view-builder.ts:59](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L59)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/drop-view-builder.ts:66](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L66)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `DropViewBuilder`

Defined in: [schema/drop-view-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L26)

#### Returns

`DropViewBuilder`

***

### materialized()

> **materialized**(): `DropViewBuilder`

Defined in: [schema/drop-view-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L17)

#### Returns

`DropViewBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropViewNode`](../interfaces/DropViewNode.md)

Defined in: [schema/drop-view-builder.ts:52](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-view-builder.ts#L52)

#### Returns

[`DropViewNode`](../interfaces/DropViewNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
