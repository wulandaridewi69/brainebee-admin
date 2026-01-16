"use client";

import { apiUrl } from "@/config/config";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import SelectInput from "@/components/ui/SelectInput";

const editForm = ({ product }) => {
  const router = useRouter();
  const [form, setForm] = useState({
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
      product_type: product.product_type,
      description: product.description,
      stock: product.stock,
      category_id: product.category_id,
    });

  const [imagePreview, setImagePreview] = useState(
    product.image ? `${apiUrl}/uploads/${product.image}` : null
  );
  const [imageFile, setImageFile] = useState(product.image ? `${apiUrl}/uploads/${product.image}` : null);

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

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    if (imageFile) {
      formData.set("image", imageFile);
    }

    try {
      const response = await fetch(`${apiUrl}/products/${product.id}`, {
        method: "PUT",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Product updated successfully!");
        router.push("/products");
        router.refresh();
      } else {
        console.error("Server error:", result);
        alert("Update failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col items-center">
        <label className="cursor-pointer group">
          <div className="relative w-[300px] h-[300px]">
            <img
              src={imagePreview}
              alt="preview"
              className="w-full h-full rounded-xl object-cover border-2 border-dashed border-gray-300 group-hover:border-blue-500 transition-all"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-all">
              <span className="text-white font-bold text-sm">Change cover</span>
            </div>
          </div>

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
            name="image"
          />
        </label>
        <p className="text-gray-400 text-xs mt-2 italic">
          *Klik gambar untuk mengganti
        </p>
      </div>

      <Input
        label="Product Title"
        name="title"
        onChange={handleChange}
        value={form.title}
        required
      />

      <TextArea
        label="Description"
        name="description"
        onChange={handleChange}
        value={form.description}
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Stock"
          name="stock"
          type="number"
          onChange={handleChange}
          value={form.stock}
          required
        />
        <Input
          label="Price"
          name="price"
          type="number"
          onChange={handleChange}
          value={form.price}
          required
        />
      </div>

      <SelectInput
        label="Product Type"
        name="product_type"
        onChange={handleChange}
        value={form.product_type}
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
        onChange={handleChange}
        value={form.category_id}
        required
        options={[
          { label: "Toddler", value: 1 },
          { label: "Preschool", value: 2 },
          { label: "Kindergarten", value: 3 },
          { label: "School Age", value: 4 },
        ]}
      />

      <div className="flex justify-center pt-4">
        <div className="w-1/2">
          <Button type="publish" label="Update Product" />
        </div>
      </div>
    </form>
  );
};

export default editForm;
