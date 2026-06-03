'use client';

import { useParams } from "next/navigation";
import { useContext } from "react";
import { InvestmentsContext } from "@/contexts/InvestmentsContext";
import { Investment } from "@/models/Investment";

import NovoForm from "@/app/novo/NovoForm";

export default function Editar() {
    const params = useParams();
    const id = params.id;

    const { investments } = useContext(InvestmentsContext);

    const investmentToEdit = investments.find( elem => (elem as Investment).id === id);

    return (
        <NovoForm investmentToEdit={ investmentToEdit } />
    );
}