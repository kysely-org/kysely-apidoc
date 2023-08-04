const fs = require('fs')
const path = require('path')

const DOCS_PATH = path.join(__dirname, '..', 'docs')
const DOCS_ASSET_PATH = path.join(DOCS_PATH, 'assets')

const ASSET_PATH = path.join(__dirname, '..', '..', 'kysely', 'assets')

// Files to go through and replace ASSET_URL_BASE with FIXED_ASSET_URL_BASE.
const ASSET_FIX_FILES = [path.join(DOCS_PATH, 'index.html')]
const FIXED_ASSET_URL_BASE = 'assets'

// Copy all assets to doc assets.
for (const assetName of fs.readdirSync(ASSET_PATH)) {
  fs.copyFileSync(
    path.join(ASSET_PATH, assetName),
    path.join(DOCS_ASSET_PATH, assetName)
  )
}

// Fix asset urls.
for (const filePath of ASSET_FIX_FILES) {
  const file = fs
    .readFileSync(filePath)
    .toString()
    .replace(
      /https:\/\/github.com\/kysely-org\/kysely\/blob\/master\/assets/g,
      FIXED_ASSET_URL_BASE
    )

  fs.writeFileSync(filePath, file)
}
