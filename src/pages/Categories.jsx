import { Utensils, CarFront, House, Clapperboard, HeartPulse, BookOpen, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { categories } from '../data'
const icons = [Utensils, CarFront, House, Clapperboard, HeartPulse, BookOpen]
const money = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export default function Categories() {
  return <>
    <PageHeader eyebrow="ORGANIZAÇÃO DOS GASTOS" title="Categorias" description="Entenda para onde vai seu dinheiro e acompanhe os limites definidos." action={<button className="button button-outline">Gerenciar categorias</button>}/>
    <div className="summary-strip"><div><span>Categorias cadastradas</span><strong>06</strong></div><div><span>Orçamento total</span><strong>R$ 2.700,00</strong></div><div><span>Valor utilizado</span><strong>R$ 1.939,70</strong></div></div>
    <div className="category-grid">{categories.map((c,i) => {const Icon=icons[i];const pct=Math.round(c.amount/c.limit*100);return <article className="surface category-card" key={c.name}><div className="category-card-top"><span className="category-icon" style={{color:c.color,background:`${c.color}18`}}><Icon size={19}/></span><span className="category-percent">{pct}% utilizado</span></div><h2>{c.name}</h2><div className="category-amount">{money(c.amount)} <small>/ {money(c.limit)}</small></div><div className="progress-track large"><span style={{width:`${pct}%`,background:c.color}}/></div><div className="category-bottom"><span>Limite mensal</span><button aria-label={`Ver ${c.name}`}><ArrowUpRight size={16}/></button></div></article>})}</div>
    <div className="notice-line">Os limites e valores são ilustrativos. A configuração e o cálculo automático serão implementados com a integração do banco de dados.</div>
  </>
}
