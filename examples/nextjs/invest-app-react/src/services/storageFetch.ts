import { Investment } from "@/models/Investment";

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL! + '/rest/v1';
const API_TOKEN = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function create(resource: string, data: Omit<Investment, 'id' | 'created_at'>) {
  resource = `${API_URL}/${resource}`;
 
  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };

  const res = await fetch(resource, options);
 
  const createdData = await res.json();
 
  return createdData?.[0];
}
 

async function read(resource: string, id: string | number | null = null) {
  resource = id
    ? `${API_URL}/${resource}?id=eq.${id}`
    : `${API_URL}/${resource}`;
 
  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'GET',
  };
 
  const res = await fetch(resource, options);
 
  return await res.json();
}

export default { create, read };