import { fetchDataFromApi } from "@/utils/api";
import ProductDetails from "../../components/ProductDetails";
import { getProductInfoByHref } from "../../services/auth";

const ProductDetailsPage = ({ product }) => {
  // const { data: prod } = products;
  console.log(product.attributes);
  // console.log(prod.attributes.name);
  // Access the specific product data through the "product" prop
  return <ProductDetails prod={product} />;
};

export default ProductDetailsPage;

export async function getStaticPaths() {
  // Fetch the list of products from the API to determine all possible dynamic paths
  const products = await fetchDataFromApi("/api/products?populate=*");

  // Generate the paths array based on the product IDs
  const paths = products?.data?.map((product) => ({
    params: { productId: product?.attributes.href },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false, // Change this to 'true' if you want to enable fallback for undefined paths
  };
}

// export async function getStaticProps({ params }) {
//   // Fetch the specific product data based on the productId from the params
//   const productId = params.productId;
//   const product = await fetchDataFromApi(
//     `/api/products/${productId}?populate=*`
//   );
//   console.log(product);
//   return {
//     props: {
//       product,
//     },
//   };
// }

export async function getStaticProps({ params }) {
  const productId = params.productId;
  console.log(productId);
  const product = await getProductInfoByHref(`${productId}`);
  console.log(product);
  return {
    props: { product },
  };
}
