"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import SelectInput from "@/components/ui/SelectInput";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";

import Empty from "@/../public/assets/empty.png";

const Create = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    product_type: "",
    description: "",
    image: "",
    stock: "",
    category_id: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title: form.title,
      price: Number(form.price),
      product_type: form.product_type,
      description: form.description,
      image: form.image || "default.png",
      stock: Number(form.stock),
      category_id: Number(form.category_id),
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .then(() => {
        alert("Product created");
        router.push("/products"); 
      })
      .catch(() => {
        alert("Failed");
      });

  };

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create Product</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label className="cursor-pointer">
              <Image
                src={imagePreview || Empty}
                alt="product"
                width={150}
                height={150}
                className="rounded-xl object-cover"
              />

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          </div>

          <Input
            label="Product Title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <TextArea
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <Input
            label="Stock"
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Product Type"
            name="product_type"
            value={form.product_type}
            onChange={handleChange}
            required
            options={[
              { label: "Worksheet", value: "worksheet" },
              { label: "Coloring Page", value: "coloring_page" },
              { label: "Flashcard", value: "flashcard" },
              { label: "Activity Book", value: "activity_book" },
            ]}
          />

          <SelectInput
            label="Ages Category"
            name="category_id"
            value={form.category_id}
            onChange={handleChange}
            options={[
              { label: "Animals", value: 1 },
              { label: "Food", value: 2 },
              { label: "Vehicles", value: 3 },
              { label: "Math", value: 4 },
            ]}
          />

          <Input
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <div className="w-1/2">
              <Button type="submit" label="Publish" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Create;
