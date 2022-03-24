import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PokemonPage from '../../pages/PokemonPage/PokemonPage'
import SearchPage from '../../pages/SearchPage/SearchPage'

export default function RouterProvider() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/pokemon" element={<PokemonPage />} />
                <Route path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </Router>
    )
}
