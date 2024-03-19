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

export async function edit(formData: FormData) {
  // Form verilerinden "newTitle" ve "inputId" adındaki değerleri alıp string olarak alıyoruz
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  // Veritabanında "inputId" ile eşleşen "todo"yu bulup, "title" alanını günceller
  await prisma.editorElement.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  // Veriyi yenilemek veya güncellemek için Next.js'te "/"" yolunu yeniden getirir
  revalidatePath("/");
}
