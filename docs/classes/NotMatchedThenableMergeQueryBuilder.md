[**kysely**](../index.md)

***

[kysely](../modules.md) / NotMatchedThenableMergeQueryBuilder

# Class: NotMatchedThenableMergeQueryBuilder\<DB, TT, ST, O\>

Defined in: [query-builder/merge-query-builder.ts:1133](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1133)

## Type Parameters

### DB

`DB`

### TT

`TT` *extends* keyof `DB`

### ST

`ST` *extends* keyof `DB`

### O

`O`

## Constructors

### Constructor

> **new NotMatchedThenableMergeQueryBuilder**\<`DB`, `TT`, `ST`, `O`\>(`props`): `NotMatchedThenableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1141](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1141)

#### Parameters

##### props

[`MergeQueryBuilderProps`](../interfaces/MergeQueryBuilderProps.md)

#### Returns

`NotMatchedThenableMergeQueryBuilder`\<`DB`, `TT`, `ST`, `O`\>

## Methods

### thenDoNothing()

> **thenDoNothing**(): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1171](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1171)

Performs the `do nothing` action.

This is supported in PostgreSQL.

To perform the `insert` action, see [thenInsertValues](#theninsertvalues).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatched()
  .thenDoNothing()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched then
  do nothing
```

#### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

***

### thenInsertValues()

#### Call Signature

> **thenInsertValues**\<`I`\>(`insert`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1211](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1211)

Performs the `insert (...) values` action.

This method is similar to [InsertQueryBuilder.values](InsertQueryBuilder.md#values), so see the documentation
for that method for more examples.

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatched()
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
  })
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched then
  insert ("first_name", "last_name") values ($1, $2)
```

##### Type Parameters

###### I

`I` *extends* [`InsertObjectOrList`](../types/InsertObjectOrList.md)\<`DB`, `TT`\>

##### Parameters

###### insert

`I`

##### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

#### Call Signature

> **thenInsertValues**\<`IO`\>(`insert`): [`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>

Defined in: [query-builder/merge-query-builder.ts:1215](https://github.com/kysely-org/kysely/blob/master/src/query-builder/merge-query-builder.ts#L1215)

Performs the `insert (...) values` action.

This method is similar to [InsertQueryBuilder.values](InsertQueryBuilder.md#values), so see the documentation
for that method for more examples.

To perform the `do nothing` action, see [thenDoNothing](#thendonothing).

### Examples

```ts
const result = await db.mergeInto('person')
  .using('pet', 'person.id', 'pet.owner_id')
  .whenNotMatched()
  .thenInsertValues({
    first_name: 'John',
    last_name: 'Doe',
  })
  .execute()
```

The generated SQL (PostgreSQL):

```sql
merge into "person"
using "pet" on "person"."id" = "pet"."owner_id"
when not matched then
  insert ("first_name", "last_name") values ($1, $2)
```

##### Type Parameters

###### IO

`IO` *extends* [`InsertObjectOrListFactory`](../types/InsertObjectOrListFactory.md)\<`DB`, `TT`, `ST`\>

##### Parameters

###### insert

`IO`

##### Returns

[`WheneableMergeQueryBuilder`](WheneableMergeQueryBuilder.md)\<`DB`, `TT`, `ST`, `O`\>
