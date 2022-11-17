import React from "react";
import { FlippingCard, FlippingCardBack, FlippingCardFront,ProductCard } from "react-ui-cards";
import "tachyons";
import "./Shop.css";





const Shop = () => {
       return(
           <div className="container flex ">
                   <FlippingCard>
                    <FlippingCardBack>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(./Assets/1front.jpg)'                         
                        }}>
                                          
                        </div>                       
                    </FlippingCardBack>
                    <FlippingCardFront>
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundImage: 'url(./Assets/1back.jpg)'
                            }}>
                        </div>
                    </FlippingCardFront>                    
                </FlippingCard>,
                <FlippingCard>
                <FlippingCardBack>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(./Assets/2front.jpg)'                         
                    }}>
                                      
                    </div>                       
                </FlippingCardBack>
                <FlippingCardFront>
                    <div
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundImage: 'url(./Assets/2back.jpg)'
                        }}>
                    </div>
                </FlippingCardFront>                    
            </FlippingCard>
            <ProductCard
    photos={[
        'https://i.imgur.com/t7DTziH.jpg',
        'https://i.imgur.com/kA5lx6t.jpg',
        'https://i.imgur.com/cUsl6Gs.jpg'
    ]}
    price='$1.50'
    productName='Cupcake'
    description='Nullam velit leo, pulvinar non metus feugiat, pharetra ornare enim. Vivamus ac quam a purus venenatis fringilla.'
    url='https://github.com/nukeop'
/>
            </div>
     
                
                
       
);
    
};


export default Shop; 