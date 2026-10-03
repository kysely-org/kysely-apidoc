[**kysely**](../index.md)

***

[kysely](../modules.md) / replaceWithNoncontingentExpression

# Function: replaceWithNoncontingentExpression()

> **replaceWithNoncontingentExpression**(`node`): [`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)

Defined in: [plugin/handle-empty-in-lists/handle-empty-in-lists.ts:44](https://github.com/kysely-org/kysely/blob/master/src/plugin/handle-empty-in-lists/handle-empty-in-lists.ts#L44)

Replaces the `in`/`not in` expression with a noncontingent expression (always true or always
false) depending on the original operator.

This is how Knex.js, PrismaORM, Laravel, and SQLAlchemy handle `in ()` and `not in ()`.

See [pushValueIntoList](pushValueIntoList.md) for an alternative strategy.

## Parameters

### node

[`EmptyInListNode`](../types/EmptyInListNode.md)

## Returns

[`BinaryOperationNode`](../interfaces/BinaryOperationNode.md)
