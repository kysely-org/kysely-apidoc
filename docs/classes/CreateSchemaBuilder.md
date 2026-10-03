[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateSchemaBuilder

# Class: CreateSchemaBuilder

Defined in: [schema/create-schema-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new CreateSchemaBuilder**(`props`): `CreateSchemaBuilder`

Defined in: [schema/create-schema-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L13)

#### Parameters

##### props

[`CreateSchemaBuilderProps`](../interfaces/CreateSchemaBuilderProps.md)

#### Returns

`CreateSchemaBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-schema-builder.ts:28](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L28)

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

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/create-schema-builder.ts:39](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L39)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/create-schema-builder.ts:46](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L46)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifNotExists()

> **ifNotExists**(): `CreateSchemaBuilder`

Defined in: [schema/create-schema-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L17)

#### Returns

`CreateSchemaBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

Defined in: [schema/create-schema-builder.ts:32](https://github.com/kysely-org/kysely/blob/master/src/schema/create-schema-builder.ts#L32)

#### Returns

[`CreateSchemaNode`](../interfaces/CreateSchemaNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
