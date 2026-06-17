import { Investment } from "@/models/Investment";
import supabase from "@/services/supabase";

async function create(resource: string, data: Omit<Investment, 'id' | 'created_at'>) {
  const { data: createdData, error } = await supabase
    .from(resource)
    .insert(data)
    .select('*');
 
  if (error) {
    throw error;
  }
 
  return createdData?.[0];
}
 

async function read(resource: string, id: string | number | null = null) {
  const { data, error } = id
    ? await supabase.from(resource).select('*').eq('id', id)
    : await supabase.from(resource).select('*');
 
  if (error) {
    throw error;
  }
 
  return data;
}

export default { create, read };