[**kysely**](../index.md)

***

[kysely](../modules.md) / OverBuilder

# Class: OverBuilder\<DB, TB\>

Defined in: [query-builder/over-builder.ts:19](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L19)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

## Implements

- [`OrderByInterface`](../interfaces/OrderByInterface.md)\<`DB`, `TB`, \{ \}\>
- [`OperationNodeSource`](../interfaces/OperationNodeSource.md)

## Constructors

### Constructor

> **new OverBuilder**\<`DB`, `TB`\>(`props`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:24](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L24)

#### Parameters

##### props

[`OverBuilderProps`](../interfaces/OverBuilderProps.md)

#### Returns

`OverBuilder`\<`DB`, `TB`\>

## Methods

### $call()

> **$call**\<`T`\>(`func`): `T`

Defined in: [query-builder/over-builder.ts:138](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L138)

Simply calls the provided function passing `this` as the only argument. `$call` returns
what the provided function returns.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

(`qb`) => `T`

#### Returns

`T`

***

### clearOrderBy()

> **clearOrderBy**(): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:90](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L90)

Clears the `order by` clause from the query.

See [orderBy](../interfaces/OrderByInterface.md#orderby) for adding an `order by` clause or item to a query.

### Examples

```ts
const query = db
  .selectFrom('person')
  .selectAll()
  .orderBy('id', 'desc')

const results = await query
  .clearOrderBy()
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select * from "person"
```

#### Returns

`OverBuilder`\<`DB`, `TB`\>

#### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`clearOrderBy`](../interfaces/OrderByInterface.md#clearorderby)

***

### orderBy()

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers?`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:49](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L49)

Adds an `order by` clause or item inside the `over` function.

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.avg<number>('age').over(
      ob => ob.orderBy('first_name', 'asc').orderBy('last_name', 'asc')
    ).as('average_age')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("age") over(order by "first_name" asc, "last_name" asc) as "average_age"
from "person"
```

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers?

[`OrderByModifiers`](../types/OrderByModifiers.md)

##### Returns

`OverBuilder`\<`DB`, `TB`\>

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`exprs`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:58](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L58)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### exprs

readonly `OE`[]

##### Returns

`OverBuilder`\<`DB`, `TB`\>

##### Deprecated

It does ~2-2.6x more compile-time instantiations compared to multiple chained `orderBy(expr, modifiers?)` calls (in `order by` clauses with reasonable item counts), and has broken autocompletion.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:68](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L68)

##### Type Parameters

###### OE

`OE` *extends* `` `${string} desc` `` \| `` `${string} asc` `` \| `` `${string}.${string} desc` `` \| `` `${string}.${string} asc` ``

##### Parameters

###### expr

`OE`

##### Returns

`OverBuilder`\<`DB`, `TB`\>

##### Deprecated

It does ~2.9x more compile-time instantiations compared to a `orderBy(expr, direction)` call.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

#### Call Signature

> **orderBy**\<`OE`\>(`expr`, `modifiers`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:76](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L76)

##### Type Parameters

###### OE

`OE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### expr

`OE`

###### modifiers

[`Expression`](../interfaces/Expression.md)\<`any`\>

##### Returns

`OverBuilder`\<`DB`, `TB`\>

##### Deprecated

Use `orderBy(expr, (ob) => ...)` instead.

##### Implementation of

[`OrderByInterface`](../interfaces/OrderByInterface.md).[`orderBy`](../interfaces/OrderByInterface.md#orderby)

***

### partitionBy()

#### Call Signature

> **partitionBy**(`partitionBy`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:117](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L117)

Adds partition by clause item/s inside the over function.

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.avg<number>('age').over(
      ob => ob.partitionBy(['last_name', 'first_name'])
    ).as('average_age')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("age") over(partition by "last_name", "first_name") as "average_age"
from "person"
```

##### Parameters

###### partitionBy

readonly [`PartitionByExpression`](../types/PartitionByExpression.md)\<`DB`, `TB`\>[]

##### Returns

`OverBuilder`\<`DB`, `TB`\>

#### Call Signature

> **partitionBy**\<`PE`\>(`partitionBy`): `OverBuilder`\<`DB`, `TB`\>

Defined in: [query-builder/over-builder.ts:121](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L121)

Adds partition by clause item/s inside the over function.

```ts
const result = await db
  .selectFrom('person')
  .select(
    (eb) => eb.fn.avg<number>('age').over(
      ob => ob.partitionBy(['last_name', 'first_name'])
    ).as('average_age')
  )
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("age") over(partition by "last_name", "first_name") as "average_age"
from "person"
```

##### Type Parameters

###### PE

`PE` *extends* `string` \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\>

##### Parameters

###### partitionBy

`PE`

##### Returns

`OverBuilder`\<`DB`, `TB`\>

***

### toOperationNode()

> **toOperationNode**(): [`OverNode`](../interfaces/OverNode.md)

Defined in: [query-builder/over-builder.ts:142](https://github.com/kysely-org/kysely/blob/master/src/query-builder/over-builder.ts#L142)

#### Returns

[`OverNode`](../interfaces/OverNode.md)

#### Implementation of

[`OperationNodeSource`](../interfaces/OperationNodeSource.md).[`toOperationNode`](../interfaces/OperationNodeSource.md#tooperationnode)
