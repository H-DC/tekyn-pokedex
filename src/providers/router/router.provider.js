import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from '../../pages/SearchPage/SearchPage'

export default function RouterProvider() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
            </Routes>
        </Router>
    )
}
