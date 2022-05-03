import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ( { props: { product, products }} ) => {
  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  )
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // select specific product data (from slug url)
  const productsQuery = '*[_type == "product"]';
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product)

  return {
    props: { products, product }
  };
};

export default ProductDetails;