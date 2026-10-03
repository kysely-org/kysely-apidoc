[**kysely**](../index.md)

***

[kysely](../modules.md) / PGliteQueryOptions

# Interface: PGliteQueryOptions

Defined in: [dialect/pglite/pglite-dialect-config.ts:51](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L51)

## Properties

### blob?

> `optional` **blob?**: `Blob` \| `File`

Defined in: [dialect/pglite/pglite-dialect-config.ts:52](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L52)

***

### onNotice?

> `optional` **onNotice?**: (`notice`) => `void`

Defined in: [dialect/pglite/pglite-dialect-config.ts:53](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L53)

#### Parameters

##### notice

`any`

#### Returns

`void`

***

### paramTypes?

> `optional` **paramTypes?**: `number`[]

Defined in: [dialect/pglite/pglite-dialect-config.ts:54](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L54)

***

### parsers?

> `optional` **parsers?**: `Record`\<`number`, (`value`) => `any`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:55](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L55)

***

### rowMode?

> `optional` **rowMode?**: `"object"` \| `"array"`

Defined in: [dialect/pglite/pglite-dialect-config.ts:56](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L56)

***

### serializers?

> `optional` **serializers?**: `Record`\<`number`, (`value`) => `string`\>

Defined in: [dialect/pglite/pglite-dialect-config.ts:57](https://github.com/kysely-org/kysely/blob/master/src/dialect/pglite/pglite-dialect-config.ts#L57)
