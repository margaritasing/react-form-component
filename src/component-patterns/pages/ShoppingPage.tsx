import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import { products } from "../data/data";
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';


export const Shoppingpage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart()    
    

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
                value={ shoppingCart[product.id]?.count || 0 }                                          
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
                onChange={onProductCountChange}
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