import Image from "next/image";
import Link from "next/link"; // 1. Import Link
import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { apiUrl } from "@/config/config";

const ProductList = ({ products }) => {
  return (
    <section className="grid grid-cols-5 gap-5 max-w-6xl mx-auto py-24">
      {products.map((product) => {
        const imageSrc = product.image && !product.image.includes("http") 
          ? `${apiUrl}/uploads/${product.image}` 
          : (product.image || "/assets/empty.png");
        return <div
            key={product.id}
            className="border-2 rounded-md border-zinc-300 flex flex-col items-center relative group 
              transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 bg-white"
          >
            {/* 2. Bungkus area gambar dan teks dengan Link */}
            <Link href={`/products/${product.id}`} className="w-full cursor-pointer">
              <div className="relative w-full">
                <img
                  src={imageSrc}
                alt={product.title}
                fill // Mengisi area div pembungkusnya secara otomatis
                className="object-cover  duration-300 group-hover:scale-110"
                />
              </div>

              <h4 className="text-black font-bold text-center px-2 mt-2">
                {product.title}
              </h4>
              <h6 className="text-black font-semibold text-center">
                Rp {Number(product.price).toLocaleString("id-ID")}
              </h6>

              <div className="flex justify-center gap-2 text-gray-500 text-sm mb-2">
                <p>{product.product_type}</p>
                <p>{product.stock} pcs</p>
              </div>
            </Link>

            {/* 3. Letakkan tombol di luar Link agar klik tombol tidak memicu navigasi detail */}
            <div className="flex  gap-1 absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <EditButton productId={product.id} productData={product} />
              <DeleteButton productId={product.id} />
            </div>
          </div>
      })}
    </section>
  );
};

export default ProductList;