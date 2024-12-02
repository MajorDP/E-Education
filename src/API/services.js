import supabase from "./supabase";

export async function getGuides() {
  let { data: lessons, error } = await supabase.from("lessons").select("*");

  return lessons;
}
