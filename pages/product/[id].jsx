import supabase from "../../utils/supabase";
import styles from './product.modules.scss';

const Product = async({ params:{id} }) => {

  return(
    <>
      This is a product page
    </>
  )
};

export async function generateStaticParams() {
  const { data: products } = await supabase.from('products').select('id')

  return products?.map(({ id }) => ({
    id,
  }))
}

export default Product;
