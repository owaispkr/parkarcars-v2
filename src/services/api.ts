import { supabase } from "../providers/supabase/supabaseClient";

export const getCars = async () => {
  const { data, error } = await supabase.from("Cars").select();
  if (error) {
    throw new Error(`Error return from Database ${error.message}`);
  }
  return data;
};
