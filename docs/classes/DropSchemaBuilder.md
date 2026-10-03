[**kysely**](../index.md)

***

[kysely](../modules.md) / DropSchemaBuilder

# Class: DropSchemaBuilder

Defined in: [schema/drop-schema-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new DropSchemaBuilder**(`props`): `DropSchemaBuilder`

Defined in: [schema/drop-schema-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L13)

#### Parameters

##### props

[`DropSchemaBuilderProps`](../interfaces/DropSchemaBuilderProps.md)

#### Returns

`DropSchemaBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/drop-schema-builder.ts:39](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L39)

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

> **cascade**(): `DropSchemaBuilder`

Defined in: [schema/drop-schema-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L26)

#### Returns

`DropSchemaBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/drop-schema-builder.ts:50](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L50)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/drop-schema-builder.ts:57](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L57)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifExists()

> **ifExists**(): `DropSchemaBuilder`

Defined in: [schema/drop-schema-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L17)

#### Returns

`DropSchemaBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`DropSchemaNode`](../interfaces/DropSchemaNode.md)

Defined in: [schema/drop-schema-builder.ts:43](https://github.com/kysely-org/kysely/blob/master/src/schema/drop-schema-builder.ts#L43)

#### Returns

[`DropSchemaNode`](../interfaces/DropSchemaNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
