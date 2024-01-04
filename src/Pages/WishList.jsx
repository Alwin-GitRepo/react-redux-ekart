import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFromWishList } from '../Redux/Slices/wishListSlice';
import { addToCart } from '../Redux/Slices/cartSlice';

function WishList() {

  const handleWishList = (item) => {

    // add to cart
    dispatch(addToCart(item))

    // delete from wishlist
    dispatch(deleteFromWishList(item.id))
  }

  const location = useNavigate()
  const dispatch = useDispatch()

  const wishListArray = useSelector((state)=>state.wishListReducer)

  return (
    <>
      <Row>
        {
          wishListArray.length>0?wishListArray.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={3}>
                <MDBCard style={{width : "20rem",margin : "2rem",height : "30rem"}} className='shadow shadow-2-secondary'>
                    <MDBCardImage src={item.thumbnail} position='top' alt='...' style={{height : "15rem"}}/>
                    <MDBCardBody>
                        <MDBCardTitle className='text-center'>{item.title}</MDBCardTitle>
                        <MDBCardText className='text-primary text-center'><b>$ {item.price}</b></MDBCardText>
                        <MDBCardText>{item.description.slice(0,60)}<span className='text-primary'> ...</span></MDBCardText>
                        <div className='d-flex justify-content-between'>
                            <MDBBtn className='bg-success border border-transparent w-75 m-1' onClick={()=>handleWishList(item)} ><i className='fa-solid fa-shopping-cart text-light'></i></MDBBtn>
                            <MDBBtn className='bg-danger border border-transparent w-25 m-1' onClick={()=>dispatch(deleteFromWishList(item.id))}><i className='fa-solid fa-trash text-light'></i></MDBBtn>
                        </div>
                    </MDBCardBody>
                </MDBCard>
              </Col>
          )): 
          <div className='text-center'>
            <h1 className='text-center mt-3 text-danger'>Your WishList is Empty</h1>
            <button className='text-primary rounded-3 bg-warning'  onClick={()=>location('/')}><i class="fa-solid fa-backward fa-shake p-3"></i></button>
            <img src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt=""  className='w-100' style={{height : "28rem"}} />
          </div>
        }
      </Row>
    </>
  )
}

export default WishList