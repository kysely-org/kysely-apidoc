[**kysely**](../index.md)

***

[kysely](../modules.md) / ReturningInterface

# Interface: ReturningInterface\<DB, TB, O\>

Defined in: [query-builder/returning-interface.ts:12](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L12)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`MultiTableReturningInterface`](MultiTableReturningInterface.md)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Methods

### returning()

#### Call Signature

> **returning**\<`SE`\>(`selections`): `ReturningInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/returning-interface.ts:68](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L68)

Allows you to return data from modified rows.

On supported databases like PostgreSQL, this method can be chained to
`insert`, `update`, `delete` and `merge` queries to return data.

Also see the [returningAll](#returningall) method.

### Examples

Return one column:

```ts
const { id } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning('id')
  .executeTakeFirstOrThrow()
```

Return multiple columns:

```ts
const { id, last_name } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning(['id', 'last_name'])
  .executeTakeFirstOrThrow()
```

Return arbitrary expressions:

```ts
import { sql } from 'kysely'

const { id, full_name, first_pet_id } = await db
  .insertInto('person')
  .values({
    first_name: 'Jennifer',
    last_name: 'Aniston'
  })
  .returning((eb) => [
    'id as id',
    sql<string>`concat(first_name, ' ', last_name)`.as('full_name'),
    eb.selectFrom('pet').select('pet.id').limit(1).as('first_pet_id')
  ])
  .executeTakeFirstOrThrow()
```

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selections

readonly `SE`[]

##### Returns

`ReturningInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

#### Call Signature

> **returning**\<`CB`\>(`callback`): `ReturningInterface`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

Defined in: [query-builder/returning-interface.ts:72](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L72)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

`ReturningInterface`\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

#### Call Signature

> **returning**\<`SE`\>(`selection`): `ReturningInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/returning-interface.ts:76](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L76)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

`ReturningInterface`\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

***

### returningAll()

> **returningAll**(): `ReturningInterface`\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>

Defined in: [query-builder/returning-interface.ts:86](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L86)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](#returning) method.

#### Returns

`ReturningInterface`\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>
