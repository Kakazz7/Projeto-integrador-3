import { Search, SlidersHorizontal, Download, Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import TransactionTable from '../components/TransactionTable'

export default function Transactions() {
  return <>
    <PageHeader eyebrow="CONTROLE DE ENTRADAS E SAÍDAS" title="Movimentações" description="Consulte os lançamentos e acompanhe o histórico financeiro." action={<button className="button button-primary"><Plus size={16}/> Nova movimentação</button>}/>
    <div className="summary-strip"><div><span>Total de lançamentos</span><strong>07</strong></div><div><span>Entradas no período</span><strong className="positive-text">R$ 3.270,00</strong></div><div><span>Saídas no período</span><strong>R$ 633,55</strong></div></div>
    <section className="surface page-table-card"><div className="table-toolbar"><div className="search-box"><Search size={16}/><input placeholder="Buscar movimentação..." /></div><div className="toolbar-actions"><button className="button button-outline"><SlidersHorizontal size={15}/> Filtros</button><button className="button button-outline"><Download size={15}/> Exportar</button></div></div><TransactionTable/></section>
    <div className="notice-line">Os lançamentos exibidos são exemplos para demonstrar a organização da tela. O cadastro e a persistência serão conectados ao banco de dados em uma etapa futura.</div>
  </>
}
