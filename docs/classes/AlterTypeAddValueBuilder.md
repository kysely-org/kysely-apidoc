[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTypeAddValueBuilder

# Class: AlterTypeAddValueBuilder\<V\>

Defined in: [schema/alter-type-add-value-builder.ts:8](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-add-value-builder.ts#L8)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`QueryFinalizer`](QueryFinalizer.md)\<[`AlterTypeNode`](../interfaces/AlterTypeNode.md)\>

## Type Parameters

### V

`V` *extends* `string`

## Constructors

### Constructor

> **new AlterTypeAddValueBuilder**\<`V`\>(`props`): `AlterTypeAddValueBuilder`\<`V`\>

Defined in: [schema/alter-type-add-value-builder.ts:13](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-add-value-builder.ts#L13)

#### Parameters

##### props

[`AlterTypeAddValueBuilderProps`](../interfaces/AlterTypeAddValueBuilderProps.md)

#### Returns

`AlterTypeAddValueBuilder`\<`V`\>

#### Overrides

[`QueryFinalizer`](QueryFinalizer.md).[`constructor`](QueryFinalizer.md#constructor)

## Methods

### after()

> **after**\<`NV`\>(`neighborValue`): `AlterTypeAddValueBuilder`\<`V`\>

Defined in: [schema/alter-type-add-value-builder.ts:44](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-add-value-builder.ts#L44)

Sets an `after <value>` clause.

#### Type Parameters

##### NV

`NV` *extends* `string`

#### Parameters

##### neighborValue

`NV` *extends* `V` ? `never` : `NV`

#### Returns

`AlterTypeAddValueBuilder`\<`V`\>

***

### before()

> **before**\<`NV`\>(`neighborValue`): `AlterTypeAddValueBuilder`\<`V`\>

Defined in: [schema/alter-type-add-value-builder.ts:35](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-add-value-builder.ts#L35)

Sets a `before <value>` clause.

#### Type Parameters

##### NV

`NV` *extends* `string`

#### Parameters

##### neighborValue

`NV` *extends* `V` ? `never` : `NV`

#### Returns

`AlterTypeAddValueBuilder`\<`V`\>

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<`unknown`\>

Defined in: [query-finalizer.ts:31](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L31)

Compiles the query.

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<`unknown`\>

#### Inherited from

[`QueryFinalizer`](QueryFinalizer.md).[`compile`](QueryFinalizer.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`unknown`\>\>

Defined in: [query-finalizer.ts:41](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L41)

Executes the query.

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`unknown`\>\>

#### Inherited from

[`QueryFinalizer`](QueryFinalizer.md).[`execute`](QueryFinalizer.md#execute)

***

### ifNotExists()

> **ifNotExists**(): `AlterTypeAddValueBuilder`\<`V`\>

Defined in: [schema/alter-type-add-value-builder.ts:21](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-type-add-value-builder.ts#L21)

Adds an `if not exists` clause.

#### Returns

`AlterTypeAddValueBuilder`\<`V`\>

***

### toOperationNode()

> **toOperationNode**(): [`AlterTypeNode`](../interfaces/AlterTypeNode.md)

Defined in: [query-finalizer.ts:21](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L21)

#### Returns

[`AlterTypeNode`](../interfaces/AlterTypeNode.md)

#### Inherited from

[`QueryFinalizer`](QueryFinalizer.md).[`toOperationNode`](QueryFinalizer.md#tooperationnode)
