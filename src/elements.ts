import type { Props, Component } from './types.js'
import { jsx } from './jsx-runtime.js'

export function createElement (
  name: string | Component,
  properties: Props | undefined = {},
  ...contents: string[]
): string {
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
