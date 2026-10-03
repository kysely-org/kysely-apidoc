[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteDialect

# Class: PGliteDialect

Defined in: [dialect/pglite/pglite-dialect.ts:37](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L37)

PGlite dialect.

The constructor takes an instance of [PGliteDialectConfig](../interfaces/PGliteDialectConfig.md).

```ts
import { PGlite } from '@electric-sql/pglite'

new PGliteDialect({
  pglite: new PGlite()
})
```

If you want the client to only be created once it's first used, `pglite`
can be a function:

```ts
import { PGlite } from '@electric-sql/pglite'

new PGliteDialect({
  pglite: () => new PGlite()
})
```

## Implements

- [`Dialect`](../interfaces/Dialect.md)

## Constructors

### Constructor

> **new PGliteDialect**(`config`): `PGliteDialect`

Defined in: [dialect/pglite/pglite-dialect.ts:40](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L40)

#### Parameters

##### config

[`PGliteDialectConfig`](../interfaces/PGliteDialectConfig.md)

#### Returns

`PGliteDialect`

## Methods

### createAdapter()

> **createAdapter**(): [`DialectAdapter`](../interfaces/DialectAdapter.md)

Defined in: [dialect/pglite/pglite-dialect.ts:44](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L44)

Creates an adapter for the dialect.

#### Returns

[`DialectAdapter`](../interfaces/DialectAdapter.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createAdapter`](../interfaces/Dialect.md#createadapter)

***

### createDriver()

> **createDriver**(): [`Driver`](../interfaces/Driver.md)

Defined in: [dialect/pglite/pglite-dialect.ts:48](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L48)

Creates a driver for the dialect.

#### Returns

[`Driver`](../interfaces/Driver.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createDriver`](../interfaces/Dialect.md#createdriver)

***

### createIntrospector()

> **createIntrospector**(`db`): [`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

Defined in: [dialect/pglite/pglite-dialect.ts:52](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L52)

Creates a database introspector that can be used to get database metadata
such as the table names and column names of those tables.

`db` never has any plugins installed. It's created using
[Kysely.withoutPlugins](Kysely.md#withoutplugins).

#### Parameters

##### db

[`Kysely`](Kysely.md)\<`any`\>

#### Returns

[`DatabaseIntrospector`](../interfaces/DatabaseIntrospector.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createIntrospector`](../interfaces/Dialect.md#createintrospector)

***

### createQueryCompiler()

> **createQueryCompiler**(): [`QueryCompiler`](../interfaces/QueryCompiler.md)

Defined in: [dialect/pglite/pglite-dialect.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect.ts#L56)

Creates a query compiler for the dialect.

#### Returns

[`QueryCompiler`](../interfaces/QueryCompiler.md)

#### Implementation of

[`Dialect`](../interfaces/Dialect.md).[`createQueryCompiler`](../interfaces/Dialect.md#createquerycompiler)
