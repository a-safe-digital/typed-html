import { Props, Component } from './types'
import { jsx } from './jsx-runtime'

export function createElement (
  name: string | Component,
  properties: Props | undefined = {},
  ...contents: string[]
) {
  const { children: childs, ...props } = (properties ?? {})
  const children: string[] = [...contents.flat()]

  if (Array.isArray(childs)) {
    childs.forEach((child) => children.push(child))
  }

  const forwardProps = children.length === 0 ? props : { children, ...props }
  if (typeof name === 'function') {
    return name(forwardProps);
  }

  return jsx(name, forwardProps)
}
