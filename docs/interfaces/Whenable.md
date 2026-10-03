[**kysely**](../index.md)

***

[kysely](../modules.md) / Whenable

# Interface: Whenable\<DB, TB, W, O\>

Defined in: [query-builder/case-builder.ts:301](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L301)

## Type Parameters

### DB

`DB`

### TB

`TB` *extends* keyof `DB`

### W

`W`

### O

`O`

## Methods

### when()

#### Call Signature

> **when**\<`RE`, `VE`\>(`lhs`, `op`, `rhs`): [`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:309](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L309)

Adds a `when` clause to the case statement.

See [Whenable.whenRef](#whenref) for reference-first variant.

A `when` call must be followed by either a [CaseThenBuilder.then](../classes/CaseThenBuilder.md#then) or [CaseThenBuilder.thenRef](../classes/CaseThenBuilder.md#thenref) call.

##### Type Parameters

###### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

###### VE

`VE` *extends* `any`

##### Parameters

###### lhs

`unknown` *extends* `W` ? `RE` : [`KyselyTypeError`](KyselyTypeError.md)\<`"when(lhs, op, rhs) is not supported when using case(value)"`\>

###### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

###### rhs

`VE`

##### Returns

[`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

#### Call Signature

> **when**(`expression`): [`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:320](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L320)

##### Parameters

###### expression

[`Expression`](Expression.md)\<`W`\>

##### Returns

[`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

#### Call Signature

> **when**(`value`): [`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:322](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L322)

##### Parameters

###### value

`unknown` *extends* `W` ? [`KyselyTypeError`](KyselyTypeError.md)\<`"when(value) is only supported when using case(value)"`\> : `W`

##### Returns

[`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

***

### whenRef()

> **whenRef**\<`RE`\>(`lhs`, `op`, `rhs`): [`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>

Defined in: [query-builder/case-builder.ts:336](https://github.com/kysely-org/kysely/blob/master/src/query-builder/case-builder.ts#L336)

Adds a `when` clause to the case statement, where both sides of the
operator are references to columns.

See [Whenable.when](#when) for value-first variant.

A `whenRef` call must be followed by either a [CaseThenBuilder.then](../classes/CaseThenBuilder.md#then) or [CaseThenBuilder.thenRef](../classes/CaseThenBuilder.md#thenref) call.

#### Type Parameters

##### RE

`RE` *extends* `string` \| [`Expression`](Expression.md)\<`any`\> \| [`DynamicReferenceBuilder`](../classes/DynamicReferenceBuilder.md)\<`any`\> \| [`SelectQueryBuilderExpression`](SelectQueryBuilderExpression.md)\<`Record`\<`string`, `any`\>\> \| [`OperandExpressionFactory`](../types/OperandExpressionFactory.md)\<`DB`, `TB`, `any`\>

#### Parameters

##### lhs

`unknown` *extends* `W` ? `RE` : [`KyselyTypeError`](KyselyTypeError.md)\<`"whenRef(lhs, op, rhs) is not supported when using case(value)"`\>

##### op

[`ComparisonOperatorExpression`](../types/ComparisonOperatorExpression.md)

##### rhs

`RE`

#### Returns

[`CaseThenBuilder`](../classes/CaseThenBuilder.md)\<`DB`, `TB`, `W`, `O`\>
