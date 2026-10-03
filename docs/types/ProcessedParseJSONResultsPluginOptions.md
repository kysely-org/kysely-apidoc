[**kysely**](../index.md)

***

[kysely](../modules.md) / ProcessedParseJSONResultsPluginOptions

# Type Alias: ProcessedParseJSONResultsPluginOptions

> **ProcessedParseJSONResultsPluginOptions** = `{ readonly [K in keyof ParseJSONResultsPluginOptions]-?: K extends "skipKeys" ? Record<string, true> : ParseJSONResultsPluginOptions[K] }`

Defined in: [plugin/parse-json-results/parse-json-results-plugin.ts:44](https://github.com/kysely-org/kysely/blob/master/src/plugin/parse-json-results/parse-json-results-plugin.ts#L44)
