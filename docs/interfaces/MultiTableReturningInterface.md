[**kysely**](../index.md)

***

[kysely](../modules.md) / MultiTableReturningInterface

# Interface: MultiTableReturningInterface\<DB, TB, O\>

Defined in: [query-builder/returning-interface.ts:89](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L89)

## Hierarchy

[View Summary](../hierarchy.md)

### Extends

- [`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, `O`\>

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

> **returning**\<`SE`\>(`selections`): [`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/returning-interface.ts:68](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L68)

Allows you to return data from modified rows.

On supported databases like PostgreSQL, this method can be chained to
`insert`, `update`, `delete` and `merge` queries to return data.

Also see the [returningAll](ReturningInterface.md#returningall) method.

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

[`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Inherited from

[`ReturningInterface`](ReturningInterface.md).[`returning`](ReturningInterface.md#returning)

#### Call Signature

> **returning**\<`CB`\>(`callback`): [`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

Defined in: [query-builder/returning-interface.ts:72](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L72)

##### Type Parameters

###### CB

`CB` *extends* [`SelectCallback`](../types/SelectCallback.md)\<`DB`, `TB`\>

##### Parameters

###### callback

`CB`

##### Returns

[`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningCallbackRow`](../types/ReturningCallbackRow.md)\<`DB`, `TB`, `O`, `CB`\>\>

##### Inherited from

[`ReturningInterface`](ReturningInterface.md).[`returning`](ReturningInterface.md#returning)

#### Call Signature

> **returning**\<`SE`\>(`selection`): [`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

Defined in: [query-builder/returning-interface.ts:76](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L76)

##### Type Parameters

###### SE

`SE` *extends* `string` \| [`AliasedExpression`](AliasedExpression.md)\<`any`, `any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`AliasedExpressionFactory`](../types/AliasedExpressionFactory.md)\<`DB`, `TB`\>

##### Parameters

###### selection

`SE`

##### Returns

[`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`ReturningRow`](../types/ReturningRow.md)\<`DB`, `TB`, `O`, `SE`\>\>

##### Inherited from

[`ReturningInterface`](ReturningInterface.md).[`returning`](ReturningInterface.md#returning)

***

### returningAll()

#### Call Signature

> **returningAll**\<`T`\>(`tables`): `MultiTableReturningInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/returning-interface.ts:100](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L100)

Adds a `returning *` or `returning table.*` to an insert/update/delete/merge
query on databases that support `returning` such as PostgreSQL.

Also see the [returning](#returning) method.

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### tables

readonly `T`[]

##### Returns

`MultiTableReturningInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Overrides

[`ReturningInterface`](ReturningInterface.md).[`returningAll`](ReturningInterface.md#returningall)

#### Call Signature

> **returningAll**\<`T`\>(`table`): `MultiTableReturningInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

Defined in: [query-builder/returning-interface.ts:104](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L104)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](ReturningInterface.md#returning) method.

##### Type Parameters

###### T

`T` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### table

`T`

##### Returns

`MultiTableReturningInterface`\<`DB`, `TB`, [`ReturningAllRow`](../types/ReturningAllRow.md)\<`DB`, `T`, `O`\>\>

##### Overrides

`ReturningInterface.returningAll`

#### Call Signature

> **returningAll**(): [`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>

Defined in: [query-builder/returning-interface.ts:108](https://github.com/kysely-org/kysely/blob/master/src/query-builder/returning-interface.ts#L108)

Adds a `returning *` to an insert/update/delete/merge query on databases
that support `returning` such as PostgreSQL.

Also see the [returning](ReturningInterface.md#returning) method.

##### Returns

[`ReturningInterface`](ReturningInterface.md)\<`DB`, `TB`, [`Selectable`](../types/Selectable.md)\<`DB`\[`TB`\]\>\>

##### Overrides

`ReturningInterface.returningAll`
