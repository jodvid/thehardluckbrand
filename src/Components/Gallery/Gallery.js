import React from "react";
import './Gallery.css';
import "tachyons";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';



const Gallery = () => {
    const onInit = () => {
        
        
    };
    return(
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgZoom]}
                >
                         
                        <a href="./Photos/landpic1.jpg"><img className=" gallery-item img-responsive"  alt="" src="./Photos/landpic1.jpg"/></a>  
                        <a href="./Photos/landpic2.jpg"><img className=" gallery-item img-responsive" alt="" src="./Photos/landpic2.jpg" /></a>
                        <a href="./Photos/landpic3.jpg"><img className=" gallery-item img-responsive"  alt="" src="./Photos/landpic3.jpg"/></a>
                        <a href="./Photos/landpic4.jpg"><img className=" gallery-item img-responsive"  alt="" src="./Photos/landpic4.jpg"/></a>               
                        <a href="./Photos/pic2.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic2.jpg"/></a>
                        <a href="./Photos/pic3.jpg" ><img className="gallery-item img-responsive"  alt="" src="./Photos/pic3.jpg"/></a>
                        <a href="./Photos/pic4.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic4.jpg"/></a>
                        <a href="./Photos/pic5.jpg" ><img className="gallery-item img-responsive"  alt="" src="./Photos/pic5.jpg"/></a> 
                        <a href="./Photos/pic9.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic9.jpg"/></a>
                        <a href="./Photos/pic6.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic6.jpg"/></a>
                        <a href="./Photos/pic10.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic10.jpg"/></a>
                        <a href="./Photos/pic7.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic7.jpg"/></a>
                        <a href="./Photos/pic8.jpg" ><img className=" gallery-item img-responsive"  alt="" src="./Photos/pic8.jpg"/></a>
                        
                    
                
                            
                            
                    
            </LightGallery>
                
           
        
        
 
              
    );
    };
// todo next upload photo from other sources
export default Gallery; 