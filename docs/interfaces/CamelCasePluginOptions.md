[**kysely**](../index.md)

***

[kysely](../modules.md) / CamelCasePluginOptions

# Interface: CamelCasePluginOptions

Defined in: [plugin/camel-case/camel-case-plugin.ts:17](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L17)

## Properties

### maintainNestedObjectKeys?

> `optional` **maintainNestedObjectKeys?**: `boolean`

Defined in: [plugin/camel-case/camel-case-plugin.ts:49](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L49)

If true, nested object's keys will not be converted to camel case.

Defaults to false.

***

### underscoreBeforeDigits?

> `optional` **underscoreBeforeDigits?**: `boolean`

Defined in: [plugin/camel-case/camel-case-plugin.ts:33](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L33)

If true, an underscore is added before each digit when converting
camelCase to snake_case. For example `foo12Bar => foo_12_bar` and
`foo_12_bar => foo12Bar`

Defaults to false.

***

### underscoreBetweenUppercaseLetters?

> `optional` **underscoreBetweenUppercaseLetters?**: `boolean`

Defined in: [plugin/camel-case/camel-case-plugin.ts:42](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L42)

If true, an underscore is added between consecutive upper case
letters when converting from camelCase to snake_case. For example
`fooBAR => foo_b_a_r` and `foo_b_a_r => fooBAR`.

Defaults to false.

***

### upperCase?

> `optional` **upperCase?**: `boolean`

Defined in: [plugin/camel-case/camel-case-plugin.ts:24](https://github.com/kysely-org/kysely/blob/master/src/plugin/camel-case/camel-case-plugin.ts#L24)

If true, camelCase is transformed into upper case SNAKE_CASE.
For example `fooBar => FOO_BAR` and `FOO_BAR => fooBar`

Defaults to false.
