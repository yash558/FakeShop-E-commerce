import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux/es/exports'
import { addCart } from '../redux/action'
const Projects = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[]);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineheight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} width={100} />
                    <Skeleton height={150} width={100} style={{ marginLeft: 6 }} />

                </div>

            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 py-4">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6 py-4">
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-outline-danger px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
                    <Link to='/cart' className="btn btn-dark ms-4">Go to Cart</Link>
                </div>
            </>
        )

    }
    return (
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading /> : <ShowProduct />}
            </div>


        </div>
    )
}

export default Projects;