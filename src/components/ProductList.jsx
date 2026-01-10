import Link from "next/link";
import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";
import { apiUrl } from "@/config/config";

const productList = ({ products }) => {
  return (
    <section className="grid grid-cols-5 gap-5 max-w-6xl mx-auto py-24 px-4">
      {products.map((product) => {
        const imageSrc = product.image && !product.image.includes("http")
          ? `${apiUrl}/uploads/${product.image}`
          : (product.image || "/assets/empty.png");

        return (
          <div
            key={product.id}
            className="border-2 rounded-md border-zinc-300 flex flex-col items-center relative group 
              transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 bg-white overflow-hidden"
          >
            <Link href={`/products/${product.id}`} className="w-full cursor-pointer">
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={imageSrc}
                  alt={product.title}
                  className="w-full h-full object-cover duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-2 text-center">
                <h4 className="text-black font-bold line-clamp-2 h-10 text-sm">
                  {product.title}
                </h4>
                <h6 className="text-blue-600 font-bold mt-1">
                  Rp {Number(product.price).toLocaleString("id-ID")}
                </h6>

                <div className="flex justify-center gap-2 text-gray-500 text-xs mt-1 mb-2">
                  <p className="bg-gray-100 px-2 rounded">{product.product_type}</p>
                  <p>{product.stock} pcs</p>
                </div>
              </div>
            </Link>

            <div className="flex gap-1 absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/80 p-1 rounded-md shadow-sm">
                <EditButton productId={product.id} productData={product} />
              </div>
              <div className="bg-white/80 p-1 rounded-md shadow-sm">
                <DeleteButton productId={product.id} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default productList;