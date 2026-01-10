"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Input from "@/components/ui/Input";
import SelectInput from "@/components/ui/SelectInput";
import Button from "@/components/ui/Button";
import TextArea from "@/components/ui/TextArea";

import Empty from "@/../public/assets/empty.png";
import { apiUrl } from "@/config/config";

const Create = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageFile: null,
    price: "",
    product_type: "",
    description: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("price", Number(form.price));
    formData.append("product_type", form.product_type);
    formData.append("description", form.description);
    formData.append("stock", Number(form.stock));
    formData.append("category_id", Number(form.category_id));
    formData.append("admin_id", 1); //optional

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(`${apiUrl}/products`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create product");

      alert("Product created successfully!");
      router.push("/products"); 
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    }
  };

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Create Product</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-8 allign-center">
            <div className="flex flex-col items-center">
              <label className="cursor-pointer group">
                <div className="relative w-[350px] h-[350px]">
                  <img
                    src={imagePreview || Empty.src}
                    alt="preview"
                    className="w-full h-full rounded-xl object-cover border-2 border-dashed border-gray-300 group-hover:border-blue-500 transition-all"
                  />
                </div>

                <Input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
              <p className="text-gray-400 text-xs mt-2 italic">*Click the image to upload</p>
            </div>

            <div>
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

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Stock"
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Price"
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  required
                />
              </div>

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
                required
                options={[
                  { label: "Toddler", value: 1 },
                  { label: "Preschool", value: 2 },
                  { label: "Kindergarten", value: 3 },
                  { label: "School Age", value: 4 },
                  { label: "Tween", value: 5 },
                  { label: "Teenager", value: 6 },
                ]}
              />
            </div>
          </div>

            <div className="flex justify-center pt-4">
              <Button className="w-1/2" type="publish" label="Publish Product" />
            </div>
        </form>
      </div>
    </section>
  );
};

export default Create;