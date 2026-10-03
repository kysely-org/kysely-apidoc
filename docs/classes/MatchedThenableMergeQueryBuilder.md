[**kysely**](../index.md)

***

[kysely](../modules.md) / MatchedThenableMergeQueryBuilder

# Class: MatchedThenableMergeQueryBuilder\<DB, TT, ST, UT, O\>

Defined in: [query-builder/merge-query-builder.ts:937](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L937)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### ST

`ST` *extends* keyof `DB`

### UT

`UT` *extends* `TT` \| `ST`

### O

`O`

## Constructors

### Constructor

> **new MatchedThenableMergeQueryBuilder**\<`DB`, `TT`, `ST`, `UT`, `O`\>(`props`): `MatchedThenableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `UT`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:946](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L946)

#### Parameters

##### props

[`MergeQueryBuilderProps`](../interfaces/MergeQueryBuilderProps.md)

#### Returns

`MatchedThenableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `UT`, `O`\>

## Methods

### thenDelete()

> **thenDelete**(): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:976](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L976)

Performs the `delete` action.

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

To perform the `update` action, see [thenUpdate](#thenupdate) or [thenUpdateSet](#thenupdateset).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDelete()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  delete
```

#### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### thenDoNothing()

> **thenDoNothing**(): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1014](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1014)

Performs the `do nothing` action.

This is supported in PostgreSQL.

To perform the `delete` action, see [thenDelete](#thendelete).

To perform the `update` action, see [thenUpdate](#thenupdate) or [thenUpdateSet](#thenupdateset).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenDoNothing()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  do nothing
```

#### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### thenUpdate()

> **thenUpdate**\<`QB`\>(`set`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1060](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1060)

Perform an `update` operation with a full-fledged [UpdateQueryBuilder](UpdateQueryBuilder.md).
This is handy when multiple `set` invocations are needed.

For a shorthand version of this method, see [thenUpdateSet](#thenupdateset).

To perform the `delete` action, see [thenDelete](#thendelete).

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
import { sql } from 'kysely'

const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenUpdate((ub) => ub
    .set(sql`metadata['has_pets']`, 'Y')
    .set({
      updated_at: new Date().toISOString(),
    })
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  update set metadata['has_pets'] = $1, "updated_at" = $2
```

#### Type Parameters

##### QB

`QB` *extends* [`UpdateQueryBuilder`](UpdateQueryBuilder.md)\<`DB`, `TT`, `UT`, `never`\>

#### Parameters

##### set

(`ub`) => `QB`

#### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### thenUpdateSet()

#### Call Signature

> **thenUpdateSet**\<`UO`\>(`update`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1110](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1110)

Performs an `update set` action, similar to [UpdateQueryBuilder.set](UpdateQueryBuilder.md#set).

For a full-fledged update query builder, see [thenUpdate](#thenupdate).

To perform the `delete` action, see [thenDelete](#thendelete).

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenUpdateSet({
    middle_name: 'dog owner',
  })
  .execute()
```

The generate SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  update set "middle_name" = $1
```

##### Type Parameters

###### UO

`UO` *extends* \{ \[C in string\]?: \{ \[T in string \| number \| symbol\]: C extends keyof DB\[T\] ? ValueExpression\<DB, UT, UpdateType\<DB\[T\]\[C\]\>\> \| undefined : never \}\[TT\] \}

##### Parameters

###### update

`UO`

##### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

#### Call Signature

> **thenUpdateSet**\<`U`\>(`update`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1114](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1114)

Performs an `update set` action, similar to [UpdateQueryBuilder.set](UpdateQueryBuilder.md#set).

For a full-fledged update query builder, see [thenUpdate](#thenupdate).

To perform the `delete` action, see [thenDelete](#thendelete).

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenUpdateSet({
    middle_name: 'dog owner',
  })
  .execute()
```

The generate SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  update set "middle_name" = $1
```

##### Type Parameters

###### U

`U` *extends* [`UpdateObjectFactory`](../types/UpdateObjectFactory.md)\<`DB`, `UT`, `TT`\>

##### Parameters

###### update

`U`

##### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

#### Call Signature

> **thenUpdateSet**\<`RE`, `VE`\>(`key`, `value`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1118](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1118)

Performs an `update set` action, similar to [UpdateQueryBuilder.set](UpdateQueryBuilder.md#set).

For a full-fledged update query builder, see [thenUpdate](#thenupdate).

To perform the `delete` action, see [thenDelete](#thendelete).

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenMatched()
  .thenUpdateSet({
    middle_name: 'dog owner',
  })
  .execute()
```

The generate SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when matched then
  update set "middle_name" = $1
```

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TT`, `any`\>

###### VE

`VE` *extends* `any`

##### Parameters

###### key

`RE`

###### value

`VE`

##### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>
