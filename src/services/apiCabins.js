import supabase, { supabaseUrl } from "./supabaseClient";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
export async function deleteCabin(id, image) {
  const imagePath = `cabin-images${image.substring(image.lastIndexOf("/"))}`;
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  const { error: imageDeleteError } = await supabase.storage
    .from("cabin-images")
    .remove([imagePath]);
  if (imageDeleteError) {
    console.log("Cabin image not deleted, try doing it manually");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //https://znmhcjkrdunvdsxlvges.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");
  if (!id)
    // query = query.insert([
    //   {
    //     name: newCabin.name,
    //     max_capacity: newCabin.maxCapacity,
    //     regular_price: newCabin.regularPrice,
    //     discount: newCabin.discount,
    //     description: newCabin.description,
    //     image_url: imagePath,
    //   },
    // ]);
    query = query.insert([{ ...newCabin, image: imagePath }]);
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  // .update({
  //   name: newCabin.name,
  //   max_capacity: newCabin.maxCapacity,
  //   regular_price: newCabin.regularPrice,
  //   discount: newCabin.discount,
  //   description: newCabin.description,
  //   image_url: imagePath,
  // })
  // .eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabin image could not be uploaded, cabin was not created");
  }
  //console.log(data);
  return data;
}
