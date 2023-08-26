import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

// adapted from https://github.dev/dsherret/ts-ast-viewer/blob/c71e238123d972bae889b3829e23b44f39d8d5c2/site/src/utils/UrlSaver.ts#L1-L29
function getDecompressedStringFromUrl(name: string) {
  if (typeof window === 'undefined') return

  const search = new URLSearchParams(window.location.search)
  const code = (search.get(name) ?? '').trim()
  return decompressFromEncodedURIComponent(code) ?? '' // will be null on error
}

function updateUrlWithCompressedString(name: string, value: string) {
  if (value.length === 0) {
    updateUrlWithParam(name, '')
  } else {
    const compressed = compressToEncodedURIComponent(value)
    const url = new URL(window.location.href)
    url.searchParams.set(name, compressed)

    // completely arbitrary limit of characters, but it appears to not work anymore around that
    if (url.toString().length >= 14_500) {
      throw new Error('The compressed string is too large to be stored in the URL.')
    } else {
      updateUrlWithParam(name, compressed)
    }
  }
}

function updateUrlWithParam(name: string, value: string | number) {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  url.searchParams.set(name, String(value))
  window.history.replaceState(undefined, '', url)
}

const resetUrl = () => {
  if (typeof window === 'undefined') return

  window.history.replaceState(undefined, '', window.location.origin + window.location.pathname)
}

const deletingParamInUrl = (name: string) => {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  url.searchParams.delete(name)
  window.history.replaceState(undefined, '', url)
}

export class UrlSaver {
  getValue(name: string) {
    return getDecompressedStringFromUrl(name)
  }

  setValue(name: string, value: string) {
    updateUrlWithCompressedString(name, value)
  }

  reset(name: string) {
    deletingParamInUrl(name)
  }

  resetAll() {
    resetUrl()
  }
}
