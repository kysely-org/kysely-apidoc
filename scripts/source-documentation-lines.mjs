import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Converter } from 'typedoc'

const kyselyPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../kysely',
)

/** Keep source links pointed at authored lines after source JSDoc expansion. */
export function applySourceMappings(project, mappings, sourceDirectory) {
  const visited = new WeakSet()
  for (const reflection of Object.values(project.reflections)) {
    for (const source of reflection.sources ?? []) {
      if (visited.has(source)) continue
      visited.add(source)
      const file = path
        .relative(sourceDirectory, source.fullFileName)
        .split(path.sep)
        .join('/')
      const changes = mappings[file]
      const offset =
        changes?.findLast(([line]) => line <= source.line)?.[1] ?? 0
      if (!offset) continue
      source.line -= offset
      if (source.url)
        source.url = source.url.replace(/#L\d+$/, `#L${source.line}`)
    }
  }
}

export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    const mappings = JSON.parse(
      fs.readFileSync(
        path.join(kyselyPath, 'dist/source-documentation-lines.json'),
        'utf8',
      ),
    )
    applySourceMappings(context.project, mappings, path.join(kyselyPath, 'src'))
  })
}
