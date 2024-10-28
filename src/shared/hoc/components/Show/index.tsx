import React, { ReactNode, Children, FC, ReactElement } from 'react'

type ShowProps = {
  children: ReactNode
  onlyIf?: boolean
  showAll?: boolean
}

type WhenProps = {
  isTrue: boolean
  children: ReactNode
}

type ElseProps = {
  isTrue?: undefined
  children: ReactNode
}

type ShowComponent = FC<ShowProps> & {
  /**
   * The When component is used inside the Show component to conditionally render its children when the specified condition is true.
   * @param props.isTrue The condition to determine if the children should be rendered.
   *
   * @example
   * // Using the When component to conditionally render content.
   * <Show.When isTrue={isConditionMet}>Render this content if the condition is true</Show.When>
   */
  When: FC<WhenProps>

  /**
   * The Else component is used inside the Show component to conditionally render its children when no matching When condition is true.
   *
   * @example
   * // Using the Else component to conditionally render content when no matching When condition is true.
   * <Show.Else>Render this content if none of the conditions are true</Show.Else>
   */
  Else: FC<ElseProps>
}

/**
 * @todo Remove as react element - figure out solution
 * The Show component allows conditional rendering of its children based on a provided condition.
 * It can render all matching When components or only the first one.
 *
 * @param props - The component props.
 * @param props.children - The child elements to be conditionally rendered.
 * @param [props.onlyIf=true] - Whether to conditionally render the content based on the `isTrue` prop.
 * @param [props.showAll=false] - Whether to show all `When` components that match the condition or only the first one.
 * @returns The rendered content based on the conditions.
 *
 * @example
 * // Rendering content conditionally based on a boolean variable.
 * <Show onlyIf={isConditionMet}>
 *   <Show.When isTrue>Render this content if the condition is true</Show.When>
 *   <Show.Else>Render this content if the condition is false</Show.Else>
 * </Show>
 *
 * @example
 * // Rendering multiple components based on a condition.
 * <Show onlyIf={isConditionMet} showAll>
 *   <Show.When isTrue>Render this content if the condition is true</Show.When>
 *   <Show.When isTrue>Render this content if the condition is true</Show.When>
 *   <Show.When isTrue>Render this content if the condition is true</Show.When>
 *   <Show.Else>Render this content if none of the conditions are true</Show.Else>
 * </Show>
 */
export const Show: ShowComponent = ({
  children,
  onlyIf = true,
  showAll = false,
}) => {
  const when: ReactNode[] = []
  let otherwise: ReactNode = null

  Children.forEach(children, (child) => {
    if (React.isValidElement<WhenProps | ElseProps>(child)) {
      if (child.props.isTrue === undefined) {
        otherwise = child
      } else if (onlyIf && child.props.isTrue) {
        when.push(child)
      }
    }
  })

  if (!when.length) {
    return otherwise
  }

  return (showAll ? when : when[0]) as ReactElement
}

Show.When = ({ isTrue, children }) => (isTrue ? children : null) as ReactElement

Show.Else = ({ children }) => children as ReactElement
