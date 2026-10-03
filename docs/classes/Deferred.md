[**kysely**](../index.md)

***

[kysely](../modules.md) / Deferred

# Class: Deferred\<T\>

Defined in: [util/deferred.ts:1](https://github.com/kysely-org/kysely/blob/master/src/util/deferred.ts#L1)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Deferred**\<`T`\>(): `Deferred`\<`T`\>

Defined in: [util/deferred.ts:7](https://github.com/kysely-org/kysely/blob/master/src/util/deferred.ts#L7)

#### Returns

`Deferred`\<`T`\>

## Accessors

### promise

#### Get Signature

> **get** **promise**(): `Promise`\<`T`\>

Defined in: [util/deferred.ts:14](https://github.com/kysely-org/kysely/blob/master/src/util/deferred.ts#L14)

##### Returns

`Promise`\<`T`\>

## Methods

### reject()

> **reject**(`reason?`): `void`

Defined in: [util/deferred.ts:23](https://github.com/kysely-org/kysely/blob/master/src/util/deferred.ts#L23)

#### Parameters

##### reason?

`any`

#### Returns

`void`

***

### resolve()

> **resolve**(`value`): `void`

Defined in: [util/deferred.ts:18](https://github.com/kysely-org/kysely/blob/master/src/util/deferred.ts#L18)

#### Parameters

##### value

`T` \| `PromiseLike`\<`T`\>

#### Returns

`void`
