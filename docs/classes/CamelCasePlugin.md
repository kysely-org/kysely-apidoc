[**kysely**](../index.md)

***

[kysely](../modules.md) / CamelCasePlugin

# Class: CamelCasePlugin

Defined in: [plugin/camel-case/camel-case-plugin.ts:121](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L121)

A plugin that converts snake_case identifiers in the database into
camelCase in the JavaScript side.

For example let's assume we have a table called `person_table`
with columns `first_name` and `last_name` in the database. When
using `CamelCasePlugin` we would setup Kysely like this:

```ts
import * as Sqlite from 'better-sqlite3'
import { CamelCasePlugin, Kysely, SqliteDialect } from 'kysely'

interface CamelCasedDatabase {
  userMetadata: {
    firstName: string
    lastName: string
  }
}

const db = new Kysely<CamelCasedDatabase>({
  dialect: new SqliteDialect({
    database: new Sqlite(':memory:'),
  }),
  plugins: [new CamelCasePlugin()],
})

const person = await db.selectFrom('userMetadata')
  .where('firstName', '=', 'Arnold')
  .select(['firstName', 'lastName'])
  .executeTakeFirst()

if (person) {
  console.log(person.firstName)
}
```

The generated SQL (SQLite):

```sql
select "first_name", "last_name" from "user_metadata" where "first_name" = ?
```

As you can see from the example, __everything__ needs to be defined
in camelCase in the TypeScript code: table names, columns, schemas,
__everything__. When using the `CamelCasePlugin` Kysely works as if
the database was defined in camelCase.

There are various options you can give to the plugin to modify
the way identifiers are converted. See [CamelCasePluginOptions](../interfaces/CamelCasePluginOptions.md).
If those options are not enough, you can override this plugin's
`snakeCase` and `camelCase` methods to make the conversion exactly
the way you like:

```ts
class MyCamelCasePlugin extends CamelCasePlugin {
  protected override snakeCase(str: string): string {
    // ...

    return str
  }

  protected override camelCase(str: string): string {
    // ...

    return str
  }
}
```

## Implements

- [`KyselyPlugin`](../interfaces/KyselyPlugin.md)

## Constructors

### Constructor

> **new CamelCasePlugin**(`opt?`): `CamelCasePlugin`

Defined in: [plugin/camel-case/camel-case-plugin.ts:126](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L126)

#### Parameters

##### opt?

[`CamelCasePluginOptions`](../interfaces/CamelCasePluginOptions.md) = `{}`

#### Returns

`CamelCasePlugin`

## Properties

### opt

> `readonly` **opt**: [`CamelCasePluginOptions`](../interfaces/CamelCasePluginOptions.md) = `{}`

Defined in: [plugin/camel-case/camel-case-plugin.ts:126](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L126)

## Methods

### camelCase()

> `protected` **camelCase**(`str`): `string`

Defined in: [plugin/camel-case/camel-case-plugin.ts:171](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L171)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### mapRow()

> `protected` **mapRow**(`row`): [`UnknownRow`](../types/UnknownRow.md)

Defined in: [plugin/camel-case/camel-case-plugin.ts:152](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L152)

#### Parameters

##### row

[`UnknownRow`](../types/UnknownRow.md)

#### Returns

[`UnknownRow`](../types/UnknownRow.md)

***

### snakeCase()

> `protected` **snakeCase**(`str`): `string`

Defined in: [plugin/camel-case/camel-case-plugin.ts:167](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L167)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### transformQuery()

> **transformQuery**(`args`): [`RootOperationNode`](../types/RootOperationNode.md)

Defined in: [plugin/camel-case/camel-case-plugin.ts:135](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L135)

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

Defined in: [plugin/camel-case/camel-case-plugin.ts:139](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L139)

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
