[**kysely**](../index.md)

***

[kysely](../modules.md) / readonly

# readonly

## Classes

- [CTEBuilder](../classes/readonly.CTEBuilder.md)

## Interfaces

- [CTEBuilderProps](../interfaces/readonly.CTEBuilderProps.md)
- [ReadonlyConnectionBuilder](../interfaces/readonly.ReadonlyConnectionBuilder.md)
- [ReadonlyControlledTransaction](../interfaces/readonly.ReadonlyControlledTransaction.md)
- [ReadonlyControlledTransactionBuilder](../interfaces/readonly.ReadonlyControlledTransactionBuilder.md)
- [ReadonlyKysely](../interfaces/readonly.ReadonlyKysely.md)
- [ReadonlyQueryCreator](../interfaces/readonly.ReadonlyQueryCreator.md)
- [ReadonlyQueryResult](../interfaces/readonly.ReadonlyQueryResult.md)
- [ReadonlyTransaction](../interfaces/readonly.ReadonlyTransaction.md)
- [ReadonlyTransactionBuilder](../interfaces/readonly.ReadonlyTransactionBuilder.md)

## Type Aliases

- [CTEBuilderCallback](../types/readonly.CTEBuilderCallback.md)
- [ReadonlyAccessMode](../types/readonly.ReadonlyAccessMode.md)
- [ReadonlyCommonTableExpression](../types/readonly.ReadonlyCommonTableExpression.md)
- [ReadonlyCommonTableExpressionFactory](../types/readonly.ReadonlyCommonTableExpressionFactory.md)
- [ReadonlyCommonTableExpressionOutput](../types/readonly.ReadonlyCommonTableExpressionOutput.md)
- [ReadonlyCompiledQuery](../types/readonly.ReadonlyCompiledQuery.md)
- [ReadonlyExtractRowFromCommonTableExpression](../types/readonly.ReadonlyExtractRowFromCommonTableExpression.md)
- [ReadonlyQueryCreatorWithCommonTableExpression](../types/readonly.ReadonlyQueryCreatorWithCommonTableExpression.md)
- [ReadonlyRecursiveCommonTableExpression](../types/readonly.ReadonlyRecursiveCommonTableExpression.md)
- [ReleaseSavepoint](../types/readonly.ReleaseSavepoint.md)
- [RollbackToSavepoint](../types/readonly.RollbackToSavepoint.md)

## Functions

- [isReadonlyCompiledQuery](../functions/readonly.isReadonlyCompiledQuery.md)

## Accessors

### dynamic

#### Get Signature

> **get** **dynamic**(): [`DynamicModule`](../classes/DynamicModule.md)\<`DB`\>

Defined in: [kysely.ts:156](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L156)

Returns a the [DynamicModule](../classes/DynamicModule.md) module.

The [DynamicModule](../classes/DynamicModule.md) module can be used to bypass strict typing and
passing in dynamic values for the queries.

##### Returns

[`DynamicModule`](../classes/DynamicModule.md)\<`DB`\>

***

### fn

#### Get Signature

> **get** **fn**(): [`FunctionModule`](../interfaces/FunctionModule.md)\<`DB`, keyof `DB`\>

Defined in: [kysely.ts:232](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L232)

Returns a [FunctionModule](../interfaces/FunctionModule.md) that can be used to write somewhat type-safe function
calls.

```ts
const { count } = db.fn

await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select([
    'id',
    count('pet.id').as('person_count'),
  ])
  .groupBy('person.id')
  .having(count('pet.id'), '>', 10)
  .execute()
```

The generated SQL (PostgreSQL):

```sql
select "person"."id", count("pet"."id") as "person_count"
from "person"
inner join "pet" on "pet"."owner_id" = "person"."id"
group by "person"."id"
having count("pet"."id") > $1
```

Why "somewhat" type-safe? Because the function calls are not bound to the
current query context. They allow you to reference columns and tables that
are not in the current query. E.g. remove the `innerJoin` from the previous
query and TypeScript won't even complain.

If you want to make the function calls fully type-safe, you can use the
[ExpressionBuilder.fn](../interfaces/ExpressionBuilder.md#fn) getter for a query context-aware, stricter [FunctionModule](../interfaces/FunctionModule.md).

```ts
await db.selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select((eb) => [
    'person.id',
    eb.fn.count('pet.id').as('pet_count')
  ])
  .groupBy('person.id')
  .having((eb) => eb.fn.count('pet.id'), '>', 10)
  .execute()
```

##### Returns

[`FunctionModule`](../interfaces/FunctionModule.md)\<`DB`, keyof `DB`\>

***

### isTransaction

#### Get Signature

> **get** **isTransaction**(): `boolean`

Defined in: [kysely.ts:614](https://github.com/kysely-org/kysely/blob/master/src/kysely.ts#L614)

Returns true if this `Kysely` instance is a transaction.

You can also use `db instanceof Transaction`.

##### Returns

`boolean`

***

### schema

#### Get Signature

> **get** **schema**(): [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>

Defined in: [readonly/readonly-kysely.ts:98](https://github.com/kysely-org/kysely/blob/master/src/readonly/readonly-kysely.ts#L98)

##### Deprecated

not allowed with a read-only Kysely instance.

##### Returns

[`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"not allowed with a read-only Kysely instance."`\>
