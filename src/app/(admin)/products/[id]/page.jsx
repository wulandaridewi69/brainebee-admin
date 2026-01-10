import Image from "next/image";
import { notFound } from "next/navigation";
import { apiUrl } from "@/config/config";
import tween from '@/../public/assets/tween.png';

async function getProduct(id) {
  const res = await fetch(`${apiUrl}/products/${id}`, {
    cache: "no-store", 
  });

  if (!res.ok) return null;
  return res.json();
}

const DetailProductPage = async (props) => {
  const params = await props.params;
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image 
            src={tween} 
            alt={product.title} 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-black mb-2">
            {product.title}
          </h1>
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-4">
            Category ID: {product.category_id}
          </p>
          <div className="border-t border-b py-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
          <p className="text-2xl font-bold text-black mb-6">
            Rp {Number(product.price).toLocaleString('id-ID')}
          </p>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors">
            Print CSV
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailProductPage;