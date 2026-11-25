import { Download, CalendarDays, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts'
import PageHeader from '../components/PageHeader'
import { monthlyData, categories } from '../data'
const money = n => n.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})
const COLORS = categories.map(c=>c.color)
export default function Reports() {
  return <>
    <PageHeader eyebrow="ANÁLISE FINANCEIRA" title="Relatórios" description="Visualize seus hábitos financeiros e compare os resultados por período." action={<button className="button button-outline"><Download size={16}/> Exportar relatório</button>}/>
    <div className="report-kpis"><div className="surface report-kpi"><span><TrendingUp size={16}/> Receitas acumuladas</span><strong>R$ 18.570,00</strong><small>Últimos 6 meses</small></div><div className="surface report-kpi"><span><TrendingDown size={16}/> Despesas acumuladas</span><strong>R$ 12.720,00</strong><small>Últimos 6 meses</small></div><div className="surface report-kpi"><span><PiggyBank size={16}/> Saldo do período</span><strong className="positive-text">R$ 5.850,00</strong><small>Economia acumulada</small></div></div>
    <div className="reports-grid"><section className="surface report-chart"><div className="section-heading"><div><h2>Receitas x despesas</h2><p>Evolução mensal dos valores</p></div><span className="period-chip"><CalendarDays size={14}/> Jun — Nov 2026</span></div><div className="report-bar-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthlyData}><CartesianGrid vertical={false} stroke="#edf0ed" strokeDasharray="3 3"/><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill:'#8b9690',fontSize:11}}/><YAxis axisLine={false} tickLine={false} tick={{fill:'#8b9690',fontSize:10}}/><Tooltip formatter={v=>money(v)}/><Bar dataKey="receitas" fill="#237a5a" radius={[4,4,0,0]}/><Bar dataKey="despesas" fill="#d9e3dc" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer></div></section>
    <section className="surface report-chart"><div className="section-heading"><div><h2>Despesas por categoria</h2><p>Distribuição dos gastos</p></div></div><div className="pie-area"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={categories} dataKey="amount" nameKey="name" innerRadius={57} outerRadius={82} paddingAngle={3}>{categories.map((c,i)=><Cell key={c.name} fill={COLORS[i]}/>)}</Pie><Tooltip formatter={v=>money(v)}/></PieChart></ResponsiveContainer></div><div className="pie-legend">{categories.slice(0,4).map((c,i)=><span key={c.name}><i style={{background:COLORS[i]}}/>{c.name}<b>{money(c.amount)}</b></span>)}</div></section></div>
    <div className="notice-line">Relatórios demonstrativos, calculados a partir de dados fictícios. A geração de relatórios reais dependerá da implementação do armazenamento.</div>
  </>
}
