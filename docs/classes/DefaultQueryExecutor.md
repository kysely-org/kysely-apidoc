[**kysely**](../index.md)

***

[kysely](../modules.md) / DefaultQueryExecutor

# Class: DefaultQueryExecutor

Defined in: [query-executor/default-query-executor.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L12)

This interface abstracts away the details of how to compile a query into SQL
and execute it. Instead of passing around all those details, [SelectQueryBuilder](../interfaces/SelectQueryBuilder.md)
and other classes that execute queries can just pass around and instance of
`QueryExecutor`.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`QueryExecutorBase`](QueryExecutorBase.md)

## Constructors

### Constructor

> **new DefaultQueryExecutor**(`compiler`, `adapter`, `connectionProvider`, `plugins?`): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:17](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L17)

#### Parameters

##### compiler

[`QueryCompiler`](../interfaces/QueryCompiler.md)

##### adapter

[`DialectAdapter`](../interfaces/DialectAdapter.md)

##### connectionProvider

[`ConnectionProvider`](../interfaces/ConnectionProvider.md)

##### plugins?

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)[] = `[]`

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`constructor`](QueryExecutorBase.md#constructor)

## Accessors

### adapter

#### Get Signature

> **get** **adapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [query-executor/default-query-executor.ts:30](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L30)

Returns the adapter for the current dialect.

##### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`adapter`](QueryExecutorBase.md#adapter)

***

### plugins

#### Get Signature

> **get** **plugins**(): readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

Defined in: [query-executor/query-executor-base.ts:36](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L36)

Returns all installed plugins.

##### Returns

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

#### Inherited from

[`QueryExecutorBase`](QueryExecutorBase.md).[`plugins`](QueryExecutorBase.md#plugins)

## Methods

### compileQuery()

> **compileQuery**(`node`, `queryId`): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [query-executor/default-query-executor.ts:34](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L34)

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

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`compileQuery`](QueryExecutorBase.md#compilequery)

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

#### Inherited from

[`QueryExecutorBase`](QueryExecutorBase.md).[`executeQuery`](QueryExecutorBase.md#executequery)

***

### provideConnection()

> **provideConnection**\<`T`\>(`consumer`, `options?`): `Promise`\<`T`\>

Defined in: [query-executor/default-query-executor.ts:38](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L38)

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

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`provideConnection`](QueryExecutorBase.md#provideconnection)

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

#### Inherited from

[`QueryExecutorBase`](QueryExecutorBase.md).[`stream`](QueryExecutorBase.md#stream)

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

#### Inherited from

[`QueryExecutorBase`](QueryExecutorBase.md).[`transformQuery`](QueryExecutorBase.md#transformquery)

***

### withConnectionProvider()

> **withConnectionProvider**(`connectionProvider`): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:72](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L72)

Returns a copy of this executor with a new connection provider.

#### Parameters

##### connectionProvider

[`ConnectionProvider`](../interfaces/ConnectionProvider.md)

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withConnectionProvider`](QueryExecutorBase.md#withconnectionprovider)

***

### withoutPlugins()

> **withoutPlugins**(): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:83](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L83)

Returns a copy of this executor without any plugins.

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withoutPlugins`](QueryExecutorBase.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:54](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L54)

Returns a copy of this executor with a plugin added as the
last plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPlugin`](QueryExecutorBase.md#withplugin)

***

### withPluginAtFront()

> **withPluginAtFront**(`plugin`): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:63](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L63)

Returns a copy of this executor with a plugin added as the
first plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPluginAtFront`](QueryExecutorBase.md#withpluginatfront)

***

### withPlugins()

> **withPlugins**(`plugins`): `DefaultQueryExecutor`

Defined in: [query-executor/default-query-executor.ts:45](https://github.com/kysely-org/kysely/blob/master/src/query-executor/default-query-executor.ts#L45)

Returns a copy of this executor with a list of plugins added
as the last plugins.

#### Parameters

##### plugins

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

#### Returns

`DefaultQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPlugins`](QueryExecutorBase.md#withplugins)
