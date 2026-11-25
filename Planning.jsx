import { Target, Plus, CalendarCheck, CircleCheck, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
const goals = [
  {name:'Reserva de emergência',detail:'Guardar o equivalente a 3 meses de despesas.',current:1800,target:5000,color:'#237a5a',date:'Meta: março de 2027'},
  {name:'Notebook novo',detail:'Planejar a compra sem comprometer as contas do mês.',current:1250,target:3500,color:'#7893ad',date:'Meta: junho de 2027'},
  {name:'Viagem de férias',detail:'Separar uma quantia mensal para lazer.',current:620,target:1500,color:'#bd9861',date:'Meta: dezembro de 2027'},
]
const money=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
export default function Planning(){
  return <>
    <PageHeader eyebrow="OBJETIVOS E METAS" title="Planejamento" description="Defina prioridades e acompanhe o progresso dos seus objetivos financeiros." action={<button className="button button-primary"><Plus size={16}/> Nova meta</button>}/>
    <div className="planning-highlight surface"><div className="goal-highlight-icon"><Target size={22}/></div><div><span>PROGRESSO GERAL DAS METAS</span><strong>R$ 3.670,00 <small>de R$ 10.000,00</small></strong><div className="progress-track highlight-track"><span style={{width:'36.7%'}}/></div><p>Você já alcançou 36,7% do valor planejado.</p></div><div className="highlight-side"><b>3 metas</b><span>em andamento</span></div></div>
    <div className="section-title-row"><div><h2>Suas metas</h2><p>Acompanhe cada objetivo individualmente.</p></div><span className="period-chip"><CalendarCheck size={14}/> Planejamento pessoal</span></div>
    <div className="goals-grid">{goals.map((g,i)=><article className="surface goal-card" key={g.name}><div className="goal-card-top"><span className="goal-index">0{i+1}</span><span className="goal-status"><i/> Em andamento</span></div><h3>{g.name}</h3><p>{g.detail}</p><div className="goal-values"><strong>{money(g.current)}</strong><span>de {money(g.target)}</span></div><div className="progress-track large"><span style={{width:`${g.current/g.target*100}%`,background:g.color}}/></div><div className="goal-card-foot"><span>{g.date}</span><span>{Math.round(g.current/g.target*100)}%</span></div></article>)}</div>
    <div className="notice-line">As metas são exemplos de apresentação. A criação, atualização e o acompanhamento automático serão conectados ao banco de dados futuramente.</div>
  </>
}
