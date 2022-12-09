import { Suspense } from 'react'

import RouterApp from './routes/mainRoute'

export default function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RouterApp />
    </Suspense>
  )
}
