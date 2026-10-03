[**kysely**](../index.md)

***

[kysely](../modules.md) / CaseWhenBuilder

# Class: CaseWhenBuilder\<DB, TB, W, O\>

Defined in: [query-builder/case-builder.ts:156](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L156)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### W

`W`

### O

`O`

## Implements

- [`Whenable`](../interfaces/Whenable.md)\<`DB`, `TB`, `W`, `O`\>
- [`Endable`](../interfaces/Endable.md)\<`DB`, `TB`, `O` \| `null`\>

## Constructors

### Constructor

> **new CaseWhenBuilder**\<`DB`, `TB`, `W`, `O`\>(`props`): `CaseWhenBuilder`\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:161](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L161)

#### Parameters

##### props

[`CaseBuilderProps`](../interfaces/CaseBuilderProps.md)

#### Returns

`CaseWhenBuilder`\<`DB`, `TB`, `W`, `O`\>

## Methods

### else()

#### Call Signature

> **else**\<`E`\>(`expression`): [`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

Defined in: [query-builder/case-builder.ts:225](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L225)

Adds an `else` clause to the `case` statement.

See [elseRef](#elseref) for reference-first variant.

An `else` call must be followed by an [Endable.end](../interfaces/Endable.md#end) or [Endable.endCase](../interfaces/Endable.md#endcase) call.

**Note:** Numbers, booleans, and `null` values are inlined directly into the
SQL query string (e.g. `else 0`, `else false`, `else null`) instead of being
added as parameterized values (e.g. `else $1`). This allows the database
engine to correctly infer the data type of the `case` expression result.
Without this behavior, all results would be returned as strings.

String values are always parameterized as usual.

##### Type Parameters

###### E

`E` *extends* [`Expression`](../interfaces/Expression.md)\<`unknown`\>

##### Parameters

###### expression

`E`

##### Returns

[`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

#### Call Signature

> **else**\<`V`\>(`value`): [`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| `V`\>

Defined in: [query-builder/case-builder.ts:229](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L229)

Adds an `else` clause to the `case` statement.

See [elseRef](#elseref) for reference-first variant.

An `else` call must be followed by an [Endable.end](../interfaces/Endable.md#end) or [Endable.endCase](../interfaces/Endable.md#endcase) call.

**Note:** Numbers, booleans, and `null` values are inlined directly into the
SQL query string (e.g. `else 0`, `else false`, `else null`) instead of being
added as parameterized values (e.g. `else $1`). This allows the database
engine to correctly infer the data type of the `case` expression result.
Without this behavior, all results would be returned as strings.

String values are always parameterized as usual.

##### Type Parameters

###### V

`V`

##### Parameters

###### value

`V`

##### Returns

[`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| `V`\>

***

### elseRef()

> **elseRef**\<`RE`\>(`expression`): [`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [query-builder/case-builder.ts:249](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L249)

Adds an `else` clause to the `case` statement where the value is a reference to a column.

See [else](#else) for value-first variant.

An `elseRef` call must be followed by an [Endable.end](../interfaces/Endable.md#end) or [Endable.endCase](../interfaces/Endable.md#endcase) call.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### expression

`RE`

#### Returns

[`CaseEndBuilder`](CaseEndBuilder.md)\<`DB`, `TB`, `O` \| [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

***

### end()

> **end**(): [`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O` \| `null`\>

Defined in: [query-builder/case-builder.ts:264](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L264)

Adds an `end` keyword to the case operator.

`case` operators can only be used as part of a query.
For a `case` statement used as part of a stored program, use [endCase](../interfaces/Endable.md#endcase) instead.

#### Returns

[`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O` \| `null`\>

#### Implementation of

[`Endable`](../interfaces/Endable.md).[`end`](../interfaces/Endable.md#end)

***

### endCase()

> **endCase**(): [`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O` \| `null`\>

Defined in: [query-builder/case-builder.ts:270](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L270)

Adds `end case` keywords to the case statement.

`case` statements can only be used for flow control in stored programs.
For a `case` operator used as part of a query, use [end](../interfaces/Endable.md#end) instead.

#### Returns

[`ExpressionWrapper`](ExpressionWrapper.md)\<`DB`, `TB`, `O` \| `null`\>

#### Implementation of

[`Endable`](../interfaces/Endable.md).[`endCase`](../interfaces/Endable.md#endcase)

***

### when()

#### Call Signature

> **when**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:165](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L165)

Adds a `when` clause to the case statement.

See [Whenable.whenRef](../interfaces/Whenable.md#whenref) for reference-first variant.

A `when` call must be followed by either a [CaseThenBuilder.then](CaseThenBuilder.md#then) or [CaseThenBuilder.thenRef](CaseThenBuilder.md#thenref) call.

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### VE

`VE` *extends* `any`

##### Parameters

###### lhs

`unknown` *extends* `W` ? `RE` : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"when(lhs, op, rhs) is not supported when using case(value)"`\>

###### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

###### rhs

`VE`

##### Returns

[`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

##### Implementation of

[`Whenable`](../interfaces/Whenable.md).[`when`](../interfaces/Whenable.md#when)

#### Call Signature

> **when**(`expression`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:176](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L176)

##### Parameters

###### expression

[`Expression`](../interfaces/Expression.md)\<`W`\>

##### Returns

[`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

##### Implementation of

[`Whenable`](../interfaces/Whenable.md).[`when`](../interfaces/Whenable.md#when)

#### Call Signature

> **when**(`value`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:178](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L178)

##### Parameters

###### value

`unknown` *extends* `W` ? [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"when(value) is only supported when using case(value)"`\> : `W`

##### Returns

[`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

##### Implementation of

[`Whenable`](../interfaces/Whenable.md).[`when`](../interfaces/Whenable.md#when)

***

### whenRef()

> **whenRef**\<`RE`\>(`lhs`, `op`, `rhs`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:194](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L194)

Adds a `when` clause to the case statement, where both sides of the
operator are references to columns.

See [Whenable.when](../interfaces/Whenable.md#when) for value-first variant.

A `whenRef` call must be followed by either a [CaseThenBuilder.then](CaseThenBuilder.md#then) or [CaseThenBuilder.thenRef](CaseThenBuilder.md#thenref) call.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### lhs

`unknown` *extends* `W` ? `RE` : [`KyselyTypeError`](../interfaces/KyselyTypeError.md)\<`"whenRef(lhs, op, rhs) is not supported when using case(value)"`\>

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RE`

#### Returns

[`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

#### Implementation of

[`Whenable`](../interfaces/Whenable.md).[`whenRef`](../interfaces/Whenable.md#whenref)
