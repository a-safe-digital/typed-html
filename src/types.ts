export type PropValue = undefined | number | string | Date | boolean | string[]

export type Children = {
  children?: PropValue
}

export type Props = Record<string, PropValue>

export type Component <T extends Props = Props> = (props: T & Children) => string
