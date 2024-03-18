import Container from "@/components/Container";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

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

export default async function Home() {
  const data = await getData();
  return (
    <Container variant="7xl">
      <h1 className=" text-2xl font-bold  my-12">İçerik 1 </h1>
      <div className="grid w-full  grid-cols-2  gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((data, id) => (
          <div
            className=" w-full h-80 rounded-md shadow border p-7 flex flex-col gap-4"
            key={id}
          >
            <h3 className=" text-xl font-medium">{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
