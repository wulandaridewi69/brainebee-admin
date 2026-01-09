"use client";

export default function EditForm({ product }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Ambil data dari form secara otomatis
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 2. Siapkan Headers
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(data), // Mengirim data dari form
    };

    // 3. Gunakan ID dinamis sesuai produk
    try {
      const response = await fetch(`http://localhost:5000/api/products/${product.id}`, requestOptions);
      if (response.ok) {
        alert("Product updated successfully!");
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Product Name</label>
        <input
          type="text"
          name="title" // Sesuaikan name dengan kolom di DB (tadi di backend kamu pakai 'title')
          defaultValue={product.title}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Price</label>
        <input
          type="number"
          name="price"
          defaultValue={product.price}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          name="description"
          defaultValue={product.description}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Stock</label>
        <input
          type="number"
          name="stock"
          defaultValue={product.stock}
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Update Product
      </button>
    </form>
  );
}