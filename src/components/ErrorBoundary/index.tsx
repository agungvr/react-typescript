import { Component, ReactNode } from 'react'

interface State {
  hasError: boolean
  error?: Error
}

interface Props {
  children: ReactNode
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props

    if (hasError && error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

export default ErrorBoundary
