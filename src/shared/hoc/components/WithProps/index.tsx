import React, { ComponentType } from 'react'

export const WithProps = <
  P extends Record<string, unknown>,
  TPropsKeys extends keyof P,
>(
  WrappedComponent: ComponentType<P>,
  defaultProps: Pick<P, TPropsKeys>
) => {
  function WithPropsComponent(props: Omit<P, keyof Pick<P, TPropsKeys>>) {
    // Merge the passed props with defaultProps
    const modifiedProps = {
      ...props,
      ...defaultProps,
    } as P

    // Render the WrappedComponent with the modified props
    return <WrappedComponent {...modifiedProps} />
  }

  // Return a new component with default props
  return WithPropsComponent
}
