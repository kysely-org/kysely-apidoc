[**kysely**](../index.md)

***

[kysely](../modules.md) / ParseJSONResultsPlugin

# Class: ParseJSONResultsPlugin

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:94](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L94)

Parses JSON strings in query results into JSON objects.

This plugin can be useful with dialects that don't automatically parse
JSON into objects and arrays but return JSON strings instead.

To apply this plugin globally, pass an instance of it to the `plugins` option
when creating a new `Kysely` instance:

```ts
import * as Sqlite from 'better-sqlite3'
import { Kysely, ParseJSONResultsPlugin, SqliteDialect } from 'kysely'
import type { Database } from 'type-editor' // imaginary module

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:'),
  }),
  plugins: [new ParseJSONResultsPlugin()],
})
```

To apply this plugin to a single query:

```ts
import { ParseJSONResultsPlugin } from 'kysely'
import { jsonArrayFrom } from 'kysely/helpers/sqlite'

const result = await db
  .selectFrom('person')
  .select((eb) => [
    'id',
    'first_name',
    'last_name',
    jsonArrayFrom(
      eb.selectFrom('pet')
        .whereRef('owner_id', '=', 'person.id')
        .select(['name', 'species'])
    ).as('pets')
  ])
  .withPlugin(new ParseJSONResultsPlugin())
  .execute()
```

## Implements

- [`KyselyPlugin`](../interfaces/KyselyPlugin.md)

## Constructors

### Constructor

> **new ParseJSONResultsPlugin**(`options?`): `ParseJSONResultsPlugin`

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:97](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L97)

#### Parameters

##### options?

[`ParseJSONResultsPluginOptions`](../interfaces/ParseJSONResultsPluginOptions.md) = `{}`

#### Returns

`ParseJSONResultsPlugin`

## Properties

### options

> `readonly` **options**: [`ParseJSONResultsPluginOptions`](../interfaces/ParseJSONResultsPluginOptions.md) = `{}`

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:97](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L97)

## Methods

### transformQuery()

> **transformQuery**(`args`): [`RootOperationNode`](../types/RootOperationNode.md)

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:111](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L111)

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

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:115](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L115)

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
