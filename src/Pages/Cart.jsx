import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import { deleteFromCart, emptyCart } from '../Redux/Slices/cartSlice';

function Cart() {

  const location = useNavigate()
  const dispatch = useDispatch()

  const cartArray = useSelector((state)=>state.cartReducer)

  const [total,setTotal] = useState()

  const getCartTotal = () => {
    if (cartArray.length>0)
    {
      setTotal(cartArray.map(a=>a.price).reduce((p1,p2)=>p1+p2))
    }
    else
    {
      setTotal(0)
    }
  }

  const handleCartEmpty = () => {
    dispatch(emptyCart)
    if (cartArray.length>0)
    {
      alert('Your order has been placed successfully')
    }
    location('/')
  }

  useEffect(() => {
    getCartTotal()
  },[cartArray])

  return (
    <>
      <Row>
          <Col className='d-flex justify-content-center'>
            { cartArray?.length > 0 ?
            <MDBTable align='middle' className='m-4 border border-3 border-black'>
              <MDBTableHead>
                <tr>
                  <th scope='col' className='bg-warning'>#</th>
                  <th scope='col' className='bg-warning'>Product Name</th>
                  <th scope='col' className='bg-warning'>Image</th>
                  <th scope='col' className='bg-warning'>Price</th>
                  <th scope='col' className='bg-warning'>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  cartArray.map((item,index) => (
                    <tr>
                      <td>{index+1}</td>
                      
                      <td>
                        <p className='fw-normal mb-1'>{item.title}</p>
                        <p className='text-muted mb-0'>{item.brand}</p>
                      </td>
                      
                      <td>
                        <div className='d-flex align-items-center'>
                          <img
                            // src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                            src={item.thumbnail}
                            alt=''
                            style={{ width: '8rem', height: '5rem' }}
                          // className=''
                          />
                        </div>
                      </td>
                      <td className='text-success fw-bold'>{item.price}$</td>
                      <td>
                        <MDBBtn color='link' rounded size='md' onClick={()=>dispatch(deleteFromCart(item.id))}>
                          <i className='text-danger fa-solid fa-trash'></i>
                        </MDBBtn>
                      </td>
                    </tr>
                  ))
                }
              </MDBTableBody>
            </MDBTable>
            :
              <div className='text-center'>
                <h1 className='text-center mt-3 text-danger'>Your Cart is Empty</h1>
                <button className='text-primary rounded-3 bg-warning'  onClick={()=>location('/')}><i class="fa-solid fa-backward fa-shake p-3"></i></button>
                <img src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif" alt=""  className='w-100' style={{height : "28rem"}} />
              </div>
          }
          </Col>
          <Col className='d-flex justify-content-center'>
            <div className="container m-3 border shadow">
              <h1 className='text-center m-4 text-danger'>Cart Summary</h1>
              <h3>Total Cart Items : <span className='text-primary'>{cartArray.length}</span></h3>
              <h3>Total Price : <span className='text-primary'>$ {total}</span></h3>
              <div  className='text-center'>
                <button onClick={handleCartEmpty} className='btn btn-success'>Check Out</button>
              </div>
            </div>
          </Col>
        </Row>
    </>
  )
}

export default Cart