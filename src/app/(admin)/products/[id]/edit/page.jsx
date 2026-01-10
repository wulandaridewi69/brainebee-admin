import { notFound } from "next/navigation";
import EditForm from "@/components/ui/EditForm";
import { apiUrl } from "@/config/config";

async function getProduct(id) {
  const res = await fetch(`${apiUrl}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

const editProduct = async (props) => {

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

export default editProduct;