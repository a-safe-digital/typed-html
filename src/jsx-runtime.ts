import { PropValue, Component, Children, Props } from './types'

const capitalACharCode = 'A'.charCodeAt(0)
const capitalZCharCode = 'Z'.charCodeAt(0)

function isUpper (input: string, index: number): boolean {
  const charCode = input.charCodeAt(index)
  return capitalACharCode <= charCode && capitalZCharCode >= charCode
}

function toKebabCase (camelCased: string): string {
  let kebabCased = ''
  for (let i = 0; i < camelCased.length; i++) {
    const prevUpperCased = i > 0 ? isUpper(camelCased, i - 1) : true
    const currentUpperCased = isUpper(camelCased, i)
    const nextUpperCased = i < camelCased.length - 1 ? isUpper(camelCased, i + 1) : true
    if (!prevUpperCased && currentUpperCased || currentUpperCased && !nextUpperCased) {
      kebabCased += '-'
      kebabCased += camelCased[i].toLowerCase()
    } else {
      kebabCased += camelCased[i]
    }
  }
  return kebabCased
}

function escapeAttrNodeValue (value: string): string {
  return value.replace(/(&)|(")|(\u00A0)/g, function (_, amp, quote) {
    if (amp) return '&amp;'
    if (quote) return '&quot;'
    return '&nbsp;'
  })
}

function propToString (name: string, value: PropValue): string {
  const formattedName = toKebabCase(name)
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

const propsToString = (props?: Props): string => {
  if (props === undefined) {
    return ''
  }
  return ` ${Object.entries(props)
    .filter(([k]) => k !== 'children') // filter out children props
    .map(([k, v]) => propToString(k, v))
    .filter(prop => prop.length) // filter out undefined/negative boolean props
    .join(' ')}`
}

function isVoidTag (tagName: string) {
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
  name: string | Component,
  props: Props & Children = {},
) {
  if (typeof name === 'function') {
    return name(props)
  }

  const tagName = toKebabCase(name)
  if (isVoidElement(tagName, props)) {
    return `<${tagName}${propsToString(props)}>`
  } else {
    return `<${tagName}${propsToString(props)}>${[props.children].flat().join('')}</${tagName}>`
  }
}

export { jsx as jsxs }
