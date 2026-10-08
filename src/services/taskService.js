import { supabase } from "../lib/supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("tasks").select("*");

  console.log(error, data);

  if (error) {
    throw error;
  }

  return data;
}

export async function createTask(task) {

  const { data, error } = await supabase
    .from("tasks")
    .insert(task)
    .select()
    .single()

  if (error) {
    throw error;
  }

  return data

}

export async function updateTasks(taskId, task) {
  const { data, error } = await supabase
    .from("tasks")
    .update(task)
    .eq("id", taskId)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteTask(taskId) {
  const { data, error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", taskId)
    .select()
    .single();
  if (error) {
    throw error;
  }
  return data;
}