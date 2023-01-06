import { supabase } from "../../utils/supabase";
import { formatter } from "../../utils/ultilities";

const Product = ({product}) => {

  console.log(product);
  return(
    <>
      <section className='Product'>
        <div className='Product__copy'>
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <div className='Product__pricing'>
          { product?.sales_price && (
            <p className='Product__salesPrice'>{ formatter.format( product?.sales_price )}</p>
            ) }
          <p className='Product__msrp'>{ formatter.format( product?.msrp )}</p>
          </div>
          

        </div>
        <div className='Product__image'>
          <picture>
            <img src={product.image_url} alt={`Main image for ${product.name}`} />
          </picture>
        </div>
      </section>
    </>
  )
};

export const getStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const { data } = await supabase.from('products').select('*').filter('id', 'eq', id);

    return {
      props: {
        product: data[0],
      }
    }
  }
  catch(error) {
    return { props: { errors: error.message } };
  }
  
}

export async function getStaticPaths() {
  try{
    const {data, error} = await supabase.from('products').select();
    if( error ) {
      throw error;
    }
    if( data ) {
      const paths = data.map((product) => ({
        params: { id: JSON.stringify(product.id) }
      }));

      return {
        paths: paths,
        fallback: 'blocking',
      };
    }

    return {
      paths: [],
      fallback: false,
    };
  }
  catch(error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export default Product;
