import { supabase } from '../utils/supabase';
import Head from 'next/head'
import Image from 'next/image'
import { formatter } from '../utils/ultilities';

export default function Home({ products }) {

  return ( 
    <>
      <Head>
        <title>Mega-Awesome eCommerce Store! Get your drip on!</title>
        <meta name="description" content="You can't go out in public unless you look fly." />
      </Head>
      
      <section id="hero" className='section section_hero'>
        <h1>Super Awesome eCommerce Store! Buy our stuff!</h1>
        <div className='hero_banner'>
          <picture>
            <source media='(min-width:768px)' srcSet='https://iconcdn-res.cloudinary.com/image/upload/v1671815826/nordictrack.com/cdn/images/catalog/modules/12-26-22-slide_hero_lg-v1.jpg'/>
            <img src="https://iconcdn-res.cloudinary.com/image/upload/v1671815826/nordictrack.com/cdn/images/catalog/modules/12-26-22-slide_hero_sm-v1.jpg" alt="Hero image" />
            <figcaption>
              <h2>Super Mega Blowout Sale!</h2>
              <a href="/about" >Learn More</a>
            </figcaption>
          </picture>
        </div>
      </section>

      <section id="featured-products" className='featured_products'>
        <h2>Featured Products</h2>

        <p>Some of the products to make you super buff, smart, will get you that promotion, and a blue check on Instagram.  This is where all of the hotness is.  Get them before they're gone, because Stone Cold said so.</p>
        
        <div className='product_container'>
        {products.length && 
          products.map( (product, index) => (
            <a href={`/product/${product.id}`} key={index} className='ProductCard'>
              <picture>
                <img src={product.image_url} className='ProductCard__image' alt="" />
              </picture>
              <div className='ProductCard__copy'>
                <h3>{product.name}</h3>
                <div className='ProductCard__price_container'>
                  {product.sales_price && (
                    <p className='ProductCard__salesPrice'>{ formatter.format( product.sales_price ) }</p>
                  )}
                  <p className='ProductCard__msrp'>{ formatter.format( product.msrp ) }</p>
                </div>
              </div>
            </a>
          ) )
        }
        </div>

      </section>

    </>
  )
}

export const getStaticProps = async () => {
  const { data: products } = await supabase.from('products').select('*');

  return {
    props: {
      products,
    }
  }
}
