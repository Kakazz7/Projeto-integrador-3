import { ArrowDownLeft, ArrowUpRight, MoreHorizontal } from 'lucide-react'
import { transactions } from '../data'

const money = n => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Math.abs(n))

export default function TransactionTable({ limit }) {
  const items = limit ? transactions.slice(0, limit) : transactions
  return <div className="table-wrap"><table className="data-table"><thead><tr><th>DESCRIÇÃO</th><th>CATEGORIA</th><th>DATA</th><th className="align-right">VALOR</th><th></th></tr></thead><tbody>
    {items.map(item => <tr key={item.id}><td><div className="transaction-name"><span className={`transaction-avatar ${item.type}`}>{item.type === 'income' ? <ArrowDownLeft size={16}/> : <ArrowUpRight size={16}/>}</span><strong>{item.title}</strong></div></td><td><span className="category-pill">{item.category}</span></td><td className="date-cell">{item.date}</td><td className={`amount-cell align-right ${item.type}`}>{item.type === 'income' ? '+' : '−'} {money(item.amount)}</td><td><button className="more-button" aria-label="Mais opções"><MoreHorizontal size={18}/></button></td></tr>)}
  </tbody></table></div>
}
