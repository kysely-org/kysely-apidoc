[**kysely**](../index.md)

***

[kysely](../modules.md) / InferResult

# Type Alias: InferResult\<C\>

> **InferResult**\<`C`\> = `C` *extends* [`Compilable`](../interfaces/Compilable.md)\<infer O\> ? [`ResolveResult`](ResolveResult.md)\<`O`\> : `C` *extends* [`CompiledQuery`](../interfaces/CompiledQuery.md)\<infer O\> ? [`ResolveResult`](ResolveResult.md)\<`O`\> : `never`

Defined in: [util/infer-result.ts:47](https://github.com/kysely-org/kysely/blob/master/src/util/infer-result.ts#L47)

A helper type that allows inferring a select/insert/update/delete query's result
type from a query builder or compiled query.

### Examples

Infer a query builder's result type:

```ts
import { InferResult } from 'kysely'

const query = db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(['person.first_name', 'pet.name'])

type QueryResult = InferResult<typeof query> // { first_name: string; name: string; }[]
```

Infer a compiled query's result type:

```ts
import { InferResult } from 'kysely'

const compiledQuery = db
  .insertInto('person')
  .values({
    first_name: 'Foo',
    last_name: 'Barson',
    gender: 'other',
    age: 15,
  })
  .returningAll()
  .compile()

type QueryResult = InferResult<typeof compiledQuery> // Selectable<Person>[]
```

## Type Parameters

### C

`C` *extends* [`Compilable`](../interfaces/Compilable.md)\<`any`\> \| [`CompiledQuery`](../interfaces/CompiledQuery.md)\<`any`\>
