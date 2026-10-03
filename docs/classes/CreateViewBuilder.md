[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateViewBuilder

# Class: CreateViewBuilder

Defined in: [schema/create-view-builder.ts:14](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L14)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new CreateViewBuilder**(`props`): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:17](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L17)

#### Parameters

##### props

[`CreateViewBuilderProps`](../interfaces/CreateViewBuilderProps.md)

#### Returns

`CreateViewBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-view-builder.ts:102](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L102)

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

### as()

> **as**(`query`): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:83](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L83)

Sets the select query or a `values` statement that creates the view.

WARNING!
Some dialects don't support parameterized queries in DDL statements and therefore
the query or raw [sql](../variables/sql.md) expression passed here is interpolated into a single
string opening an SQL injection vulnerability. DO NOT pass unchecked user input
into the query or raw expression passed to this method!

#### Parameters

##### query

[`SelectQueryBuilder`](../interfaces/SelectQueryBuilder.md)\<`any`, `any`, `any`\> \| [`RawBuilder`](../interfaces/RawBuilder.md)\<`any`\>

#### Returns

`CreateViewBuilder`

***

### columns()

> **columns**(`columns`): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:65](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L65)

#### Parameters

##### columns

`string`[]

#### Returns

`CreateViewBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/create-view-builder.ts:113](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L113)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/create-view-builder.ts:120](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L120)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ifNotExists()

> **ifNotExists**(): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:47](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L47)

Only implemented on some dialects like SQLite. On most dialects, use [orReplace](#orreplace).

#### Returns

`CreateViewBuilder`

***

### materialized()

> **materialized**(): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:35](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L35)

#### Returns

`CreateViewBuilder`

***

### orReplace()

> **orReplace**(): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:56](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L56)

#### Returns

`CreateViewBuilder`

***

### temporary()

> **temporary**(): `CreateViewBuilder`

Defined in: [schema/create-view-builder.ts:26](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L26)

Adds the "temporary" modifier.

Use this to create a temporary view.

#### Returns

`CreateViewBuilder`

***

### toOperationNode()

> **toOperationNode**(): [`CreateViewNode`](../interfaces/CreateViewNode.md)

Defined in: [schema/create-view-builder.ts:106](https://github.com/kysely-org/kysely/blob/master/src/schema/create-view-builder.ts#L106)

#### Returns

[`CreateViewNode`](../interfaces/CreateViewNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
