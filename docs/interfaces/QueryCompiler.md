[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryCompiler

# Interface: QueryCompiler

Defined in: [query-compiler/query-compiler.ts:8](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/query-compiler.ts#L8)

a `QueryCompiler` compiles a query expressed as a tree of `OperationNodes` into SQL.

## Methods

### compileQuery()

> **compileQuery**(`node`, `queryId`): [`CompiledQuery`](CompiledQuery.md)

Defined in: [query-compiler/query-compiler.ts:9](https://github.com/kysely-org/kysely/blob/master/src/query-compiler/query-compiler.ts#L9)

#### Parameters

##### node

[`RootOperationNode`](../types/RootOperationNode.md)

##### queryId

[`QueryId`](QueryId.md)

#### Returns

[`CompiledQuery`](CompiledQuery.md)
