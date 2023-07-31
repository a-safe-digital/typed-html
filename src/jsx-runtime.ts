import { PropValue, Component, Children, Props } from './types'

function camelToKebabCase (s: string): string {
    return s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function escapeAttrNodeValue (value: string): string {
  return value.replace(/(&)|(")|(\u00A0)/g, function (_, amp, quote, nbsp) {
    if (amp) return '&amp;'
    if (quote) return '&quot;'
    if (nbsp) return '&nbsp;'
    return ''
  })
}

function propToString (name: string, value: PropValue): string {
  const formattedName = camelToKebabCase(name)
  const makeAttribute = (value: string) => `${formattedName}="${value}"`

  if (value === undefined) {
    return ''
  }
  if (value === false) {
    return ''
  }
  if (value === true) {
    return formattedName
  }
  if (value instanceof Date) {
    return makeAttribute(value.toISOString())
  }

  return makeAttribute(escapeAttrNodeValue(value.toString()))
}

function propsToString (props?: Props): string {
  if (props === undefined) {
    return ''
  }
  return ` ${Object.entries(props)
    .filter(([k]) => k !== 'children') // filter out children props
    .map(([k, v]) => propToString(k, v))
    .filter(prop => prop.length) // filter out undefined/negative boolean props
    .join(' ')}`
}

function isVoidTag (tagName: string): boolean {
  return [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr'
  ].indexOf(tagName) > -1
}

function isVoidElement (tagName: string, { children }: Children): boolean {
  if (!isVoidTag(tagName)) return false
  if (children === undefined) return true
  if (children === '') return true
  if (children === false) return true
  if (children === null) return true
  if (Array.isArray(children) && children.length === 0) return true
  return false
}

export function jsx (
  name: undefined | string | Component,
  props: Props & Children = {},
): string {
  if (typeof name === 'function') {
    return name(props)
  }

  if (name === '' || name === undefined) {
    if (typeof props.children === 'string') return props.children
    if (Array.isArray(props.children)) return props.children.join('')
    return ''
  }

  const tagName = camelToKebabCase(name)
  if (isVoidElement(tagName, props)) {
    return `<${tagName}${propsToString(props)}>`
  } else {
    return `<${tagName}${propsToString(props)}>${[props.children].flat().join('')}</${tagName}>`
  }
}

export { jsx as jsxs }
