[**kysely**](../index.md)

***

[kysely](../modules.md) / KyselyPlugin

# Interface: KyselyPlugin

Defined in: [plugin/kysely-plugin.ts:7](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L7)

## Methods

### transformQuery()

> **transformQuery**(`args`): [`RootOperationNode`](../types/RootOperationNode.md)

Defined in: [plugin/kysely-plugin.ts:59](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L59)

This is called for each query before it is executed. You can modify the query by
transforming its [OperationNode](OperationNode.md) tree provided in [args.node](PluginTransformQueryArgs.md#node)
and returning the transformed tree. You'd usually want to use an [OperationNodeTransformer](../classes/OperationNodeTransformer.md)
for this.

If you need to pass some query-related data between this method and `transformResult` you
can use a `WeakMap` with [args.queryId](PluginTransformQueryArgs.md#queryid) as the key:

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

[`PluginTransformQueryArgs`](PluginTransformQueryArgs.md)

#### Returns

[`RootOperationNode`](../types/RootOperationNode.md)

***

### transformResult()

> **transformResult**(`args`): `Promise`\<[`QueryResult`](QueryResult.md)\<[`UnknownRow`](../types/UnknownRow.md)\>\>

Defined in: [plugin/kysely-plugin.ts:66](https://github.com/kysely-org/kysely/blob/master/src/plugin/kysely-plugin.ts#L66)

This method is called for each query after it has been executed. The result
of the query can be accessed through [args.result](PluginTransformResultArgs.md#result).
You can modify the result and return the modifier result.

#### Parameters

##### args

[`PluginTransformResultArgs`](PluginTransformResultArgs.md)

#### Returns

`Promise`\<[`QueryResult`](QueryResult.md)\<[`UnknownRow`](../types/UnknownRow.md)\>\>
