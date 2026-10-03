[**kysely**](../index.md)

***

[kysely](../modules.md) / TraversedJSONPathBuilder

# Class: TraversedJSONPathBuilder\<S, O\>

Defined in: [query-builder/json-path-builder.ts:211](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L211)

An expression with an `as` method.

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`JSONPathBuilder`](JSONPathBuilder.md)\<`S`, `O`\>

## Type Parameters

### S

`S`

### O

`O`

## Implements

- [`AliasableExpression`](../interfaces/AliasableExpression.md)\<`O`\>

## Constructors

### Constructor

> **new TraversedJSONPathBuilder**\<`S`, `O`\>(`node`): `TraversedJSONPathBuilder`\<`S`, `O`\>

Defined in: [query-builder/json-path-builder.ts:217](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L217)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md) \| [`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Returns

`TraversedJSONPathBuilder`\<`S`, `O`\>

#### Overrides

[`JSONPathBuilder`](JSONPathBuilder.md).[`constructor`](JSONPathBuilder.md#constructor)

## Methods

### $castTo()

> **$castTo**\<`O2`\>(): `TraversedJSONPathBuilder`\<`S`, `O2`\>

Defined in: [query-builder/json-path-builder.ts:264](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L264)

Change the output type of the json path.

This method call doesn't change the SQL in any way. This methods simply
returns a copy of this `JSONPathBuilder` with a new output type.

#### Type Parameters

##### O2

`O2`

#### Returns

`TraversedJSONPathBuilder`\<`S`, `O2`\>

***

### $notNull()

> **$notNull**(): `TraversedJSONPathBuilder`\<`S`, `Exclude`\<`O`, `null`\>\>

Defined in: [query-builder/json-path-builder.ts:268](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L268)

#### Returns

`TraversedJSONPathBuilder`\<`S`, `Exclude`\<`O`, `null`\>\>

***

### as()

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

Defined in: [query-builder/json-path-builder.ts:252](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L252)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer').as('is_jennifer')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer: SqlBool` field exists in the result type.
console.log(result.is_jennifer)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 as "is_jennifer"
from "person"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

`A`

##### Returns

[`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

##### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`as`](../interfaces/AliasableExpression.md#as)

#### Call Signature

> **as**\<`A`\>(`alias`): [`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

Defined in: [query-builder/json-path-builder.ts:253](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L253)

Returns an aliased version of the expression.

In addition to slapping `as "the_alias"` to the end of the SQL,
this method also provides strict typing:

```ts
const result = await db
  .selectFrom('person')
  .select(eb =>
    eb('first_name', '=', 'Jennifer').as('is_jennifer')
  )
  .executeTakeFirstOrThrow()

// `is_jennifer: SqlBool` field exists in the result type.
console.log(result.is_jennifer)
```

The generated SQL (PostgreSQL):

```sql
select "first_name" = $1 as "is_jennifer"
from "person"
```

##### Type Parameters

###### A

`A` *extends* `string`

##### Parameters

###### alias

[`Expression`](../interfaces/Expression.md)\<`unknown`\>

##### Returns

[`AliasedExpression`](../interfaces/AliasedExpression.md)\<`O`, `A`\>

##### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`as`](../interfaces/AliasableExpression.md#as)

***

### at()

> **at**\<`I`, `O2`\>(`index`): `TraversedJSONPathBuilder`\<`S`, `O2`\>

Defined in: [query-builder/json-path-builder.ts:95](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L95)

Access an element of a JSON array in a specific location.

Since there's no guarantee an element exists in the given array location, the
resulting type is always nullable. If you're sure the element exists, you
should use [SelectQueryBuilder.$assertType](../interfaces/SelectQueryBuilder.md#asserttype) to narrow the type safely.

See also [key](#key) to access properties of JSON objects.

### Examples

```ts
await db.selectFrom('person')
  .select(eb =>
    eb.ref('nicknames', '->').at(0).as('primary_nickname')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "nicknames"->0 as "primary_nickname" from "person"
```

Combined with [key](#key):

```ts
db.selectFrom('person').select(eb =>
  eb.ref('experience', '->').at(0).key('role').as('first_role')
)
```

The generated SQL (PostgreSQL):

```sql
select "experience"->0->'role' as "first_role" from "person"
```

You can use `'last'` to access the last element of the array in MySQL:

```ts
db.selectFrom('person').select(eb =>
  eb.ref('nicknames', '->$').at('last').as('last_nickname')
)
```

The generated SQL (MySQL):

```sql
select `nicknames`->'$[last]' as `last_nickname` from `person`
```

Or `'#-1'` in SQLite:

```ts
db.selectFrom('person').select(eb =>
  eb.ref('nicknames', '->>$').at('#-1').as('last_nickname')
)
```

The generated SQL (SQLite):

```sql
select "nicknames"->>'$[#-1]' as `last_nickname` from `person`
```

#### Type Parameters

##### I

`I` *extends* `number` \| `"last"` \| `` `#-${number}` ``

##### O2

`O2` = `NonNullable`\<`NonNullable`\<`O`\>\[keyof `NonNullable`\<`O`\> & `number`\]\> \| `null`

#### Parameters

##### index

`` `${I}` `` *extends* `` `${any}.${any}` `` \| `` `#--${any}` `` ? `never` : `I`

#### Returns

`TraversedJSONPathBuilder`\<`S`, `O2`\>

#### Inherited from

[`JSONPathBuilder`](JSONPathBuilder.md).[`at`](JSONPathBuilder.md#at)

***

### key()

> **key**\<`K`, `O2`\>(`key`): `TraversedJSONPathBuilder`\<`S`, `O2`\>

Defined in: [query-builder/json-path-builder.ts:163](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L163)

Access a property of a JSON object.

If a field is optional, the resulting type will be nullable.

See also [at](#at) to access elements of JSON arrays.

### Examples

```ts
db.selectFrom('person').select(eb =>
  eb.ref('address', '->').key('city').as('city')
)
```

The generated SQL (PostgreSQL):

```sql
select "address"->'city' as "city" from "person"
```

Going deeper:

```ts
db.selectFrom('person').select(eb =>
  eb.ref('profile', '->$').key('website').key('url').as('website_url')
)
```

The generated SQL (MySQL):

```sql
select `profile`->'$.website.url' as `website_url` from `person`
```

Combined with [at](#at):

```ts
db.selectFrom('person').select(eb =>
  eb.ref('profile', '->').key('addresses').at(0).key('city').as('city')
)
```

The generated SQL (PostgreSQL):

```sql
select "profile"->'addresses'->0->'city' as "city" from "person"
```

#### Type Parameters

##### K

`K` *extends* `string`

##### O2

`O2` = `undefined` *extends* `O` ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `null` : `null` *extends* `O` ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `O` & `null` : `string` *extends* keyof `NonNullable`\<`O`\> ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `null` : `NonNullable`\<`O`\>\[`K`\]

#### Parameters

##### key

`K`

#### Returns

`TraversedJSONPathBuilder`\<`S`, `O2`\>

#### Inherited from

[`JSONPathBuilder`](JSONPathBuilder.md).[`key`](JSONPathBuilder.md#key)

***

### toOperationNode()

> **toOperationNode**(): [`OperationNode`](../interfaces/OperationNode.md)

Defined in: [query-builder/json-path-builder.ts:272](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L272)

Creates the OperationNode that describes how to compile this expression into SQL.

### Examples

If you are creating a custom expression, it's often easiest to use the [sql](../variables/sql.md)
template tag to build the node:

```ts
import { type Expression, type OperationNode, sql } from 'kysely'

class SomeExpression<T> implements Expression<T> {
  get expressionType(): T | undefined {
    return undefined
  }

  toOperationNode(): OperationNode {
    return sql`some sql here`.toOperationNode()
  }
}
```

#### Returns

[`OperationNode`](../interfaces/OperationNode.md)

#### Implementation of

[`AliasableExpression`](../interfaces/AliasableExpression.md).[`toOperationNode`](../interfaces/AliasableExpression.md#tooperationnode)
