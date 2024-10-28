type Props = {
  children?: React.ReactNode
  show?: boolean
}

export const WithLoading = (Component: React.FC) =>
  function WithLoading({ show, children }: Props) {
    if (!show) {
      return children
    }

    return <Component />
  }
