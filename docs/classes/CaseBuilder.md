[**kysely**](../index.md)

***

[kysely](../modules.md) / CaseBuilder

# Class: CaseBuilder\<DB, TB, W, O\>

Defined in: [query-builder/case-builder.ts:25](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L25)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### W

`W` = `unknown`

### O

`O` = `never`

## Implements

- [`Whenable`](../interfaces/Whenable.md)\<`DB`, `TB`, `W`, `O`\>

## Constructors

### Constructor

> **new CaseBuilder**\<`DB`, `TB`, `W`, `O`\>(`props`): `CaseBuilder`\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:33](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L33)

#### Parameters

##### props

[`CaseBuilderProps`](../interfaces/CaseBuilderProps.md)

#### Returns

`CaseBuilder`\<`DB`, `TB`, `W`, `O`\>

## Methods

### when()

#### Call Signature

> **when**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:37](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L37)

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

Defined in: [query-builder/case-builder.ts:48](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L48)

##### Parameters

###### expression

[`Expression`](../interfaces/Expression.md)\<`W`\>

##### Returns

[`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

##### Implementation of

[`Whenable`](../interfaces/Whenable.md).[`when`](../interfaces/Whenable.md#when)

#### Call Signature

> **when**(`value`): [`CaseThenBuilder`](CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:50](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L50)

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

Defined in: [query-builder/case-builder.ts:66](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L66)

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
