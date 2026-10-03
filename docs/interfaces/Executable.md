[**kysely**](../index.md)

***

[kysely](../modules.md) / Executable

# Interface: Executable\<O\>

Defined in: [util/executable.ts:6](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L6)

## Hierarchy

[View Summary](../hierarchy.md)

### Extended by

- [`SelectQueryBuilder`](SelectQueryBuilder.md)

## Type Parameters

### O

`O`

## Methods

### execute()

> **execute**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

Defined in: [util/executable.ts:12](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L12)

Executes the query and returns an array of rows.

Also see the [executeTakeFirst](#executetakefirst) and [executeTakeFirstOrThrow](#executetakefirstorthrow) methods.

#### Parameters

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>[]\>

***

### executeTakeFirst()

> **executeTakeFirst**(`options?`): `Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

Defined in: [util/executable.ts:18](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L18)

Executes the query and returns the first result or undefined if
the query returned no result.

#### Parameters

##### options?

[`AbortableQueryOptions`](AbortableQueryOptions.md)

#### Returns

`Promise`\<[`SimplifySingleResult`](../types/SimplifySingleResult.md)\<`O`\>\>

***

### executeTakeFirstOrThrow()

> **executeTakeFirstOrThrow**(`options?`): `Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>

Defined in: [util/executable.ts:30](https://github.com/kysely-org/kysely/blob/master/src/util/executable.ts#L30)

Executes the query and returns the first result or throws if
the query returned no result.

By default an instance of [NoResultError](../classes/NoResultError.md) is thrown, but you can
provide a custom error class, or callback to throw a different
error.

#### Parameters

##### options?

[`NoResultErrorConstructor`](../types/NoResultErrorConstructor.md) \| [`ExecuteTakeFirstOrThrowOptions`](ExecuteTakeFirstOrThrowOptions.md) \| ((`node`) => `Error`)

#### Returns

`Promise`\<[`SimplifyResult`](../types/SimplifyResult.md)\<`O`\>\>
