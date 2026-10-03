[**kysely**](../index.md)

***

[kysely](../modules.md) / JSONPathBuilder

# Class: JSONPathBuilder\<S, O\>

Defined in: [query-builder/json-path-builder.ts:21](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L21)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)

## Type Parameters

### S

`S`

### O

`O` = `S`

## Constructors

### Constructor

> **new JSONPathBuilder**\<`S`, `O`\>(`node`): `JSONPathBuilder`\<`S`, `O`\>

Defined in: [query-builder/json-path-builder.ts:24](https://github.com/kysely-org/kysely/blob/master/src/query-builder/json-path-builder.ts#L24)

#### Parameters

##### node

[`JSONPathNode`](../interfaces/JSONPathNode.md) \| [`JSONReferenceNode`](../interfaces/JSONReferenceNode.md)

#### Returns

`JSONPathBuilder`\<`S`, `O`\>

## Methods

### at()

> **at**\<`I`, `O2`\>(`index`): [`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)\<`S`, `O2`\>

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

[`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)\<`S`, `O2`\>

***

### key()

> **key**\<`K`, `O2`\>(`key`): [`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)\<`S`, `O2`\>

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

`O2` = `undefined` *extends* `O` ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `null` : `null` *extends* `O` ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `null` : `string` *extends* keyof `NonNullable`\<`O`\> ? `NonNullable`\<`NonNullable`\<`O`\>\[`K`\]\> \| `null` : `NonNullable`\<`O`\>\[`K`\]

#### Parameters

##### key

`K`

#### Returns

[`TraversedJSONPathBuilder`](TraversedJSONPathBuilder.md)\<`S`, `O2`\>
