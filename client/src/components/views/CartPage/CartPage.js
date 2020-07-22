import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {getCartItems,removeCartItem} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import {Result,Empty} from 'antd';
import Axios from 'axios';
function CartPage(props) {
   const dispatch= useDispatch();
  const [Total, setTotal] = useState(0);
  const [ShowTotal, setShowTotal] = useState(false);
  const [ShowSuccess, setShowSuccess] = useState(false);
    useEffect(() => {
       let cartItems=[];
       if(props.user.userData&&props.user.userData.cart){
           if(props.user.userData.cart.length>0)
           {
               props.user.userData.cart.forEach((item)=>{
                   cartItems.push(item.id);
               });
             dispatch(getCartItems(cartItems,props.user.userData.cart))
               
           }
       }
    }, [props.user.userData])

    useEffect(()=>{
       if(props.user.cartDetail&&props.user.cartDetail.length>0)
       {
         calTotal(props.user.cartDetail);
       }
    },[props.user.cartDetail])

    const calTotal=(cartDetail)=>{
        let total=0;

        cartDetail.map(item=>{
            total+=parseInt(item.price,10)*item.quantity;
        });
        setTotal(total);
        setShowTotal(true);
    }

    const removeFromcart=(id)=>{
      
        dispatch(removeCartItem(id)).
        then(()=>{
        //    Axios.get('/api/users/userCartInfo').then(res=>{
        //        if(res.data.success)
        //        {
        //          if(res.data.cartDetail.length<=0)
        //          setShowTotal(false);
        //          else
        //          calTotal(res.data.cartDetail);
        //        }
        //        else{
        //            alert('failed to get cart info');
        //        }
        //    })
        })
    }
    return (
        <div style={{width:'85%',margin:'3rem auto'}}>
            <h1>MY Cart</h1>
            <div>
            <UserCardBlock
            products={props.user.cartDetail}
            removeItem={removeFromcart}/>
            
            
            {
                ShowTotal?
                <div style={{marginTop:'3rem'}}>
                <h2>Total Amount:Rs. {Total} </h2>
            </div>
            :
            ShowSuccess?
            <Result
            status="success"
           title="Successfully Purchased Items"          
          />:
          <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:"center"}}>
          <br/>
          <Empty description={false}/>
          <p>No items in the Cart</p>
          </div>
            
          }
          
          
          </div>
        </div>
    )
}

export default CartPage
