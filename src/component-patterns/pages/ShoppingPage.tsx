import {ProductCard, ProductButton, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
  id:'1',
  title:'Coffee Mug - Card',
  img:'./coffee-mug.png'
}

export const Shoppingpage = () =>{
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap'}}>
                <ProductCard product={ product } className="bg-dark" >                  
                    <ProductImage className='custom-image'/>
                    <ProductTitle title={"Coffee"} className='text-blanco'/>    
                    <ProductButton className="custom-buttons"/>       
                </ProductCard> 
            {/* Esta es la segunda manera de exportar y mostrar componentes 
            esto es el compont-component-parents*/}
                <ProductCard product={ product } className="bg-dark" >                  
                    <ProductCard.Image className='custom-image' style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductCard.Title className='text-blanco' />    
                    <ProductCard.Buttons className="custom-buttons"/>       
                </ProductCard> 

                <ProductCard 
                product={ product } 
                style={{
                    backgroundColor:'#70d1f8',
                    textAlign:'center'
                }} 
                >                  
                    <ProductImage style={{
                        boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{                        
                        fontWeight:'bold'                    
                    }}/>    
                    <ProductButton style={{
                        display:'flex',
                        justifyContent:'end'
                    }}/>       
                </ProductCard> 
            </div>
           
        </div>
        /* Se usan diferentes maneras para exportar los componentes */
    )
}