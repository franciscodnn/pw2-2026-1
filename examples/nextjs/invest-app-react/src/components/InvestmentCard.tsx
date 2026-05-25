import { formatCurrency, formatDate } from "@/lib/utils";

export default function InvestmentCard(
    {investment, classe } : { investment: any, classe?: string} ) 
{
    // const investment = props.investment;
    // const id = props.id;

    // console.log(id);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 relative">
            <div className="flex justify-between items-center">
                <h3 className="investment-name text-lg font-semibold text-gray-700">
                    {investment.name}
                </h3>
                <p className="investment-value text-lg font-semibold text-gray-700">
                    {formatCurrency(investment.value / 100)}
                </p>
            </div>
            <div className="mt-4">
                <p className="text-sm text-gray-500">
                    <span className="font-bold mr-1">Origem:</span>
                    <span className="investment-origin">{investment.origin}</span>
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-bold mr-1">Categoria:</span>
                    <span className="investment-category">{investment.category}</span>
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-bold mr-1">Taxa:</span>
                    <span className="investment-interest">{investment.interest}</span>
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-bold mr-1">Data:</span>
                    <span className="investment-created_at">
                        {formatDate(investment.created_at)}
                    </span>
                </p>
            </div>
            <button
                data-id={investment.id}
                className="absolute bottom-3 right-3 text-gray-300 hover:text-red-400 transition-colors"
                title="Remover investimento"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    );
}