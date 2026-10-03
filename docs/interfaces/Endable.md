[**kysely**](../index.md)

***

[kysely](../modules.md) / Endable

# Interface: Endable\<DB, TB, O\>

Defined in: [query-builder/case-builder.ts:345](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L345)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Methods

### end()

> **end**(): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/case-builder.ts:352](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L352)

Adds an `end` keyword to the case operator.

`case` operators can only be used as part of a query.
For a `case` statement used as part of a stored program, use [endCase](#endcase) instead.

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

***

### endCase()

> **endCase**(): [`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/case-builder.ts:360](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L360)

Adds `end case` keywords to the case statement.

`case` statements can only be used for flow control in stored programs.
For a `case` operator used as part of a query, use [end](#end) instead.

#### Returns

[`ExpressionWrapper`](../classes/ExpressionWrapper.md)\<`DB`, `TB`, `O`\>
