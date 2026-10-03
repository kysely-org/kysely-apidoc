[**kysely**](../index.md)

***

[kysely](../modules.md) / CaseThenBuilder

# Class: CaseThenBuilder\<DB, TB, W, O\>

Defined in: [query-builder/case-builder.ts:87](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L87)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### W

`W`

### O

`O`

## Constructors

### Constructor

> **new CaseThenBuilder**\<`DB`, `TB`, `W`, `O`\>(`props`): `CaseThenBuilder`\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:90](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L90)

#### Parameters

##### props

[`CaseBuilderProps`](../interfaces/CaseBuilderProps.md)

#### Returns

`CaseThenBuilder`\<`DB`, `TB`, `W`, `O`\>

## Methods

### then()

#### Call Signature

> **then**\<`E`\>(`expression`): [`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

Defined in: [query-builder/case-builder.ts:111](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L111)

Adds a `then` clause to the `case` statement.

See [thenRef](#thenref) for reference-first variant.

A `then` call can be followed by [Whenable.when](../interfaces/Whenable.md#when), [Whenable.whenRef](../interfaces/Whenable.md#whenref),
[CaseWhenBuilder.else](CaseWhenBuilder.md#else), [CaseWhenBuilder.elseRef](CaseWhenBuilder.md#elseref),
[CaseWhenBuilder.end](CaseWhenBuilder.md#end) or [CaseWhenBuilder.endCase](CaseWhenBuilder.md#endcase) call.

**Note:** Numbers, booleans, and `null` values are inlined directly into the
SQL query string (e.g. `then 1`, `then true`, `then null`) instead of being
added as parameterized values (e.g. `then $1`). This allows the database
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

[`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| [`ExtractTypeFromValueExpression`](../types/ExtractTypeFromValueExpression.md)\<`E`\>\>

#### Call Signature

> **then**\<`V`\>(`value`): [`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| `V`\>

Defined in: [query-builder/case-builder.ts:115](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L115)

Adds a `then` clause to the `case` statement.

See [thenRef](#thenref) for reference-first variant.

A `then` call can be followed by [Whenable.when](../interfaces/Whenable.md#when), [Whenable.whenRef](../interfaces/Whenable.md#whenref),
[CaseWhenBuilder.else](CaseWhenBuilder.md#else), [CaseWhenBuilder.elseRef](CaseWhenBuilder.md#elseref),
[CaseWhenBuilder.end](CaseWhenBuilder.md#end) or [CaseWhenBuilder.endCase](CaseWhenBuilder.md#endcase) call.

**Note:** Numbers, booleans, and `null` values are inlined directly into the
SQL query string (e.g. `then 1`, `then true`, `then null`) instead of being
added as parameterized values (e.g. `then $1`). This allows the database
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

[`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| `V`\>

***

### thenRef()

> **thenRef**\<`RE`\>(`expression`): [`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>

Defined in: [query-builder/case-builder.ts:138](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L138)

Adds a `then` clause to the `case` statement where the value is a reference to a column.

See [then](#then) for value-first variant.

A `thenRef` call can be followed by [Whenable.when](../interfaces/Whenable.md#when), [Whenable.whenRef](../interfaces/Whenable.md#whenref),
[CaseWhenBuilder.else](CaseWhenBuilder.md#else), [CaseWhenBuilder.elseRef](CaseWhenBuilder.md#elseref),
[CaseWhenBuilder.end](CaseWhenBuilder.md#end) or [CaseWhenBuilder.endCase](CaseWhenBuilder.md#endcase) call.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](../interfaces/Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](../interfaces/SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### expression

`RE`

#### Returns

[`CaseWhenBuilder`](CaseWhenBuilder.md)\<`DB`, `TB`, `W`, `O` \| [`ExtractTypeFromReferenceExpression`](../types/ExtractTypeFromReferenceExpression.md)\<`DB`, `TB`, `RE`\>\>
