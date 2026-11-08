[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteQueryOptions

# Interface: PGliteQueryOptions

Defined in: [dialect/pglite/pglite-dialect-config.ts:61](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L61)

## Properties

### blob?

> `optional` **blob?**: `Blob` \| `File`

Defined in: [dialect/pglite/pglite-dialect-config.ts:62](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L62)

***

### onNotice?

> `optional` **onNotice?**: (`notice`) => `void`

Defined in: [dialect/pglite/pglite-dialect-config.ts:63](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L63)

#### Parameters

##### notice

`any`

#### Returns

`void`

***

### paramTypes?

> `optional` **paramTypes?**: `number`[]

Defined in: [dialect/pglite/pglite-dialect-config.ts:64](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L64)

***

### parsers?

> `optional` **parsers?**: `Record`\<`number`, (`value`) => `any`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:65](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L65)

***

### rowMode?

> `optional` **rowMode?**: `"object"` \| `"array"`

Defined in: [dialect/pglite/pglite-dialect-config.ts:66](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L66)

***

### serializers?

> `optional` **serializers?**: `Record`\<`number`, (`value`) => `string`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:67](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L67)
