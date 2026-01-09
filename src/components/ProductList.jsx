import Image from "next/image";
import Worksheet from "@/../public/assets/worksheet.png";
import DeleteButton from "@/components/ui/DeleteButton";
import EditButton from "@/components/ui/EditButton";

const ProductList = ({ products }) => {
  return (
    <section className="grid grid-cols-5 gap-5 max-w-6xl mx-auto py-24">
      {products.map((product) => (
        <div
          key={product.id}
          className="border-2 rounded-md border-zinc-300 flex flex-col items-center"
        >
          <div className="relative w-full">
            <Image
              src={Worksheet}
              alt={product.title}
              className="w-full h-auto"
            />

            <div className="flex flex-col gap-1 absolute bottom-2 left-2">
              <EditButton productId={product.id}
                productData={{
                  title: product.title,
                  price: product.price,
                  product_type: product.product_type,
                  description: product.description,
                  image: product.image,
                  stock: product.stock,
                  category_id: product.category_id,
                  admin_id: product.admin_id
                }} />
              <DeleteButton productId={product.id} />
            </div>
          </div>

          <h4 className="text-black font-bold text-center px-2 mt-2">
            {product.title}
          </h4>
          <h6 className="text-black font-semibold">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </h6>

          <div className="flex gap-2 text-gray-500 text-sm mb-2">
            <p>{product.product_type}</p>
            <p>{product.stock} pcs</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;