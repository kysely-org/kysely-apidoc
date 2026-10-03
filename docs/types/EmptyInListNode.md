[**kysely**](../index.md)

***

[kysely](../modules.md) / EmptyInListNode

# Type Alias: EmptyInListNode

> **EmptyInListNode** = [`BinaryOperationNode`](../interfaces/BinaryOperationNode.md) & `object`

Defined in: [plugin/handle-empty-in-lists/handle-empty-in-lists.ts:19](https://github.com/kysely-org/kysely/blob/master/src/plugin/handle-empty-in-lists/handle-empty-in-lists.ts#L19)

## Type Declaration

### operator

> **operator**: [`OperatorNode`](../interfaces/OperatorNode.md) & `object`

#### Type Declaration

##### operator

> **operator**: `"in"` \| `"not in"`

### rightOperand

> **rightOperand**: [`ValueListNode`](../interfaces/ValueListNode.md) \| [`PrimitiveValueListNode`](../interfaces/PrimitiveValueListNode.md) & `object`

#### Type Declaration

##### values

> **values**: `Readonly`\<\[\]\>
