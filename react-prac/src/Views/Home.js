import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home() {
    const url = `https://5f35c1445b91f60016ca50c1.mockapi.io/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() =>{
        setProducts({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() =>{
            setProducts({
                loading: false,
                data: null,
                error: true
            })
        })
    }, [url])

    let content = null

    if(products.loading){
        content = <Loader />
    }

    if(products.error){
        content = <h1>There was an error please refresh or try again later</h1>
    }

    if(products.data){
        return (
            content =
            products.data.map((product, key) => 
                <div key={product.id}>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
        )
    }
    
    return (
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home