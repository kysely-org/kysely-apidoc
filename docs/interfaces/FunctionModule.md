[**kysely**](../index.md)

***

[kysely](../modules.md) / FunctionModule

# Interface: FunctionModule()\<DB, TB\>

Defined in: [query-builder/function-module.ts:105](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L105)

Helpers for type safe SQL function calls.

You can always use the [sql](../variables/sql.md) tag to call functions and build arbitrary
expressions. This module simply has shortcuts for most common function calls.

### Examples

<!-- siteExample("select", "Function calls", 60) -->

This example shows how to create function calls. These examples also work in any
other place (`where` calls, updates, inserts etc.). The only difference is that you
leave out the alias (the `as` call) if you use these in any other place than `select`.

```ts
import { sql } from 'kysely'

const result = await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(({ fn, val, ref }) => [
    'person.id',

    // The `fn` module contains the most common
    // functions.
    fn.count<number>('pet.id').as('pet_count'),

    // You can call any function by calling `fn`
    // directly. The arguments are treated as column
    // references by default. If you want  to pass in
    // values, use the `val` function.
    fn<string>('concat', [
      val('Ms. '),
      'first_name',
      val(' '),
      'last_name'
    ]).as('full_name_with_title'),

    // You can call any aggregate function using the
    // `fn.agg` function.
    fn.agg<string[]>('array_agg', ['pet.name']).as('pet_names'),

    // And once again, you can use the `sql`
    // template tag. The template tag substitutions
    // are treated as values by default. If you want
    // to reference columns, you can use the `ref`
    // function.
    sql<string>`concat(
      ${ref('first_name')},
      ' ',
      ${ref('last_name')}
    )`.as('full_name')
  ])
  .groupBy('person.id')
  .having((eb) => eb.fn.count('pet.id'), '>', 10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "person"."id",
  count("pet"."id") as "pet_count",
  concat($1, "first_name", $2, "last_name") as "full_name_with_title",
  array_agg("pet"."name") as "pet_names",
  concat("first_name", ' ', "last_name") as "full_name"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
having count("pet"."id") > $3
```

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

> **FunctionModule**\<`O`, `RE`\>(`name`, `args?`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:139](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L139)

Creates a function call.

To create an aggregate function call, use [FunctionModule.agg](#agg).

### Examples

```ts
await db.selectFrom('person')
  .selectAll('person')
  .where(db.fn('upper', ['first_name']), '=', 'JENNIFER')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person".*
from "person"
where upper("first_name") = $1
```

If you prefer readability over type-safety, you can always use raw `sql`:

```ts
import { sql } from 'kysely'

await db.selectFrom('person')
  .selectAll('person')
  .where(sql<string>`upper(first_name)`, '=', 'JENNIFER')
  .execute()
```

## Type Parameters

### O

`O`

### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

## Parameters

### name

`string`

### args?

readonly `RE`[]

## Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

## Methods

### agg()

> **agg**\<`O`, `RE`\>(`name`, `args?`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:173](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L173)

Creates an aggregate function call.

This is a specialized version of the `fn` method, that returns an [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md)
instance. A builder that allows you to chain additional methods such as `distinct`,
`filterWhere` and `over`.

See [avg](#avg), [count](#count), [countAll](#countall), [max](#max), [min](#min), [sum](#sum)
shortcuts of common aggregate functions.

### Examples

```ts
await db.selectFrom('person')
  .select(({ fn }) => [
    fn.agg<number>('rank').over().as('rank'),
    fn.agg<string>('group_concat', ['first_name']).distinct().as('first_names')
  ])
  .execute()
```

The generated SQL (MySQL):

```sql
select rank() over() as "rank",
  group_concat(distinct "first_name") as "first_names"
from "person"
```

#### Type Parameters

##### O

`O`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### name

`string`

##### args?

readonly `RE`[]

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

***

### any()

#### Call Signature

> **any**\<`RE`\>(`expr`): `Exclude`\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>, `null`\> *extends* readonly `I`[] ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `I`\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"any(expr) call failed: expr must be an array"`\>

Defined in: [query-builder/function-module.ts:655](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L655)

Calls the `any` function for the column or expression given as the argument.

The argument must be a subquery or evaluate to an array.

### Examples

In the following example, `nicknames` is assumed to be a column of type `string[]`:

```ts
await db.selectFrom('person')
  .selectAll('person')
  .where((eb) => eb(
    eb.val('Jen'), '=', eb.fn.any('person.nicknames')
  ))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select
  "person".*
from
  "person"
where
 $1 = any("person"."nicknames")
```

##### Type Parameters

###### RE

`RE` *extends* `string`

##### Parameters

###### expr

`RE`

##### Returns

`Exclude`\<[`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>, `null`\> *extends* readonly `I`[] ? [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `I`\> : [`KyselyTypeError`](KyselyTypeError.md)\<`"any(expr) call failed: expr must be an array"`\>

#### Call Signature

> **any**\<`T`\>(`subquery`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

Defined in: [query-builder/function-module.ts:664](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L664)

##### Type Parameters

###### T

`T`

##### Parameters

###### subquery

[`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `T`\>\>

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

#### Call Signature

> **any**\<`T`\>(`expr`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

Defined in: [query-builder/function-module.ts:668](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L668)

##### Type Parameters

###### T

`T`

##### Parameters

###### expr

[`Expression`](Expression.md)\<readonly `T`[]\>

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T`\>

***

### avg()

> **avg**\<`O`, `RE`\>(`expr`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:228](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L228)

Calls the `avg` function for the column or expression given as the argument.

This sql function calculates the average value for a given column.

For additional functionality such as distinct, filtering and window functions,
refer to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is
returned when calling this function.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.avg('price').as('avg_price'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select avg("price") as "avg_price" from "toy"
```

If this function is used in a `select` statement, the type of the selected
expression will be `number | string` by default. This is because Kysely can't know the
type the db driver outputs. Sometimes the output can be larger than the largest
JavaScript number and a string is returned instead. Most drivers allow you
to configure the output type of large numbers and Kysely can't know if you've
done so.

You can specify the output type of the expression by providing the type as
the first type argument:

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.avg<number>('price').as('avg_price'))
  .execute()
```

Sometimes a null is returned, e.g. when row count is 0, and no `group by`
was used. It is highly recommended to include null in the output type union
and handle null values in post-execute code, or wrap the function with a [coalesce](#coalesce)
function.

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.avg<number | null>('price').as('avg_price'))
  .execute()
```

#### Type Parameters

##### O

`O` *extends* `string` \| `number` \| `null` = `string` \| `number`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

***

### coalesce()

#### Call Signature

> **coalesce**\<`V1`\>(`v1`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce1`](../types/ExtractTypeFromCoalesce1.md)\<`DB`, `TB`, `V1`\>\>

Defined in: [query-builder/function-module.ts:285](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L285)

Calls the `coalesce` function for given arguments.

This sql function returns the first non-null value from left to right, commonly
used to provide a default scalar for nullable columns or functions.

If this function is used in a `select` statement, the type of the selected
expression is inferred in the same manner that the sql function computes.
A union of arguments' types - if a non-nullable argument exists, it stops
there (ignoring any further arguments' types) and exludes null from the final
union type.

`(string | null, number | null)` is inferred as `string | number | null`.

`(string | null, number, Date | null)` is inferred as `string | number`.

`(number, string | null)` is inferred as `number`.

### Examples

```ts
import { sql } from 'kysely'

await db.selectFrom('person')
  .select((eb) => eb.fn.coalesce('nullable_column', sql.lit('<unknown>')).as('column'))
  .where('first_name', '=', 'Jessie')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select coalesce("nullable_column", '<unknown>') as "column" from "person" where "first_name" = $1
```

You can combine this function with other helpers in this module:

```ts
await db.selectFrom('person')
  .select((eb) => eb.fn.coalesce(eb.fn.avg<number | null>('age'), eb.lit(0)).as('avg_age'))
  .where('first_name', '=', 'Jennifer')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select coalesce(avg("age"), 0) as "avg_age" from "person" where "first_name" = $1
```

##### Type Parameters

###### V1

`V1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### v1

`V1`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce1`](../types/ExtractTypeFromCoalesce1.md)\<`DB`, `TB`, `V1`\>\>

#### Call Signature

> **coalesce**\<`V1`, `V2`\>(`v1`, `v2`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce2`](../types/ExtractTypeFromCoalesce2.md)\<`DB`, `TB`, `V1`, `V2`\>\>

Defined in: [query-builder/function-module.ts:289](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L289)

##### Type Parameters

###### V1

`V1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V2

`V2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### v1

`V1`

###### v2

`V2`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce2`](../types/ExtractTypeFromCoalesce2.md)\<`DB`, `TB`, `V1`, `V2`\>\>

#### Call Signature

> **coalesce**\<`V1`, `V2`, `V3`\>(`v1`, `v2`, `v3`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce3`](../types/ExtractTypeFromCoalesce3.md)\<`DB`, `TB`, `V1`, `V2`, `V3`\>\>

Defined in: [query-builder/function-module.ts:297](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L297)

##### Type Parameters

###### V1

`V1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V2

`V2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V3

`V3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### v1

`V1`

###### v2

`V2`

###### v3

`V3`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce3`](../types/ExtractTypeFromCoalesce3.md)\<`DB`, `TB`, `V1`, `V2`, `V3`\>\>

#### Call Signature

> **coalesce**\<`V1`, `V2`, `V3`, `V4`\>(`v1`, `v2`, `v3`, `v4`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce4`](../types/ExtractTypeFromCoalesce4.md)\<`DB`, `TB`, `V1`, `V2`, `V3`, `V4`\>\>

Defined in: [query-builder/function-module.ts:307](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L307)

##### Type Parameters

###### V1

`V1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V2

`V2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V3

`V3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V4

`V4` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### v1

`V1`

###### v2

`V2`

###### v3

`V3`

###### v4

`V4`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce4`](../types/ExtractTypeFromCoalesce4.md)\<`DB`, `TB`, `V1`, `V2`, `V3`, `V4`\>\>

#### Call Signature

> **coalesce**\<`V1`, `V2`, `V3`, `V4`, `V5`\>(`v1`, `v2`, `v3`, `v4`, `v5`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce5`](../types/ExtractTypeFromCoalesce5.md)\<`DB`, `TB`, `V1`, `V2`, `V3`, `V4`, `V5`\>\>

Defined in: [query-builder/function-module.ts:319](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L319)

##### Type Parameters

###### V1

`V1` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V2

`V2` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V3

`V3` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V4

`V4` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### V5

`V5` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

##### Parameters

###### v1

`V1`

###### v2

`V2`

###### v3

`V3`

###### v4

`V4`

###### v5

`V5`

##### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, [`ExtractTypeFromCoalesce5`](../types/ExtractTypeFromCoalesce5.md)\<`DB`, `TB`, `V1`, `V2`, `V3`, `V4`, `V5`\>\>

***

### count()

> **count**\<`O`, `RE`\>(`expr`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:379](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L379)

Calls the `count` function for the column or expression given as the argument.

When called with a column as argument, this sql function counts the number of rows where there
is a non-null value in that column.

For counting all rows nulls included (`count(*)`), see [countAll](#countall).

For additional functionality such as distinct, filtering and window functions,
refer to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is
returned when calling this function.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.count('id').as('num_toys'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select count("id") as "num_toys" from "toy"
```

If this function is used in a `select` statement, the type of the selected
expression will be `number | string | bigint` by default. This is because
Kysely can't know the type the db driver outputs. Sometimes the output can
be larger than the largest JavaScript number and a string is returned instead.
Most drivers allow you to configure the output type of large numbers and Kysely
can't know if you've done so.

You can specify the output type of the expression by providing
the type as the first type argument:

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.count<number>('id').as('num_toys'))
  .execute()
```

#### Type Parameters

##### O

`O` *extends* `string` \| `number` \| `bigint`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

***

### countAll()

#### Call Signature

> **countAll**\<`O`, `T`\>(`table`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:446](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L446)

Calls the `count` function with `*` or `table.*` as argument.

When called with `*` as argument, this sql function counts the number of rows,
nulls included.

For counting rows with non-null values in a given column (`count(column)`),
see [count](#count).

For additional functionality such as filtering and window functions, refer
to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is returned
when calling this function.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.countAll().as('num_toys'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select count(*) as "num_toys" from "toy"
```

If this is used in a `select` statement, the type of the selected expression
will be `number | string | bigint` by default. This is because Kysely
can't know the type the db driver outputs. Sometimes the output can be larger
than the largest JavaScript number and a string is returned instead. Most
drivers allow you to configure the output type of large numbers and Kysely
can't know if you've done so.

You can specify the output type of the expression by providing
the type as the first type argument:

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.countAll<number>().as('num_toys'))
  .execute()
```

Some databases, such as PostgreSQL, support scoping the function to a specific
table:

```ts
await db.selectFrom('toy')
  .innerJoin('pet', 'pet.id', 'toy.pet_id')
  .select((eb) => eb.fn.countAll('toy').as('num_toys'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select count("toy".*) as "num_toys"
from "toy" inner join "pet" on "pet"."id" = "toy"."pet_id"
```

##### Type Parameters

###### O

`O` *extends* `string` \| `number` \| `bigint`

###### T

`T` *extends* `string` \| `number` \| `symbol` = `TB`

##### Parameters

###### table

`T`

##### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

#### Call Signature

> **countAll**\<`O`\>(): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:450](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L450)

##### Type Parameters

###### O

`O` *extends* `string` \| `number` \| `bigint`

##### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

***

### jsonAgg()

#### Call Signature

> **jsonAgg**\<`T`\>(`table`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `T` *extends* `TB` ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<[`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>\>[] : `T` *extends* [`Expression`](Expression.md)\<`O`\> ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[] : `never`\>

Defined in: [query-builder/function-module.ts:718](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L718)

Creates a `json_agg` function call.

This is only supported by some dialects like PostgreSQL.

### Examples

You can use it on table expressions:

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => ['first_name', eb.fn.jsonAgg('pet').as('pets')])
  .groupBy('person.first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", json_agg("pet") as "pets"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."first_name"
```

or on columns:

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => [
    'first_name',
    eb.fn.jsonAgg('pet.name').as('pet_names'),
  ])
  .groupBy('person.first_name')
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", json_agg("pet"."name") AS "pet_names"
from "person"
inner join "pet" ON "pet"."owner_id" = "person"."id"
group by "person"."first_name"
```

##### Type Parameters

###### T

`T` *extends* `string` \| [`Expression`](Expression.md)\<`unknown`\>

##### Parameters

###### table

`T`

##### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `T` *extends* `TB` ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<[`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>\>[] : `T` *extends* [`Expression`](Expression.md)\<`O`\> ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\>[] : `never`\>

#### Call Signature

> **jsonAgg**\<`RE`\>(`column`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`ShallowDehydrateValue`](../types/ShallowDehydrateValue.md)\<[`SelectType`](../types/SelectType.md)\<[`ExtractTypeFromStringReference`](../types/ExtractTypeFromStringReference.md)\<`DB`, `TB`, `RE`\>\>\>[] \| `null`\>

Defined in: [query-builder/function-module.ts:730](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L730)

##### Type Parameters

###### RE

`RE` *extends* `string`

##### Parameters

###### column

`RE`

##### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`ShallowDehydrateValue`](../types/ShallowDehydrateValue.md)\<[`SelectType`](../types/SelectType.md)\<[`ExtractTypeFromStringReference`](../types/ExtractTypeFromStringReference.md)\<`DB`, `TB`, `RE`\>\>\>[] \| `null`\>

***

### max()

> **max**\<`O`, `RE`\>(`expr`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`IsNever`](../types/IsNever.md)\<`O`\> *extends* `true` ? [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `string` \| `number` \| `bigint` \| `Date`\> : `O`\>

Defined in: [query-builder/function-module.ts:494](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L494)

Calls the `max` function for the column or expression given as the argument.

This sql function calculates the maximum value for a given column.

For additional functionality such as distinct, filtering and window functions,
refer to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is
returned when calling this function.

If this function is used in a `select` statement, the type of the selected
expression will be the referenced column's type. This is because the result
is within the column's value range.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.max('price').as('max_price'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select max("price") as "max_price" from "toy"
```

Sometimes a null is returned, e.g. when row count is 0, and no `group by`
was used. It is highly recommended to include null in the output type union
and handle null values in post-execute code, or wrap the function with a [coalesce](#coalesce)
function.

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.max<number | null>('price').as('max_price'))
  .execute()
```

#### Type Parameters

##### O

`O` *extends* `string` \| `number` \| `bigint` \| `Date` \| `null` = `never`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`IsNever`](../types/IsNever.md)\<`O`\> *extends* `true` ? [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `string` \| `number` \| `bigint` \| `Date`\> : `O`\>

***

### min()

> **min**\<`O`, `RE`\>(`expr`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`IsNever`](../types/IsNever.md)\<`O`\> *extends* `true` ? [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `string` \| `number` \| `bigint` \| `Date`\> : `O`\>

Defined in: [query-builder/function-module.ts:550](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L550)

Calls the `min` function for the column or expression given as the argument.

This sql function calculates the minimum value for a given column.

For additional functionality such as distinct, filtering and window functions,
refer to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is
returned when calling this function.

If this function is used in a `select` statement, the type of the selected
expression will be the referenced column's type. This is because the result
is within the column's value range.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.min('price').as('min_price'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select min("price") as "min_price" from "toy"
```

Sometimes a null is returned, e.g. when row count is 0, and no `group by`
was used. It is highly recommended to include null in the output type union
and handle null values in post-execute code, or wrap the function with a [coalesce](#coalesce)
function.

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.min<number | null>('price').as('min_price'))
  .execute()
```

#### Type Parameters

##### O

`O` *extends* `string` \| `number` \| `bigint` \| `Date` \| `null` = `never`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, [`IsNever`](../types/IsNever.md)\<`O`\> *extends* `true` ? [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`, `string` \| `number` \| `bigint` \| `Date`\> : `O`\>

***

### sum()

> **sum**\<`O`, `RE`\>(`expr`): [`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/function-module.ts:618](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L618)

Calls the `sum` function for the column or expression given as the argument.

This sql function sums the values of a given column.

For additional functionality such as distinct, filtering and window functions,
refer to [AggregateFunctionBuilder](../classes/AggregateFunctionBuilder.md). An instance of this builder is
returned when calling this function.

### Examples

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.sum('price').as('total_price'))
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select sum("price") as "total_price" from "toy"
```

If this function is used in a `select` statement, the type of the selected
expression will be `number | string` by default. This is because Kysely can't know the
type the db driver outputs. Sometimes the output can be larger than the largest
JavaScript number and a string is returned instead. Most drivers allow you
to configure the output type of large numbers and Kysely can't know if you've
done so.

You can specify the output type of the expression by providing the type as
the first type argument:

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.sum<number>('price').as('total_price'))
  .execute()
```

Sometimes a null is returned, e.g. when row count is 0, and no `group by`
was used. It is highly recommended to include null in the output type union
and handle null values in post-execute code, or wrap the function with a [coalesce](#coalesce)
function.

```ts
await db.selectFrom('toy')
  .select((eb) => eb.fn.sum<number | null>('price').as('total_price'))
  .execute()
```

#### Type Parameters

##### O

`O` *extends* `string` \| `number` \| `bigint` \| `null` = `string` \| `number` \| `bigint`

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\> = [`ReferenceExpression`](../types/ReferenceExpression.md)\<`DB`, `TB`\>

#### Parameters

##### expr

`RE`

#### Returns

[`AggregateFunctionBuilder`](../classes/AggregateFunctionBuilder.md)\<`DB`, `TB`, `O`\>

***

### toJson()

> **toJson**\<`T`\>(`table`): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T` *extends* `TB` ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<[`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>\> : `T` *extends* [`Expression`](Expression.md)\<`O`\> ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> : `never`\>

Defined in: [query-builder/function-module.ts:761](https://github.com/kysely-org/kysely/blob/master/src/query-builder/function-module.ts#L761)

Creates a to_json function call.

This function is only available on PostgreSQL.

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => ['first_name', eb.fn.toJson('pet').as('pet')])
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "first_name", to_json("pet") as "pet"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
```

#### Type Parameters

##### T

`T` *extends* `string` \| [`Expression`](Expression.md)\<`unknown`\>

#### Parameters

##### table

`T`

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `T` *extends* `TB` ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<[`Selectable`](../types/Selectable.md)\<`DB`\[`T`\]\>\>\> : `T` *extends* [`Expression`](Expression.md)\<`O`\> ? [`Simplify`](../types/Simplify.md)\<[`ShallowDehydrateObject`](../types/ShallowDehydrateObject.md)\<`O`\>\> : `never`\>
