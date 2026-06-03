'use client';

import Link from 'next/link';
import { formatCurrency, formatDate } from "@/lib/utils";
import { useContext } from "react";
import { VisualizavelContext } from "@/contexts/VisualizavelContext";

import Trash2Icon from '@iconify-react/lucide/trash-2';
import EditIcon from '@iconify-react/lucide/edit';

export default function InvestmentCard(
    {investment } : { investment: any } ) 
{
    const { visualizavel } = useContext(VisualizavelContext);

    return (
        <div className="bg-white shadow-md rounded-lg p-4 relative">
            <div className="flex justify-between items-center">
                <h3 className="investment-name text-lg font-semibold text-gray-700">
                    {investment.name}
                </h3>
                <p className="investment-value text-lg font-semibold text-gray-700">
                    { visualizavel ? formatCurrency(investment.value / 100) : '***'}
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
            <Link
                href={`/editar/${investment.id}`}
                data-id={investment.id}
                className="absolute bottom-3 right-9 text-gray-300 hover:text-red-400 transition-colors"
                title="Editar investimento"
            >
                <EditIcon height="1em" />
            </Link>
            <button
                data-id={investment.id}
                className="absolute bottom-3 right-3 text-gray-300 hover:text-red-400 transition-colors"
                title="Remover investimento"
            >
                <Trash2Icon height="1em" />
            </button>
        </div>
    );
}