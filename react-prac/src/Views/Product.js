import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams()

    const url = `https://5f35c1445b91f60016ca50c1.mockapi.io/products/${id}`
    const [product, setProduct] = useState(null)

    useEffect(() =>{
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })
    }, [url])

    if(product){
        return (
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.name}
                </h1>
                <div>
                    <img
                        src={product.images}
                        alt={product.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.price}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        )
    }

    return(
        <div>

        </div>
    )
}

export default Product