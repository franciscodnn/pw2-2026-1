export function formatCurrency(currency: number) {
    return currency.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR');
}