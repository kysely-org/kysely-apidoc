[**kysely**](../index.md)

***

[kysely](../modules.md) / RefreshMaterializedViewBuilder

# Class: RefreshMaterializedViewBuilder

Defined in: [schema/refresh-materialized-view-builder.ts:10](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L10)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new RefreshMaterializedViewBuilder**(`props`): `RefreshMaterializedViewBuilder`

Defined in: [schema/refresh-materialized-view-builder.ts:15](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L15)

#### Parameters

##### props

[`RefreshMaterializedViewBuilderProps`](../interfaces/RefreshMaterializedViewBuilderProps.md)

#### Returns

`RefreshMaterializedViewBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/refresh-materialized-view-builder.ts:73](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L73)

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

Defined in: [schema/refresh-materialized-view-builder.ts:84](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L84)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### concurrently()

> **concurrently**(): `RefreshMaterializedViewBuilder`

Defined in: [schema/refresh-materialized-view-builder.ts:27](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L27)

Adds the "concurrently" modifier.

Use this to refresh the view without locking out concurrent selects on the materialized view.

WARNING!
This cannot be used with the "with no data" modifier.

#### Returns

`RefreshMaterializedViewBuilder`

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/refresh-materialized-view-builder.ts:91](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L91)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### toOperationNode()

> **toOperationNode**(): [`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

Defined in: [schema/refresh-materialized-view-builder.ts:77](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L77)

#### Returns

[`RefreshMaterializedViewNode`](../interfaces/RefreshMaterializedViewNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### withData()

> **withData**(): `RefreshMaterializedViewBuilder`

Defined in: [schema/refresh-materialized-view-builder.ts:42](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L42)

Adds the "with data" modifier.

If specified (or defaults) the backing query is executed to provide the new data, and the materialized view is left in a scannable state

#### Returns

`RefreshMaterializedViewBuilder`

***

### withNoData()

> **withNoData**(): `RefreshMaterializedViewBuilder`

Defined in: [schema/refresh-materialized-view-builder.ts:59](https://github.com/kysely-org/kysely/blob/master/src/schema/refresh-materialized-view-builder.ts#L59)

Adds the "with no data" modifier.

If specified, no new data is generated and the materialized view is left in an unscannable state.

WARNING!
This cannot be used with the "concurrently" modifier.

#### Returns

`RefreshMaterializedViewBuilder`
