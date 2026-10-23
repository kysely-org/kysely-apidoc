import assert from 'node:assert/strict'
import { test } from 'node:test'
import { applySourceMappings } from './source-documentation-lines.mjs'

test('maps source lines and URLs after multiple comment expansions', () => {
  const source = {
    fullFileName: '/kysely/src/query.ts',
    line: 40,
    url: 'https://github.com/kysely-org/kysely/blob/master/src/query.ts#L40',
  }
  const before = { fullFileName: '/kysely/src/query.ts', line: 3 }
  const unchanged = { fullFileName: '/kysely/src/other.ts', line: 40 }
  const project = {
    reflections: { 1: { sources: [source, before, unchanged] } },
  }
  applySourceMappings(
    project,
    {
      'query.ts': [
        [10, 5],
        [30, 12],
      ],
    },
    '/kysely/src',
  )
  assert.equal(source.line, 28)
  assert.equal(
    source.url,
    'https://github.com/kysely-org/kysely/blob/master/src/query.ts#L28',
  )
  assert.equal(before.line, 3)
  assert.equal(unchanged.line, 40)
})

test('does not adjust a source reference shared by multiple reflections twice', () => {
  const source = { fullFileName: '/kysely/src/query.ts', line: 40 }
  const project = {
    reflections: { 1: { sources: [source] }, 2: { sources: [source] } },
  }
  applySourceMappings(project, { 'query.ts': [[30, 12]] }, '/kysely/src')
  assert.equal(source.line, 28)
})
