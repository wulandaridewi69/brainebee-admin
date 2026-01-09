const detailProduct = () => {
     const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("http://localhost:5000/api/products/3", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
    return (
        <h2>ini detail</h2>
       
    )
}

export default detailProduct;