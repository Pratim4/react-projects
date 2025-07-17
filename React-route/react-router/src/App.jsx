import { useState } from 'react'


import Home from './pages/Home'

import Layout from './Components/Layout'

function App() {
  const [pages, setPage] = useState(<Home />)

  return (
    <>
      <Layout setPage={setPage}>
        {pages}
      </Layout>

    </>
  )
}


export default App
