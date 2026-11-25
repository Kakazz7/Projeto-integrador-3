import { NavLink } from 'react-router-dom'
import { LayoutDashboard, ArrowLeftRight, Tags, ChartNoAxesCombined, Target, CircleHelp, Settings, Bell, ChevronDown, Wallet } from 'lucide-react'

const nav = [
  { to: '/', label: 'Visão geral', icon: LayoutDashboard, end: true },
  { to: '/movimentacoes', label: 'Movimentações', icon: ArrowLeftRight },
  { to: '/categorias', label: 'Categorias', icon: Tags },
  { to: '/relatorios', label: 'Relatórios', icon: ChartNoAxesCombined },
  { to: '/planejamento', label: 'Planejamento', icon: Target },
]

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand"><span className="brand-symbol"><Wallet size={19}/></span><span>finora</span></div>
        <div className="workspace-label">ESPAÇO PESSOAL</div>
        <nav className="main-nav">
          {nav.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <Icon size={18} strokeWidth={1.8}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card"><div className="help-icon"><CircleHelp size={17}/></div><strong>Precisa de ajuda?</strong><p>Consulte as informações do projeto.</p><a href="#sobre">Central de ajuda <span>↗</span></a></div>
          <button className="nav-item muted-nav"><Settings size={18}/><span>Configurações</span></button>
          <div className="profile-row"><div className="avatar">KC</div><div className="profile-copy"><strong>Conta pessoal</strong><small>Usuário demonstrativo</small></div><ChevronDown size={15}/></div>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">Finora <span>/</span> <strong>Painel financeiro</strong></div>
          <div className="topbar-actions"><span className="demo-label"><i/> AMBIENTE DE DEMONSTRAÇÃO</span><button className="icon-button" aria-label="Notificações"><Bell size={18}/><i/></button><div className="top-avatar">KC</div></div>
        </header>
        <div className="page-content">{children}</div>
        <footer className="app-footer"><span>FINORA <b>•</b> PROJETO INTEGRADOR 3</span><span>Protótipo de interface · Dados ilustrativos</span></footer>
      </main>
    </div>
  )
}
