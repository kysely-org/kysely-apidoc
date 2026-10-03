[**kysely**](../index.md)

***

[kysely](../modules.md) / Explainable

# Interface: Explainable

Defined in: [util/explainable.ts:6](https://github.com/kysely-org/kysely/blob/master/src/util/explainable.ts#L6)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`SelectQueryBuilder`](SelectQueryBuilder.md)

## Methods

### explain()

> **explain**\<`O`\>(`format?`, `options?`): `Promise`\<`O`[]\>

Defined in: [util/explainable.ts:42](https://github.com/kysely-org/kysely/blob/master/src/util/explainable.ts#L42)

Executes query with `explain` statement before the main query.

```ts
const explained = await db
 .selectFrom('person')
 .where('gender', '=', 'female')
 .selectAll()
 .explain('json')
```

The generated SQL (MySQL):

```sql
explain format=json select * from `person` where `gender` = ?
```

You can also execute `explain analyze` statements.

```ts
import { sql } from 'kysely'

const explained = await db
 .selectFrom('person')
 .where('gender', '=', 'female')
 .selectAll()
 .explain('json', sql`analyze`)
```

The generated SQL (PostgreSQL):

```sql
explain (analyze, format json) select * from "person" where "gender" = $1
```

#### Type Parameters

##### O

`O` *extends* `Record`\<`string`, `any`\> = `Record`\<`string`, `any`\>

#### Parameters

##### format?

[`ExplainFormat`](../types/ExplainFormat.md)

##### options?

[`Expression`](Expression.md)\<`any`\>

#### Returns

`Promise`\<`O`[]\>
