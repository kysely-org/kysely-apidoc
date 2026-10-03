[**kysely**](../index.md)

***

[kysely](../modules.md) / AnyColumn

# Type Alias: AnyColumn\<DB, TB\>

> **AnyColumn**\<`DB`, `TB`\> = `{ [T in TB]: keyof DB[T] }`\[`TB`\] & `string`

Defined in: [util/type-utils.ts:38](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L38)

Given a database type and a union of table names in that db, returns
a union type with all possible column names.

Example:

```ts
interface Person {
  id: number
}

interface Pet {
  name: string
  species: 'cat' | 'dog'
}

interface Movie {
  stars: number
}

interface Database {
  person: Person
  pet: Pet
  movie: Movie
}

type Columns = AnyColumn<Database, 'person' | 'pet'>

// Columns == 'id' | 'name' | 'species'
```

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
