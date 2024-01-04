import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useFetch from '../Hooks/UseFetch';
import { useDispatch } from 'react-redux';
import { addToWishList } from '../Redux/Slices/wishListSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function Home() {

  const fetchdata = useFetch('https://dummyjson.com/products')
  console.log(fetchdata);

  const dispatch = useDispatch()

  return (
    <div>
        <Row>
          {
            fetchdata?.length > 0 ? fetchdata.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3}>
                <MDBCard style={{width : "20rem",margin : "2rem",height : "30rem"}} className='shadow shadow-2-secondary'>
                    <MDBCardImage src={item.thumbnail} position='top' alt='...' style={{height : "15rem"}}/>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'>{item.title}</MDBCardTitle>
                        <MDBCardText className='text-primary text-center'><b>$ {item.price}</b></MDBCardText>
                        <MDBCardText>{item.description.slice(0,60)}<span className='text-primary'> ...</span></MDBCardText>
                        <div className='d-flex justify-content-between'>
                            <MDBBtn onClick={()=>dispatch(addToWishList(item))} className='bg-danger border border-transparent'><i className='fa-solid fa-heart text-light'></i></MDBBtn>
                            <MDBBtn onClick={()=>dispatch(addToCart(item))} className='bg-success border border-transparent'><i className='fa-solid fa-shopping-cart text-light'></i></MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
              </Col>
            )) : "No Data Available"
          }
        </Row>
    </div>
  )
}

export default Home