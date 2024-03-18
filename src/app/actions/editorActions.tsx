"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../../../utils/prisma";

export async function create(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await prisma.editorElement.create({
    data: {
      title,
      description,
    },
  });

  revalidatePath("/");
}
