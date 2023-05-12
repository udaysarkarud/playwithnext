"use client";
import { useForm } from "react-hook-form";
interface IFormData {
  name: string;
  email: string;
}
export default async function Page() {
  const { handleSubmit, register } = useForm();

  const addToDB = async (data: IFormData) => {
    const dd = await fetch("http://localhost:3000/api/create", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    document.querySelector("form")?.reset();
  };

  const getFormData = (data: any) => {
    addToDB(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(getFormData)}>
        <input
          placeholder="Enter Name"
          className="border-4 border-orange-300 rounded p-2 m-4"
          {...register("name")}
        />
        <input
          placeholder="Enter Email"
          className="border-4 border-orange-300 rounded p-2 m-4"
          {...register("email")}
        />
        <button
          className="bg-green-700 p-2 m-4 rounded text-white"
          type="submit"
        >
          Click To Check
        </button>
      </form>
    </main>
  );
}
