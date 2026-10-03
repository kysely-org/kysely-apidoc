[**kysely**](../index.md)

***

[kysely](../modules.md) / ParseJSONResultsPluginOptions

# Interface: ParseJSONResultsPluginOptions

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:11](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L11)

## Properties

### objectStrategy?

> `optional` **objectStrategy?**: [`ObjectStrategy`](../types/ObjectStrategy.md)

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:33](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L33)

When `'in-place'`, arrays' and objects' values are parsed in-place. This is
the most time and space efficient option.

This can result in runtime errors if some objects/arrays are readonly.

When `'create'`, new arrays and objects are created to avoid such errors.

Defaults to `'in-place'`.

***

### reviver?

> `optional` **reviver?**: (`key`, `value`, `context?`) => `unknown`

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:39](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L39)

The reviver function that will be passed to `JSON.parse`.
See [The reviver parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter).

#### Parameters

##### key

`string`

##### value

`unknown`

##### context?

`any`

#### Returns

`unknown`

***

### shouldParse?

> `optional` **shouldParse?**: (`value`, `jsonPath`) => `boolean`

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:21](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L21)

A function that returns `true` if the given string is a JSON string that should be parsed. If a detected JSON string fails to parse, an error is thrown.

Defaults to a function that checks if the string starts and ends with `{}` or `[]` - meaning anything that might be a JSON string, is attempted to be parsed - and if fails, proceeds.

#### Parameters

##### value

`string`

The string value to check.

##### jsonPath

`string`

The JSON path leading to this value. e.g. `$[0]."users"[0]."profile"`

#### Returns

`boolean`

`true` if the string should be JSON parsed.
