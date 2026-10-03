[**kysely**](../index.md)

***

[kysely](../modules.md) / AlterTableAddIndexBuilder

# Class: AlterTableAddIndexBuilder

Defined in: [schema/alter-table-add-index-builder.ts:18](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L18)

## Implements

- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)
- [`Compilable`](../interfaces/Compilable.md)

## Constructors

### Constructor

> **new AlterTableAddIndexBuilder**(`props`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:23](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L23)

#### Parameters

##### props

[`AlterTableAddIndexBuilderProps`](../interfaces/AlterTableAddIndexBuilderProps.md)

#### Returns

`AlterTableAddIndexBuilder`

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [schema/alter-table-add-index-builder.ts:225](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L225)

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

> **column**\<`CL`\>(`column`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:89](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L89)

Adds a column to the index.

Also see [columns](#columns) for adding multiple columns at once or [expression](#expression)
for specifying an arbitrary expression.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .alterTable('person')
  .addIndex('person_first_name_and_age_index')
  .column('first_name')
  .column(sql`(left(lower(last_name), 1))`)
  .column('age desc')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person`
add index `person_first_name_and_age_index` (
  `first_name`,
  (left(lower(last_name), 1)),
  `age` desc
)
```

##### Type Parameters

###### CL

`CL` *extends* `string`

##### Parameters

###### column

[`OrderedColumnName`](../types/OrderedColumnName.md)\<`CL`\>

##### Returns

`AlterTableAddIndexBuilder`

#### Call Signature

> **column**(`expression`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:93](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L93)

Adds a column to the index.

Also see [columns](#columns) for adding multiple columns at once or [expression](#expression)
for specifying an arbitrary expression.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .alterTable('person')
  .addIndex('person_first_name_and_age_index')
  .column('first_name')
  .column(sql`(left(lower(last_name), 1))`)
  .column('age desc')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person`
add index `person_first_name_and_age_index` (
  `first_name`,
  (left(lower(last_name), 1)),
  `age` desc
)
```

##### Parameters

###### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`AlterTableAddIndexBuilder`

***

### columns()

> **columns**\<`CL`\>(`columns`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:135](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L135)

Specifies a list of columns for the index.

Also see [column](#column) for adding a single column or [expression](#expression) for
specifying an arbitrary expression.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .alterTable('person')
  .addIndex('person_first_name_and_age_index')
  .columns(['first_name', sql`(left(lower(last_name), 1))`, 'age desc'])
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person`
add index `person_first_name_and_age_index` (
  `first_name`,
  (left(lower(last_name), 1)),
  `age` desc
)
```

#### Type Parameters

##### CL

`CL` *extends* `string`

#### Parameters

##### columns

([`Expression`](../interfaces/Expression.md)\<`any`\> \| [`OrderedColumnName`](../types/OrderedColumnName.md)\<`CL`\>)[]

#### Returns

`AlterTableAddIndexBuilder`

***

### compile()

> **compile**(): [`CompiledQuery`](../interfaces/CompiledQuery.md)

Defined in: [schema/alter-table-add-index-builder.ts:236](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L236)

#### Returns

[`CompiledQuery`](../interfaces/CompiledQuery.md)

#### Implementation of

[`Compilable`](../interfaces/Compilable.md).[`compile`](../interfaces/Compilable.md#compile)

***

### execute()

> **execute**(`options?`): `Promise`\<`void`\>

Defined in: [schema/alter-table-add-index-builder.ts:243](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L243)

#### Parameters

##### options?

[`AbortableQueryOptions`](../interfaces/AbortableQueryOptions.md)

#### Returns

`Promise`\<`void`\>

***

### ~~expression()~~

> **expression**(`expression`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:177](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L177)

Specifies an arbitrary expression for the index.

### Examples

```ts
import { sql } from 'kysely'

await db.schema
  .alterTable('person')
  .addIndex('person_first_name_index')
  .expression(sql<boolean>`(first_name < 'Sami')`)
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` add index `person_first_name_index` ((first_name < 'Sami'))
```

#### Parameters

##### expression

[`Expression`](../interfaces/Expression.md)\<`any`\>

#### Returns

`AlterTableAddIndexBuilder`

#### Deprecated

Use [column](#column) or [columns](#columns) with an [Expression](../interfaces/Expression.md) instead.

***

### toOperationNode()

> **toOperationNode**(): [`AlterTableNode`](../interfaces/AlterTableNode.md)

Defined in: [schema/alter-table-add-index-builder.ts:229](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L229)

#### Returns

[`AlterTableNode`](../interfaces/AlterTableNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)

***

### unique()

> **unique**(): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:47](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L47)

Makes the index unique.

### Examples

```ts
await db.schema
  .alterTable('person')
  .addIndex('person_first_name_index')
  .unique()
  .column('email')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` add unique index `person_first_name_index` (`email`)
```

#### Returns

`AlterTableAddIndexBuilder`

***

### using()

#### Call Signature

> **using**(`indexType`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:208](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L208)

Specifies the index type.

### Examples

```ts
await db.schema
  .alterTable('person')
  .addIndex('person_first_name_index')
  .column('first_name')
  .using('hash')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` add index `person_first_name_index` (`first_name`) using hash
```

##### Parameters

###### indexType

[`IndexType`](../types/IndexType.md)

##### Returns

`AlterTableAddIndexBuilder`

#### Call Signature

> **using**(`indexType`): `AlterTableAddIndexBuilder`

Defined in: [schema/alter-table-add-index-builder.ts:209](https://github.com/kysely-org/kysely/blob/master/src/schema/alter-table-add-index-builder.ts#L209)

Specifies the index type.

### Examples

```ts
await db.schema
  .alterTable('person')
  .addIndex('person_first_name_index')
  .column('first_name')
  .using('hash')
  .execute()
```

The generated SQL (MySQL):

```sql
alter table `person` add index `person_first_name_index` (`first_name`) using hash
```

##### Parameters

###### indexType

`string`

##### Returns

`AlterTableAddIndexBuilder`
