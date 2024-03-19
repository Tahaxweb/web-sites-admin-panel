import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import React from "react";
import { edit, deleteElement, create } from "@/app/actions/editorActions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.editorElement.findMany({
    select: {
      id: true,
      title: true,
      description: true,
    },
  });

  return data;
}
async function page() {
  const data = await getData();
  return (
    <div>
      <Form action={create}>
        <div className="   mt-12  max-w-xl mx-auto">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl text-center font-bold">Editor</h1>
            <Input name="title" type="text" placeholder="title içerigi" />
            <Input
              name="description"
              type="text"
              placeholder="description içerigi"
            />

            <Button type="submit" text="Gönder" />
          </div>
        </div>
      </Form>
      <div className="grid mt-12 grid-cols-1 gap-6 mx-6 md:grid-cols-3 lg:grid-cols-5">
        {data.map((data, id) => (
          <div className="w-full border rounded-xl p-5 h-40 ">
            <h3 className="text-xl font-medium">{data.title}</h3>

            <p>{data.description}</p>
            <Form action={edit}>
              <Input name="inputId" value={data.id} type="hidden" />
              <div className="flex justify-center">
                <Input type="text" name="newTitle" placeholder="Edit Todo..." />

                <Button type="submit" text="Save" />
              </div>
            </Form>
            <div className="mt-2">
              <Form action={deleteElement}>
                <input type="hidden" name="inputId" value={data.id} />
                <Button text={"delelte"} type="submit" />
              </Form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
