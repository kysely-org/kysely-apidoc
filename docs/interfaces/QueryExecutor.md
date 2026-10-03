[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryExecutor

# Interface: QueryExecutor

Defined in: [query-executor/query-executor.ts:19](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L19)

This interface abstracts away the details of how to compile a query into SQL
and execute it. Instead of passing around all those details, [SelectQueryBuilder](SelectQueryBuilder.md)
and other classes that execute queries can just pass around and instance of
`QueryExecutor`.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`ConnectionProvider`](ConnectionProvider.md)

## Accessors

### adapter

#### Get Signature

> **get** **adapter**(): [`DialectAdapter`](DialectAdapter.md)

Defined in: [query-executor/query-executor.ts:23](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L23)

Returns the adapter for the current dialect.

##### Returns

[`DialectAdapter`](DialectAdapter.md)

***

### plugins

#### Get Signature

> **get** **plugins**(): readonly [`KyselyPlugin`](KyselyPlugin.md)[]

Defined in: [query-executor/query-executor.ts:28](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L28)

Returns all installed plugins.

##### Returns

readonly [`KyselyPlugin`](KyselyPlugin.md)[]

## Methods

### compileQuery()

> **compileQuery**\<`R`\>(`node`, `queryId`): [`CompiledQuery`](CompiledQuery.md)\<`R`\>

Defined in: [query-executor/query-executor.ts:42](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L42)

Compiles the transformed query into SQL. You usually want to pass
the output of [transformQuery](#transformquery) into this method but you can
compile any query using this method.

#### Type Parameters

##### R

`R` = `unknown`

#### Parameters

##### node

[`RootOperationNode`](../types/RootOperationNode.md)

##### queryId

[`QueryId`](QueryId.md)

#### Returns

[`CompiledQuery`](CompiledQuery.md)\<`R`\>

***

### executeQuery()

> **executeQuery**\<`R`\>(`compiledQuery`, `options?`): `Promise`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

Defined in: [query-executor/query-executor.ts:51](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L51)

Executes a compiled query and runs the result through all plugins'
`transformResult` method.

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](CompiledQuery.md)\<`R`\>

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

***

### provideConnection()

> **provideConnection**\<`T`\>(`consumer`, `options?`): `Promise`\<`T`\>

Defined in: [driver/connection-provider.ts:9](https://github.com/kysely-org/kysely/blob/master/src/driver/connection-provider.ts#L9)

Provides a connection for the callback and takes care of disposing
the connection after the callback has been run.

#### Type Parameters

##### T

`T`

#### Parameters

##### consumer

(`connection`) => `Promise`\<`T`\>

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`ConnectionProvider`](ConnectionProvider.md).[`provideConnection`](ConnectionProvider.md#provideconnection)

***

### stream()

> **stream**\<`R`\>(`compiledQuery`, `chunkSize`, `options?`): `AsyncIterableIterator`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

Defined in: [query-executor/query-executor.ts:61](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L61)

Executes a compiled query and runs the result through all plugins'
`transformResult` method. Results are streamead instead of loaded
at once.

#### Type Parameters

##### R

`R`

#### Parameters

##### compiledQuery

[`CompiledQuery`](CompiledQuery.md)\<`R`\>

##### chunkSize

`number`

How many rows should be pulled from the database at once. Supported
only by the postgres driver.

##### options?

[`AbortableOperationOptions`](AbortableOperationOptions.md)

#### Returns

`AsyncIterableIterator`\<[`QueryResult`](QueryResult.md)\<`R`\>\>

***

### transformQuery()

> **transformQuery**\<`T`\>(`node`, `queryId`): `T`

Defined in: [query-executor/query-executor.ts:35](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L35)

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

[`QueryId`](QueryId.md)

#### Returns

`T`

***

### withConnectionProvider()

> **withConnectionProvider**(`connectionProvider`): `QueryExecutor`

Defined in: [query-executor/query-executor.ts:74](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L74)

Returns a copy of this executor with a new connection provider.

#### Parameters

##### connectionProvider

[`ConnectionProvider`](ConnectionProvider.md)

#### Returns

`QueryExecutor`

***

### withoutPlugins()

> **withoutPlugins**(): `QueryExecutor`

Defined in: [query-executor/query-executor.ts:97](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L97)

Returns a copy of this executor without any plugins.

#### Returns

`QueryExecutor`

***

### withPlugin()

> **withPlugin**(`plugin`): `QueryExecutor`

Defined in: [query-executor/query-executor.ts:80](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L80)

Returns a copy of this executor with a plugin added as the
last plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`QueryExecutor`

***

### withPluginAtFront()

> **withPluginAtFront**(`plugin`): `QueryExecutor`

Defined in: [query-executor/query-executor.ts:92](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L92)

Returns a copy of this executor with a plugin added as the
first plugin.

#### Parameters

##### plugin

[`KyselyPlugin`](KyselyPlugin.md)

#### Returns

`QueryExecutor`

***

### withPlugins()

> **withPlugins**(`plugin`): `QueryExecutor`

Defined in: [query-executor/query-executor.ts:86](https://github.com/kysely-org/kysely/blob/master/src/query-executor/query-executor.ts#L86)

Returns a copy of this executor with a list of plugins added
as the last plugins.

#### Parameters

##### plugin

readonly [`KyselyPlugin`](KyselyPlugin.md)[]

#### Returns

`QueryExecutor`
