[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryExecutorBase

# Abstract Class: QueryExecutorBase

Defined in: [query-executor/query-executor-base.ts:27](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L27)

This interface abstracts away the details of how to compile a query into SQL
and execute it. Instead of passing around all those details, [SelectQueryBuilder](../interfaces/SelectQueryBuilder.md)
and other classes that execute queries can just pass around and instance of
`QueryExecutor`.

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`DefaultQueryExecutor`](DefaultQueryExecutor.md)
- [`NoopQueryExecutor`](NoopQueryExecutor.md)

## Implements

- [`QueryExecutor`](../interfaces/QueryExecutor.md)

## Constructors

### Constructor

> **new QueryExecutorBase**(`plugins?`): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:30](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L30)

#### Parameters

##### plugins?

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[] = `NO_PLUGINS`

#### Returns

`QueryExecutorBase`

## Accessors

### adapter

#### Get Signature

> **get** `abstract` **adapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [query-executor/query-executor-base.ts:34](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L34)

Returns the adapter for the current dialect.

##### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`adapter`](../interfaces/QueryExecutor.md#adapter)

***

### plugins

#### Get Signature

> **get** **plugins**(): readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

Defined in: [query-executor/query-executor-base.ts:36](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L36)

Returns all installed plugins.

##### Returns

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`plugins`](../interfaces/QueryExecutor.md#plugins)

## Methods

### compileQuery()

> `abstract` **compileQuery**(`node`, `queryId`): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [query-executor/query-executor-base.ts:63](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L63)

Compiles the transformed query into SQL. You usually want to pass
the output of [transformQuery](../interfaces/QueryExecutor.md#transformquery) into this method but you can
compile any query using this method.

#### Parameters

##### node

[`RootOperationNode`](../types/RootOperationNode.md)

##### queryId

[`QueryId`](../interfaces/QueryId.md)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`compileQuery`](../interfaces/QueryExecutor.md#compilequery)

***

### executeQuery()

> **executeQuery**\<`R`\>(`compiledQuery`, `options?`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

Defined in: [query-executor/query-executor-base.ts:73](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L73)

Executes a compiled query and runs the result through all plugins'
`transformResult` method.

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`executeQuery`](../interfaces/QueryExecutor.md#executequery)

***

### provideConnection()

> `abstract` **provideConnection**\<`T`\>(`consumer`, `options?`): `Promise`\<`T`\>

Defined in: [query-executor/query-executor-base.ts:68](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L68)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

#### Parameters

##### consumer

(`connection`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`provideConnection`](../interfaces/QueryExecutor.md#provideconnection)

***

### stream()

> **stream**\<`R`\>(`compiledQuery`, `chunkSize`, `options?`): `AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

Defined in: [query-executor/query-executor-base.ts:182](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L182)

Executes a compiled query and runs the result through all plugins'
`transformResult` method. Results are streamead instead of loaded
at once.

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](../interfaces/CompiledQuery.md)

##### chunkSize

`number`

##### options?

[`AbortableOperationOptions`](../interfaces/AbortableOperationOptions.md)

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](../interfaces/QueryResult.md)\<`R`\>\>

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`stream`](../interfaces/QueryExecutor.md#stream)

***

### transformQuery()

> **transformQuery**\<`T`\>(`node`, `queryId`): `T`

Defined in: [query-executor/query-executor-base.ts:40](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L40)

Given the query the user has built (expressed as an operation node tree)
this method runs it through all plugins' `transformQuery` methods and
returns the result.

#### Type Parameters

##### T

`T` *extends* [`RootOperationNode`](../types/RootOperationNode.md)

#### Parameters

##### node

`T`

##### queryId

[`QueryId`](../interfaces/QueryId.md)

#### Returns

`T`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`transformQuery`](../interfaces/QueryExecutor.md#transformquery)

***

### withConnectionProvider()

> `abstract` **withConnectionProvider**(`connectionProvider`): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:288](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L288)

Returns a copy of this executor with a new connection provider.

#### Parameters

##### connectionProvider

[`ConnectionProvider`](../interfaces/ConnectionProvider.md)

#### Returns

`QueryExecutorBase`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`withConnectionProvider`](../interfaces/QueryExecutor.md#withconnectionprovider)

***

### withoutPlugins()

> `abstract` **withoutPlugins**(): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:295](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L295)

Returns a copy of this executor without any plugins.

#### Returns

`QueryExecutorBase`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`withoutPlugins`](../interfaces/QueryExecutor.md#withoutplugins)

***

### withPlugin()

> `abstract` **withPlugin**(`plugin`): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:292](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L292)

Returns a copy of this executor with a plugin added as the
last plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`QueryExecutorBase`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`withPlugin`](../interfaces/QueryExecutor.md#withplugin)

***

### withPluginAtFront()

> `abstract` **withPluginAtFront**(`plugin`): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:294](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L294)

Returns a copy of this executor with a plugin added as the
first plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`QueryExecutorBase`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`withPluginAtFront`](../interfaces/QueryExecutor.md#withpluginatfront)

***

### withPlugins()

> `abstract` **withPlugins**(`plugin`): `QueryExecutorBase`

Defined in: [query-executor/query-executor-base.ts:293](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L293)

Returns a copy of this executor with a list of plugins added
as the last plugins.

#### Parameters

##### plugin

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

#### Returns

`QueryExecutorBase`

#### Implementation of

[`QueryExecutor`](../interfaces/QueryExecutor.md).[`withPlugins`](../interfaces/QueryExecutor.md#withplugins)
