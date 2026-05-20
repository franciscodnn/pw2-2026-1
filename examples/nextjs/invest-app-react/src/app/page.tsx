import Image from "next/image";
import Header from "@/components/header";
import InvestmentCard from "@/components/InvestmentCard";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function Home() {
  const investment = {
    id: 'b9f2414d-b8dd-484d-8179-83383d10a3fd',
    name: 'Tesouro Selic 2029',
    value: 10050,
    origin: 'Tesouro Nacional',
    category: 'Pós',
    created_at: '2023-08-22T00:00:00-03:00',
    interest: '100% Selic',
  };

  return (
  <div className="container mx-auto lg:max-w-screen-lg">
    <Header />    
    <div className="investments grid grid-cols-3 gap-3">
        { /* Investimentos serão preenchidos dinamicamente */ }
        <InvestmentCard investment={investment} id="1" />
    </div>
  </div>
  );
}
