[**kysely**](../index.md)

***

[kysely](../modules.md) / pushValueIntoList

# Function: pushValueIntoList()

> **pushValueIntoList**(`uniqueNotInLiteral`): [`EmptyInListsStrategy`](../types/EmptyInListsStrategy.md)

Defined in: [plugin/handle-empty-in-lists/handle-empty-in-lists.ts:77](https://github.com/kysely-org/kysely/blob/master/src/plugin/handle-empty-in-lists/handle-empty-in-lists.ts#L77)

When `in`, pushes a `null` value into the list resulting in `in (null)`. This
is how TypeORM and Sequelize handle `in ()`. `in (null)` is logically the equivalent
of `= null`, which returns `null`, which is a falsy expression in most SQL databases.
We recommend NOT using this strategy if you plan to use `in` in `select`, `returning`,
or `output` clauses, as the return type differs from the `SqlBool` default type.

When `not in`, casts the left operand as `char` and pushes a literal value into
the list resulting in `cast({{lhs}} as char) not in ({{VALUE}})`. Casting
is required to avoid database errors with non-string columns.

See [replaceWithNoncontingentExpression](replaceWithNoncontingentExpression.md) for an alternative strategy.

## Parameters

### uniqueNotInLiteral

`string` & `object` \| `"__kysely_no_values_were_provided__"`

## Returns

[`EmptyInListsStrategy`](../types/EmptyInListsStrategy.md)
