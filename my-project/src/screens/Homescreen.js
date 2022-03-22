import React from 'react';
import { useEffect, useState } from 'react';
import data from "../data";
import Button from 'react-bootstrap/Button';

function Homescreen(){        
    return ( <div>
        <h1>Featured Product</h1>
        <div className="products">
        {data.products.map((product) =>(
          <div className="product" key={product.slug}>
            <a href={'/product/$(product.slug)'}>
                <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">            
            <a href={'/product/$(product.slug)'}>
              <div className="prodnm">{product.name}</div>      
            </a>            
            <div>
            <div className="saleprice">${product.price}</div>
            </div>
            <Button>Add to Cart</Button>
            </div>
          </div>))
        }
        </div>
    </div>
    )
}

export default Homescreen;