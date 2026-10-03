[**kysely**](../index.md)

***

[kysely](../modules.md) / Log

# Class: Log

Defined in: [util/log.ts:28](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L28)

## Constructors

### Constructor

> **new Log**(`config`): `Log`

Defined in: [util/log.ts:32](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L32)

#### Parameters

##### config

[`LogConfig`](../types/LogConfig.md)

#### Returns

`Log`

## Methods

### error()

> **error**(`getEvent`): `Promise`\<`void`\>

Defined in: [util/log.ts:60](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L60)

#### Parameters

##### getEvent

() => [`ErrorLogEvent`](../interfaces/ErrorLogEvent.md)

#### Returns

`Promise`\<`void`\>

***

### isLevelEnabled()

> **isLevelEnabled**(`level`): `boolean`

Defined in: [util/log.ts:50](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L50)

#### Parameters

##### level

`"query"` \| `"error"`

#### Returns

`boolean`

***

### query()

> **query**(`getEvent`): `Promise`\<`void`\>

Defined in: [util/log.ts:54](https://github.com/kysely-org/kysely/blob/master/src/util/log.ts#L54)

#### Parameters

##### getEvent

() => [`QueryLogEvent`](../interfaces/QueryLogEvent.md)

#### Returns

`Promise`\<`void`\>
