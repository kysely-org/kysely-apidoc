[**kysely**](../index.md)

***

[kysely](../modules.md) / DeduplicateJoinsPlugin

# Class: DeduplicateJoinsPlugin

Defined in: [plugin/deduplicate-joins/deduplicate-joins-plugin.ts:16](https://github.com/kysely-org/kysely/blob/master/src/plugin/deduplicate-joins/deduplicate-joins-plugin.ts#L16)

Plugin that removes duplicate joins from queries.

See [this recipe](https://github.com/kysely-org/kysely/blob/master/site/docs/recipes/0008-deduplicate-joins.md)

## Implements

- [`KyselyPlugin`](../interfaces/KyselyPlugin.md)

## Constructors

### Constructor

> **new DeduplicateJoinsPlugin**(): `DeduplicateJoinsPlugin`

#### Returns

`DeduplicateJoinsPlugin`

## Methods

### transformQuery()

> **transformQuery**(`args`): [`RootOperationNode`](../types/RootOperationNode.md)

Defined in: [plugin/deduplicate-joins/deduplicate-joins-plugin.ts:19](https://github.com/kysely-org/kysely/blob/master/src/plugin/deduplicate-joins/deduplicate-joins-plugin.ts#L19)

This is called for each query before it is executed. You can modify the query by
transforming its [OperationNode](../interfaces/OperationNode.md) tree provided in [args.node](../interfaces/PluginTransformQueryArgs.md#node)
and returning the transformed tree. You'd usually want to use an [OperationNodeTransformer](OperationNodeTransformer.md)
for this.

If you need to pass some query-related data between this method and `transformResult` you
can use a `WeakMap` with [args.queryId](../interfaces/PluginTransformQueryArgs.md#queryid) as the key:

```ts
import type {
  KyselyPlugin,
  QueryResult,
  RootOperationNode,
  UnknownRow
} from 'kysely'

interface MyData {
  // ...
}
const data = new WeakMap<any, MyData>()

const plugin = {
  transformQuery(args: PluginTransformQueryArgs): RootOperationNode {
    const something: MyData = {}

    // ...

    data.set(args.queryId, something)

    // ...

    return args.node
  },

  async transformResult(args: PluginTransformResultArgs): Promise<QueryResult<UnknownRow>> {
    // ...

    const something = data.get(args.queryId)

    // ...

    return args.result
  }
} satisfies KyselyPlugin
```

You should use a `WeakMap` instead of a `Map` or some other strong references because `transformQuery`
is not always matched by a call to `transformResult` which would leave orphaned items in the map
and cause a memory leak.

#### Parameters

##### args

[`PluginTransformQueryArgs`](../interfaces/PluginTransformQueryArgs.md)

#### Returns

[`RootOperationNode`](../types/RootOperationNode.md)

#### Implementation of

[`KyselyPlugin`](../interfaces/KyselyPlugin.md).[`transformQuery`](../interfaces/KyselyPlugin.md#transformquery)

***

### transformResult()

> **transformResult**(`args`): `Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<[`UnknownRow`](../types/UnknownRow.md)\>\>

Defined in: [plugin/deduplicate-joins/deduplicate-joins-plugin.ts:23](https://github.com/kysely-org/kysely/blob/master/src/plugin/deduplicate-joins/deduplicate-joins-plugin.ts#L23)

This method is called for each query after it has been executed. The result
of the query can be accessed through [args.result](../interfaces/PluginTransformResultArgs.md#result).
You can modify the result and return the modifier result.

#### Parameters

##### args

[`PluginTransformResultArgs`](../interfaces/PluginTransformResultArgs.md)

#### Returns

`Promise`\<[`QueryResult`](../interfaces/QueryResult.md)\<[`UnknownRow`](../types/UnknownRow.md)\>\>

#### Implementation of

[`KyselyPlugin`](../interfaces/KyselyPlugin.md).[`transformResult`](../interfaces/KyselyPlugin.md#transformresult)
