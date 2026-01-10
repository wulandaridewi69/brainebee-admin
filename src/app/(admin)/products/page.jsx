import Hero from "@/components/Hero";
import AgeCategoryList from "@/components/ui/AgeCategoryList";
import ProductList from "@/components/ProductList";
import { apiUrl } from "@/config/config";

const ProductsPage = async () => {
  const res = await fetch(`${apiUrl}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();

  return (
    <div className="bg-white">
      <Hero />
      <AgeCategoryList />
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;