[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryFinalizer

# Class: QueryFinalizer\<N, O\>

Defined in: [query-finalizer.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L12)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`AlterTypeAddValueBuilder`](AlterTypeAddValueBuilder.md)

## Type Parameters

### N

`N` *extends* [`RootOperationNode`](../types/RootOperationNode.md)

### O

`O` = `unknown`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new QueryFinalizer**\<`N`, `O`\>(`props`): `QueryFinalizer`\<`N`, `O`\>

Defined in: [query-finalizer.ts:17](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L17)

#### Parameters

##### props

[`QueryFinalizerProps`](../interfaces/QueryFinalizerProps.md)\<`N`\>

#### Returns

`QueryFinalizer`\<`N`, `O`\>

## Methods

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

Defined in: [query-finalizer.ts:31](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L31)

Compiles the query.

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)\<`O`\>

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

Defined in: [query-finalizer.ts:41](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L41)

Executes the query.

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`O`\>\>

***

### toOperationNode()

> **toOperationNode**(): `N`

Defined in: [query-finalizer.ts:21](https://github.com/kysely-org/kysely/blob/master/src/query-finalizer.ts#L21)

#### Returns

`N`

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
