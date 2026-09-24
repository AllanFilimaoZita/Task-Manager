import { supabase } from "../lib/supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("tasks").select("*");

  console.log(error, data);

  if (error) {
    throw error;
  }

  return data;
}
