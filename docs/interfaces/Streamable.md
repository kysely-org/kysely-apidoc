[**kysely**](../index.md)

***

[kysely](../modules.md) / Streamable

# Interface: Streamable\<O\>

Defined in: [util/streamable.ts:3](https://github.com/kysely-org/kysely/blob/master/src/util/streamable.ts#L3)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`SelectQueryBuilder`](SelectQueryBuilder.md)

## Type Parameters

### O

`O`

## Methods

### stream()

> **stream**(`chunkSizeOrOptions?`): `AsyncIterableIterator`\<`O`\>

Defined in: [util/streamable.ts:30](https://github.com/kysely-org/kysely/blob/master/src/util/streamable.ts#L30)

Executes the query and streams the rows.

The optional argument `chunkSize` defines how many rows to fetch from the database
at a time. It only affects some dialects like PostgreSQL that support it.

### Examples

```ts
const stream = db
  .selectFrom('person')
  .select(['first_name', 'last_name'])
  .where('gender', '=', 'other')
  .stream()

for await (const person of stream) {
  console.log(person.first_name)

  if (person.last_name === 'Something') {
    // Breaking or returning before the stream has ended will release
    // the database connection and invalidate the stream.
    break
  }
}
```

#### Parameters

##### chunkSizeOrOptions?

`number` \| [`StreamOptions`](StreamOptions.md)

#### Returns

`AsyncIterableIterator`\<`O`\>
