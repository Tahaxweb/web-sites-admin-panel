import { create } from "@/app/actions/editorActions";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import React from "react";

function page() {
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
    </div>
  );
}

export default page;
