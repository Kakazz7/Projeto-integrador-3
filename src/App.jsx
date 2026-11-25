import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Categories from './pages/Categories'
import Reports from './pages/Reports'
import Planning from './pages/Planning'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movimentacoes" element={<Transactions />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/planejamento" element={<Planning />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
