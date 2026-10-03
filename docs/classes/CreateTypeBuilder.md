[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateTypeBuilder

# Class: CreateTypeBuilder

Defined in: [schema/create-type-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new CreateTypeBuilder**(`props`): `CreateTypeBuilder`

Defined in: [schema/create-type-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L13)

#### Parameters

##### props

[`CreateTypeBuilderProps`](../interfaces/CreateTypeBuilderProps.md)

#### Returns

`CreateTypeBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-type-builder.ts:44](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L44)

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

### asEnum()

> **asEnum**(`values`): `CreateTypeBuilder`

Defined in: [schema/create-type-builder.ts:33](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L33)

Creates an anum type.

### Examples

```ts
db.schema.createType('species').asEnum(['cat', 'dog', 'frog'])
```

#### Parameters

##### values

readonly `string`[]

#### Returns

`CreateTypeBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/create-type-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L48)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/create-type-builder.ts:55](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L55)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### toOperationNode()

> **toOperationNode**(): [`CreateTypeNode`](../interfaces/CreateTypeNode.md)

Defined in: [schema/create-type-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/create-type-builder.ts#L17)

#### Returns

[`CreateTypeNode`](../interfaces/CreateTypeNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
