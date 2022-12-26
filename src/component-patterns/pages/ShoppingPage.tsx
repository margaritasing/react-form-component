import { useState } from "react";
import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

const product2 = {
    id:'2',
    title:'Coffee Mug - Meme',
    img:'./coffee-mug2.png'
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
    count:number
}


export const Shoppingpage = () =>{
    
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart }>({})
    
    const onProductCountChange = ({count,product}: {count:number, product:Product}) => {

        setShoppingCart(oldShoppingCart => {

            if (count === 0) {
                const {[product.id]:toDelete, ...rest }= oldShoppingCart 
                
                return{...rest}                 
            }

            return {
                ...oldShoppingCart,                
                [product.id]: {...product, count }
            }
        })
        /* console.log(count, product) */

    }
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
            { products.map( product => (
                <ProductCard key={product.id} 
                product={ product } 
                className="bg-dark" 
                onChange={onProductCountChange}
                              
                >                  
                    <ProductImage className='custom-image'/>
                    <ProductTitle title={"Coffee"} className='text-blanco'/>    
                    <ProductButton className="custom-buttons"/>       
                </ProductCard>                                       
                ))}          
            </div>

            <div className='shopping-cart'>    
            {
                Object.entries(shoppingCart).map( ([key, product]) => (
                <ProductCard
                key={ key }
                product={ product } 
                className="bg-dark"
                style={{ width:'100px' }}
                value={ product.count }  
                >                  
                    <ProductImage className='custom-image'/>                        
                    <ProductButton 
                    className="custom-buttons"
                    style={{
                        display:'flex',
                        justifyContent:'center'
                    }}                         
                    />       
                </ProductCard>
                
                ))
            }        
            </div>        
        </div>

       
        /* Se usan diferentes maneras para exportar los componentes */
    )
}