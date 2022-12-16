import Image from 'next/image';
import { format } from 'path';
import styles from '../ProductCard/product.module.scss';


const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const Product = ({ ...data }) => {

  return (
    <div className={styles.ProductCard}>
      <picture>
        <img src={data.image_url} className={styles.ProductCard__image} alt="" />
      </picture>
      <div className={styles.ProductCard__copy}>
        <h3>{data.name}</h3>
        <div className={styles.ProductCard__price_container}>
          {data.sales_price && (
            <p className={styles.ProductCard__salesPrice}>{ formatter.format( data.sales_price ) }</p>
          )}
          <p className={styles.ProductCard__msrp}>{ formatter.format( data.msrp ) }</p>
        </div>
      </div>
    </div>
  )

}

export default Product;