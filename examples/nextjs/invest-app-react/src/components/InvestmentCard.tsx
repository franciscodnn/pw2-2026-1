import { formatCurrency, formatDate } from "@/lib/utils";

export default function InvestmentCard({investment, id2}: any) {
    // const investment = props.investment;
    // const id = props.id;

    console.log(id2);

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
        </div>
    );
}