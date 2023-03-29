import Header from 'src/components/header';
import Footer from 'src/components/footer';

import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '814bf3795cc781c49e51f90af9686593',  //ACCESS TOKEN
  domain: 'athletable-dev.myshopify.com', //Shopify domain
});

export default function Shop({ products }) {
  console.log('Shop -> products', products); // Add this line to print out the products array
  return (
    <>
      <Header />
        <h1>Shopify Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              {product.images && product.images[0] && (
                <img src={product.images[0].src} alt={product.title} width="200" />
              )}
            </li>
          ))}
        </ul>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await client.product.fetchAll();
  console.log('getStaticProps -> products', products); // Add this line to print out the products array
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
