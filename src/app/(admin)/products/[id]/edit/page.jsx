// app/products/[id]/edit/page.jsx
import { notFound } from "next/navigation";
import EditForm from "@/components/ui/EditForm";

// 1. Tambahkan async dan await di sini
async function getProduct(id) {
  const res = await fetch(`http://localhost:5000/api/products/${id}`, {
    cache: "no-store"
  });
  
  if (!res.ok) return null;
  return res.json();
}

export default async function EditProductPage(props) {
  // 2. Next.js 15 mewajibkan await pada params
  const params = await props.params;
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-black">Edit Product</h1>
      <EditForm product={product} />
    </div>
  );
}