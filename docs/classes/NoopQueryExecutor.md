[**kysely**](../index.md)

***

[kysely](../modules.md) / NoopQueryExecutor

# Class: NoopQueryExecutor

Defined in: [query-executor/noop-query-executor.ts:11](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L11)

A [QueryExecutor](../interfaces/QueryExecutor.md) subclass that can be used when you don't
have a [QueryCompiler](../interfaces/QueryCompiler.md), [ConnectionProvider](../interfaces/ConnectionProvider.md) or any
other needed things to actually execute queries.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`QueryExecutorBase`](QueryExecutorBase.md)

## Constructors

### Constructor

> **new NoopQueryExecutor**(`plugins?`): `NoopQueryExecutor`

Defined in: [query-executor/query-executor-base.ts:30](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor-base.ts#L30)

#### Parameters

##### plugins?

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[] = `NO_PLUGINS`

#### Returns

`NoopQueryExecutor`

#### Inherited from

[`QueryExecutorBase`](QueryExecutorBase.md).[`constructor`](QueryExecutorBase.md#constructor)

## Accessors

### adapter

#### Get Signature

> **get** **adapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [query-executor/noop-query-executor.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L12)

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

> **compileQuery**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [query-executor/noop-query-executor.ts:16](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L16)

Compiles the transformed query into SQL. You usually want to pass
the output of [transformQuery](../interfaces/QueryExecutor.md#transformquery) into this method but you can
compile any query using this method.

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

> **provideConnection**\<`T`\>(): `Promise`\<`T`\>

Defined in: [query-executor/noop-query-executor.ts:20](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L20)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

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

> **withConnectionProvider**(): `NoopQueryExecutor`

Defined in: [query-executor/noop-query-executor.ts:24](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L24)

Returns a copy of this executor with a new connection provider.

#### Returns

`NoopQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withConnectionProvider`](QueryExecutorBase.md#withconnectionprovider)

***

### withoutPlugins()

> **withoutPlugins**(): `NoopQueryExecutor`

Defined in: [query-executor/noop-query-executor.ts:40](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L40)

Returns a copy of this executor without any plugins.

#### Returns

`NoopQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withoutPlugins`](QueryExecutorBase.md#withoutplugins)

***

### withPlugin()

> **withPlugin**(`plugin`): `NoopQueryExecutor`

Defined in: [query-executor/noop-query-executor.ts:28](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L28)

Returns a copy of this executor with a plugin added as the
last plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`NoopQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPlugin`](QueryExecutorBase.md#withplugin)

***

### withPluginAtFront()

> **withPluginAtFront**(`plugin`): `NoopQueryExecutor`

Defined in: [query-executor/noop-query-executor.ts:36](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L36)

Returns a copy of this executor with a plugin added as the
first plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](../interfaces/KyselyPlugin.md)

#### Returns

`NoopQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPluginAtFront`](QueryExecutorBase.md#withpluginatfront)

***

### withPlugins()

> **withPlugins**(`plugins`): `NoopQueryExecutor`

Defined in: [query-executor/noop-query-executor.ts:32](https://github.com/kysely-org/kysely/blob/master/src/query-executor/noop-query-executor.ts#L32)

Returns a copy of this executor with a list of plugins added
as the last plugins.

#### Parameters

##### plugins

readonly [`KyselyPlugin`](../interfaces/KyselyPlugin.md)[]

#### Returns

`NoopQueryExecutor`

#### Overrides

[`QueryExecutorBase`](QueryExecutorBase.md).[`withPlugins`](QueryExecutorBase.md#withplugins)
