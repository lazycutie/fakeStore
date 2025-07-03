import React, { useEffect, useState } from 'react'
import './cardstyle.css' 
import { useSelector,useDispatch } from 'react-redux'
import { addtoCart,removeItems,removeSingle,clearCart } from '../redux/features/cartSlice'
import toast from 'react-hot-toast';

const Cartdetail = () => { 
  const { carts } = useSelector((state) => state.allCart)
  const[totalqan,setTotalqau] = useState(0)
  const[totalprice,setPrice]= useState(0)

const dispatch = useDispatch();
    const handleIncrement = (e)=>{
      dispatch(addtoCart(e))
      toast.success("Item added to cart")
    }

    const removeSaman = (e) =>{
       dispatch(removeItems(e))
       toast.success("whole Item removed from cart")
    }

    const removeSingleSaman = (e) =>{
      dispatch(removeSingle(e))
      toast.success("Item removed from cart")
    }

    const clearPoora = (e) => {
      dispatch(clearCart(e))
      toast.success("Whole cart cleared")
    }
    
    const total = () => {
      let totalprice = 0
      carts.map((ele,ind)=>{
        totalprice = ele.price * ele.qnty + totalprice
      });
      setPrice(totalprice)
    }
    const quantotal = () => {
      let totalqan = 0
      carts.map((ele,ind)=>{
        totalqan = ele.qnty +totalqan
      });
      setTotalqau(totalqan)
    }
  
    useEffect(()=>{
      total()
    },[total])

    useEffect(()=>{
      quantotal()
    },[quantotal])
  return (
     
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className='text-white m-0'>Cart Calculation{carts.length>0?`(${carts.length})`:""}</h5>
                {
                  carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={clearPoora}><i class="fa fa-trash-alt mr-2"></i><span>Empty Cart</span></button> : ""
                }
              </div>

            </div>
            {
              carts.length === 0 ? <table className='table cart-table mb-0'>
                <tbody>
                  <tr>
                    <td colSpan={6}>
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart is Empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> :
                <table className="table cart-table mb-0
                table-responsive-sm">
                  <thead>
                    <tr>
                      <th>
                        Action
                      </th>
                      <th>
                        Product
                      </th>
                      <th>
                        Name
                      </th>
                      <th>
                        Price
                      </th>
                      <th>
                        Qty
                      </th>
                      <th className='text-right'><span id='amount' className='Amount'>total Amount</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      carts.map((data, index) => { 
                        return (
                          <>
                            <tr>
                              <td>
                                <button className='prdct-delete' onClick={()=>removeSaman(data.id)}><i class="fa fa-trash-alt"></i></button>
                              </td>
                              <td><div className='product-img'>
                                <img src={data.thumbnail}>
                                </img>
                              </div>
                              </td>
                              <td><div className='product-name'>
                                 {data.title}
                              </div>
                              </td>
                              <td> {data.price}
                              </td>
                              <td>
                                <div className="prdct-qty-container">
                                  <button className='prdct-qty-btn' type='button' onClick={data.qnty<=1?()=>removeSaman(data.id):()=>removeSingleSaman(data)}>
                                    <i className="fa fa-minus"></i>
                                  </button>
                                  <input type='text' className='qty-input-box' value={data.qnty}></input>
                                  <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)}>
                                    <i className="fa fa-plus"></i>
                                  </button>
                                </div>
                              </td>
                              <td className="text-right">{(data.qnty*data.price).toFixed(2)}</td>
                            </tr>
                          </>
                        )
                      }

                      )
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>
                        &nbsp;
                      </th>
                      <th colSpan={3}>
                        &nbsp;
                      </th>
                      <th>Item in Cart<span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalqan}</span></th>
                      
                      <th className='text-right'> Total price<span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalprice.toFixed(2)}</span></th>
                    </tr>
                  </tfoot>
                </table>
            }
          </div>
        </div>
      </div>


   

  )

}

export default Cartdetail