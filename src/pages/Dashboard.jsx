import { ArrowUpRight, ArrowDownRight, Wallet, TrendingUp, ReceiptText, ArrowRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import PageHeader from '../components/PageHeader'
import TransactionTable from '../components/TransactionTable'
import { monthlyData, categories } from '../data'

const money = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
function Metric({ label, value, note, icon: Icon, tone, change }) {
  return <article className="metric-card"><div className="metric-top"><span>{label}</span><span className={`metric-icon ${tone}`}><Icon size={18}/></span></div><strong className="metric-value">{value}</strong><div className="metric-foot"><span className={change > 0 ? 'trend-up' : 'trend-neutral'}>{change > 0 ? <ArrowUpRight size={13}/> : <ArrowDownRight size={13}/>} {Math.abs(change)}%</span><span>{note}</span></div></article>
}
export default function Dashboard() {
  return <>
    <PageHeader eyebrow="QUARTA-FEIRA, 19 DE NOVEMBRO DE 2026" title="Visão geral" description="Acompanhe seus números e mantenha suas finanças em ordem." action={<button className="button button-outline"><CalendarDays size={16}/> Novembro 2026</button>}/>
    <section className="metric-grid">
      <Metric label="Saldo disponível" value={money(5240.35)} note="em relação ao mês passado" icon={Wallet} tone="dark" change={8.2}/>
      <Metric label="Receitas do mês" value={money(3270)} note="em relação ao mês passado" icon={TrendingUp} tone="green" change={4.5}/>
      <Metric label="Despesas do mês" value={money(1980.65)} note="em relação ao mês passado" icon={ReceiptText} tone="amber" change={-2.1}/>
    </section>
    <section className="dashboard-grid">
      <article className="surface chart-card"><div className="section-heading"><div><h2>Fluxo financeiro</h2><p>Comparativo de receitas e despesas</p></div><button className="select-static">Últimos 6 meses <span>⌄</span></button></div><div className="chart-legend"><span><i className="legend-income"/> Receitas</span><span><i className="legend-expense"/> Despesas</span></div><div className="main-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthlyData} barGap={7}><CartesianGrid vertical={false} stroke="#edf0ed" strokeDasharray="3 3"/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill:'#8b9690', fontSize:11 }}/><YAxis axisLine={false} tickLine={false} tick={{ fill:'#8b9690', fontSize:10 }} tickFormatter={v => `R$${v/1000}k`} width={45}/><Tooltip formatter={v => money(v)} contentStyle={{border:'1px solid #e8ece8',borderRadius:10,fontSize:12}}/><Bar dataKey="receitas" fill="#237a5a" radius={[4,4,0,0]} maxBarSize={17}/><Bar dataKey="despesas" fill="#d9e3dc" radius={[4,4,0,0]} maxBarSize={17}/></BarChart></ResponsiveContainer></div></article>
      <article className="surface budget-card"><div className="section-heading"><div><h2>Limites por categoria</h2><p>Consumo do orçamento mensal</p></div><Link to="/categorias" className="icon-link"><ArrowRight size={17}/></Link></div><div className="budget-list">{categories.slice(0,4).map(c => <div className="budget-item" key={c.name}><div className="budget-label"><span>{c.name}</span><strong>{Math.round(c.amount/c.limit*100)}%</strong></div><div className="progress-track"><span style={{width:`${Math.min(100,c.amount/c.limit*100)}%`,background:c.color}}/></div><small>{money(c.amount)} <em>de {money(c.limit)}</em></small></div>)}</div><Link to="/categorias" className="subtle-link">Ver todas as categorias <ArrowRight size={14}/></Link></article>
    </section>
    <section className="surface recent-card"><div className="section-heading"><div><h2>Movimentações recentes</h2><p>Últimas atividades registradas na conta</p></div><Link to="/movimentacoes" className="subtle-link">Ver movimentações <ArrowRight size={14}/></Link></div><TransactionTable limit={5}/></section>
  </>
}
