[**kysely**](../index.md)

***

[kysely](../modules.md) / QueryLogEvent

# Interface: QueryLogEvent

Defined in: [util/log.ts:10](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L10)

## Properties

### isStream?

> `readonly` `optional` **isStream?**: `boolean`

Defined in: [util/log.ts:12](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L12)

***

### level

> `readonly` **level**: `"query"`

Defined in: [util/log.ts:11](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L11)

***

### query

> `readonly` **query**: [`CompiledQuery`](CompiledQuery.md)

Defined in: [util/log.ts:13](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L13)

***

### queryDurationMillis

> `readonly` **queryDurationMillis**: `number`

Defined in: [util/log.ts:14](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L14)
