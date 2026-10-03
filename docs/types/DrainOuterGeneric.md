[**kysely**](../index.md)

***

[kysely](../modules.md) / DrainOuterGeneric

# Type Alias: DrainOuterGeneric\<T\>

> **DrainOuterGeneric**\<`T`\> = \[`T`\] *extends* \[`unknown`\] ? `T` : `never`

Defined in: [util/type-utils.ts:217](https://github.com/kysely-org/kysely/blob/master/src/util/type-utils.ts#L217)

Utility to reduce depth of TypeScript's internal type instantiation stack.

Example:

```ts
type A<T> = { item: T }

type Test<T> = A<
  A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<T>>>>>>>>>>>>>>>>>>>>>>>>
>

// type Error = Test<number> // Type instantiation is excessively deep and possibly infinite.ts (2589)
```

To fix this, we can use `DrainOuterGeneric`:

```ts
type A<T> = DrainOuterGeneric<{ item: T }>

type Test<T> = A<
 A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<A<T>>>>>>>>>>>>>>>>>>>>>>>>
>

type Ok = Test<number> // Ok
```

## Type Parameters

### T

`T`
