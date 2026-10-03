[**kysely**](../index.md)

***

[kysely](../modules.md) / CaseEndBuilder

# Class: CaseEndBuilder\<DB, TB, O\>

Defined in: [query-builder/case-builder.ts:277](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L277)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### O

`O`

## Implements

- [`Endable`](../interfaces/Endable.md)\<`DB`, `TB`, `O`\>

## Constructors

### Constructor

> **new CaseEndBuilder**\<`DB`, `TB`, `O`\>(`props`): `CaseEndBuilder`\<`DB`, `TB`, `O`\>

Defined in: [query-builder/case-builder.ts:284](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L284)

#### Parameters

##### props

[`CaseBuilderProps`](../interfaces/CaseBuilderProps.md)

#### Returns

`CaseEndBuilder`\<`DB`, `TB`, `O`\>

## Methods

### end()

> **end**(): [`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/case-builder.ts:288](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L288)

Adds an `end` keyword to the case operator.

`case` operators can only be used as part of a query.
For a `case` statement used as part of a stored program, use [endCase](../interfaces/Endable.md#endcase) instead.

#### Returns

[`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

#### Implementation of

[`Endable`](../interfaces/Endable.md).[`end`](../interfaces/Endable.md#end)

***

### endCase()

> **endCase**(): [`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

Defined in: [query-builder/case-builder.ts:294](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L294)

Adds `end case` keywords to the case statement.

`case` statements can only be used for flow control in stored programs.
For a `case` operator used as part of a query, use [end](../interfaces/Endable.md#end) instead.

#### Returns

[`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O`\>

#### Implementation of

[`Endable`](../interfaces/Endable.md).[`endCase`](../interfaces/Endable.md#endcase)
