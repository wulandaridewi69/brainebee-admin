import Hero from "@/components/Hero";
import AgeCategoryList from "@/components/ui/AgeCategoryList";
import ProductList from "@/components/ProductList";

// Tambahkan async di sini
const ProductsPage = async () => {
  // Tambahkan await untuk fetch
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  // Tambahkan await untuk .json()
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