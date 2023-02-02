export const formatPrices = (price:number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        maximumFractionDigits: 0,
        currency: 'BRL'
    }).format(price)
}