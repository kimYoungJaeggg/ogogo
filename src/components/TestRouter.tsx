import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TestB from '../pages/TestB'
import TestA from '../pages/TestA'

const TestRouter = () => {
  return (

    <Routes>
      <Route path="/test-A" element={<TestA />} />
      <Route path="/test-B" element={<TestB />} />
    </Routes>
  )
}

export default TestRouter