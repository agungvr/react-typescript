import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/Home'))

function App(): JSX.Element {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </Suspense>
  )
}

export default App
