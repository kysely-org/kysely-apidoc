[**kysely**](../index.md)

***

[kysely](../modules.md) / AnyColumnWithTable

# Type Alias: AnyColumnWithTable\<DB, TB\>

> **AnyColumnWithTable**\<`DB`, `TB`\> = `` { [T in TB]: `${T & string}.${keyof DB[T] & string}` } ``\[`TB`\]

Defined in: [util/type-utils.ts:81](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L81)

Given a database type and a union of table names in that db, returns
a union type with all possible `table`.`column` combinations.

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

type Columns = AnyColumnWithTable<Database, 'person' | 'pet'>

// Columns == 'person.id' | 'pet.name' | 'pet.species'
```

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`
