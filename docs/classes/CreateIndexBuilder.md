[**kysely**](../index.md)

***

[kysely](../modules.md) / CreateIndexBuilder

# Class: CreateIndexBuilder\<C\>

Defined in: [schema/create-index-builder.ts:29](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L29)

## Type Parameters

### C

`C` = `never`

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new CreateIndexBuilder**\<`C`\>(`props`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:34](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L34)

#### Parameters

##### props

[`CreateIndexBuilderProps`](../interfaces/CreateIndexBuilderProps.md)

#### Returns

`CreateIndexBuilder`\<`C`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/create-index-builder.ts:325](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L325)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### column()

#### Call Signature

> **column**\<`CL`\>(`column`): `CreateIndexBuilder`\<`C` \| [`ExtractColumnNameFromOrderedColumnName`](../types/ExtractColumnNameFromOrderedColumnName.md)\<`CL`\>\>

Defined in: [schema/create-index-builder.ts:135](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L135)

Adds a column to the index.

Also see [columns](#columns) for adding multiple columns at once.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createIndex('person_first_name_and_age_index')
  .on('person')
  .column('first_name')
  .column<'last_name'>(sql`left(lower("last_name"), 1)`)
  .column('age desc')
  .where('last_name', 'is not', null)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create index "person_first_name_and_age_index"
on "person" ("first_name", left(lower("last_name"), 1), "age" desc)
where "last_name" is not null
```

##### Type Parameters

###### CL

`CL` *extends* `string`

##### Parameters

###### column

[`OrderedColumnName`](../types/OrderedColumnName.md)\<`CL`\>

##### Returns

`CreateIndexBuilder`\<`C` \| [`ExtractColumnNameFromOrderedColumnName`](../types/ExtractColumnNameFromOrderedColumnName.md)\<`CL`\>\>

#### Call Signature

> **column**\<`CL`\>(`expression`): `CreateIndexBuilder`\<`C` \| `CL`\>

Defined in: [schema/create-index-builder.ts:138](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L138)

Adds a column to the index.

Also see [columns](#columns) for adding multiple columns at once.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createIndex('person_first_name_and_age_index')
  .on('person')
  .column('first_name')
  .column<'last_name'>(sql`left(lower("last_name"), 1)`)
  .column('age desc')
  .where('last_name', 'is not', null)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create index "person_first_name_and_age_index"
on "person" ("first_name", left(lower("last_name"), 1), "age" desc)
where "last_name" is not null
```

##### Type Parameters

###### CL

`CL` *extends* `string` = `never`

##### Parameters

###### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`CreateIndexBuilder`\<`C` \| `CL`\>

***

### columns()

> **columns**\<`CL`\>(`columns`): `CreateIndexBuilder`\<`C` \| [`ExtractColumnNameFromOrderedColumnName`](../types/ExtractColumnNameFromOrderedColumnName.md)\<`CL`\>\>

Defined in: [schema/create-index-builder.ts:174](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L174)

Adds a list of columns to the index.

Also see [column](#column) for adding a single column.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createIndex('person_first_name_and_age_index')
  .on('person')
  .columns(['first_name', sql`left(lower("last_name"), 1)`, 'age desc'])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create index "person_first_name_and_age_index"
on "person" ("first_name", left(lower("last_name"), 1), "age" desc)
```

#### Type Parameters

##### CL

`CL` *extends* `string`

#### Parameters

##### columns

([`Expression`](../interfaces/Expression.md)\<`any`\> \| [`OrderedColumnName`](../types/OrderedColumnName.md)\<`CL`\>)[]

#### Returns

`CreateIndexBuilder`\<`C` \| [`ExtractColumnNameFromOrderedColumnName`](../types/ExtractColumnNameFromOrderedColumnName.md)\<`CL`\>\>

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/create-index-builder.ts:336](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L336)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/create-index-builder.ts:343](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L343)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ~~expression()~~

> **expression**(`expression`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:216](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L216)

Adds an arbitrary expression as a column to the index.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .createIndex('person_first_name_index')
  .on('person')
  .expression(sql`first_name COLLATE "fi_FI"`)
  .column('gender')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
create index "person_first_name_index"
on "person" (first_name COLLATE "fi_FI", "gender")
```

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`CreateIndexBuilder`\<`C`\>

#### Deprecated

Use [column](#column) or [columns](#columns) with an [Expression](../interfaces/Expression.md) instead.

***

### ifNotExists()

> **ifNotExists**(): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:43](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L43)

Adds the "if not exists" modifier.

If the index already exists, no error is thrown if this method has been called.

#### Returns

`CreateIndexBuilder`\<`C`\>

***

### nullsNotDistinct()

> **nullsNotDistinct**(): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:86](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L86)

Adds `nulls not distinct` specifier to index.
This only works on some dialects like PostgreSQL.

### Examples

```ts
db.schema.createIndex('person_first_name_index')
 .on('person')
 .column('first_name')
 .nullsNotDistinct()
 .execute()
```

The generated SQL (PostgreSQL):

```sql
create index "person_first_name_index"
on "test" ("first_name")
nulls not distinct;
```

#### Returns

`CreateIndexBuilder`\<`C`\>

***

### on()

> **on**(`table`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:98](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L98)

Specifies the table for the index.

#### Parameters

##### table

`string`

#### Returns

`CreateIndexBuilder`\<`C`\>

***

### toOperationNode()

> **toOperationNode**(): [`CreateIndexNode`](../interfaces/CreateIndexNode.md)

Defined in: [schema/create-index-builder.ts:329](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L329)

#### Returns

[`CreateIndexNode`](../interfaces/CreateIndexNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### unique()

> **unique**(): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:55](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L55)

Makes the index unique.

#### Returns

`CreateIndexBuilder`\<`C`\>

***

### using()

#### Call Signature

> **using**(`indexType`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:245](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L245)

Specifies the index type.

### Examples

```ts
await db.schema
  .createIndex('person_first_name_index')
  .on('person')
  .column('first_name')
  .using('hash')
  .execute()
```

The generated SQL (MySQL):

```sql
create index `person_first_name_index` on `person` (`first_name`) using hash
```

##### Parameters

###### indexType

[`IndexType`](../types/IndexType.md)

##### Returns

`CreateIndexBuilder`\<`C`\>

#### Call Signature

> **using**(`indexType`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:246](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L246)

Specifies the index type.

### Examples

```ts
await db.schema
  .createIndex('person_first_name_index')
  .on('person')
  .column('first_name')
  .using('hash')
  .execute()
```

The generated SQL (MySQL):

```sql
create index `person_first_name_index` on `person` (`first_name`) using hash
```

##### Parameters

###### indexType

`string`

##### Returns

`CreateIndexBuilder`\<`C`\>

***

### where()

#### Call Signature

> **where**(`lhs`, `op`, `rhs`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:289](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L289)

Adds a where clause to the query. This Effectively turns the index partial.

This is only supported by some dialects like PostgreSQL and MS SQL Server.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
   .createIndex('orders_unbilled_index')
   .on('orders')
   .column('order_nr')
   .where(sql.ref('billed'), 'is not', true)
   .where('order_nr', 'like', '123%')
```

The generated SQL (PostgreSQL):

```sql
create index "orders_unbilled_index" on "orders" ("order_nr") where "billed" is not true and "order_nr" like '123%'
```

Column names specified in [column](#column) or [columns](#columns) are known at compile-time
and can be referred to in the current query and context.

Sometimes you may want to refer to columns that exist in the table but are not
part of the current index. In that case you can refer to them using [sql](../variables/sql.md)
expressions.

Parameters are always sent as literals due to database restrictions.

##### Parameters

###### lhs

[`Expression`](../interfaces/Expression.md)\<`any`\> \| `C`

###### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

###### rhs

`unknown`

##### Returns

`CreateIndexBuilder`\<`C`\>

#### Call Signature

> **where**(`factory`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:295](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L295)

Adds a where clause to the query. This Effectively turns the index partial.

This is only supported by some dialects like PostgreSQL and MS SQL Server.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
   .createIndex('orders_unbilled_index')
   .on('orders')
   .column('order_nr')
   .where(sql.ref('billed'), 'is not', true)
   .where('order_nr', 'like', '123%')
```

The generated SQL (PostgreSQL):

```sql
create index "orders_unbilled_index" on "orders" ("order_nr") where "billed" is not true and "order_nr" like '123%'
```

Column names specified in [column](#column) or [columns](#columns) are known at compile-time
and can be referred to in the current query and context.

Sometimes you may want to refer to columns that exist in the table but are not
part of the current index. In that case you can refer to them using [sql](../variables/sql.md)
expressions.

Parameters are always sent as literals due to database restrictions.

##### Parameters

###### factory

(`qb`) => [`Expression`](../interfaces/Expression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Returns

`CreateIndexBuilder`\<`C`\>

#### Call Signature

> **where**(`expression`): `CreateIndexBuilder`\<`C`\>

Defined in: [schema/create-index-builder.ts:304](https://github.com/kysely-org/kysely/blob/master/src/schema/create-index-builder.ts#L304)

Adds a where clause to the query. This Effectively turns the index partial.

This is only supported by some dialects like PostgreSQL and MS SQL Server.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
   .createIndex('orders_unbilled_index')
   .on('orders')
   .column('order_nr')
   .where(sql.ref('billed'), 'is not', true)
   .where('order_nr', 'like', '123%')
```

The generated SQL (PostgreSQL):

```sql
create index "orders_unbilled_index" on "orders" ("order_nr") where "billed" is not true and "order_nr" like '123%'
```

Column names specified in [column](#column) or [columns](#columns) are known at compile-time
and can be referred to in the current query and context.

Sometimes you may want to refer to columns that exist in the table but are not
part of the current index. In that case you can refer to them using [sql](../variables/sql.md)
expressions.

Parameters are always sent as literals due to database restrictions.

##### Parameters

###### expression

[`Expression`](../interfaces/Expression.md)\<[`SqlBool`](../types/SqlBool.md)\>

##### Returns

`CreateIndexBuilder`\<`C`\>
