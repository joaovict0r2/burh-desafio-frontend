export default function formatCurrency(value: number | undefined) {
  return new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  }).format(value as number)
}