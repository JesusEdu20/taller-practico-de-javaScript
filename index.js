const couponCollection=[];

const createCoupon=(coupon)=>{//object
    couponCollection.push(coupon)
}

//name
//discount

//validators
const validateCoupon=(coupons, target)=>{
    return coupons.find(coupon=> coupon.name==target);
}


const validateAmountAvailable=(coupons, target)=>{
    const amountOfCoupon=coupons.filter(coupon=> coupon.name==target);
    return amountOfCoupon.lenght;
}



const askForCoupon=(coupons, target)=>{
    const couponIsAvailable=validateCoupon(coupons, target);
    const amountOfCoupon=validateAmountAvailable(coupons, target); 
    const coupon=couponIsAvailable? couponIsAvailable: false;
    const amountAvailable=couponIsAvailable? couponIsAvailable: false;

    if(coupon){

        return {coupon:coupon, amountAvailable: amountAvailable};
    }
    else{

        return false
    }

    

}


const calculatePrice=(amount, percent)=>{

    return (amount/100)*percent
}


//cp__input cp__price
//cp__input cp__cupon
//btn

const priceInput= document.querySelector(".cp__price");
const couponInput= document.querySelector(".cp__cupon");
const btn= document.querySelector(".btn");

createCoupon(
    {
        name:"ofertaDiciembre",
        discount: 50
    }
    
)
createCoupon(
    {
        name:"ofertaDiciembre",
        discount: 50
    }
    
)



btn.addEventListener("click", ()=>{

    const price=parseInt(priceInput.value);
    const coupon=couponInput.value;
    const dataCoupon=askForCoupon(couponCollection, coupon);

    if(dataCoupon){
        priceInput.value=calculatePrice(price, dataCoupon["coupon"].discount);

        //eliminar coupon usado
        couponCollection.indexOf(coupon);
        couponCollection.splice(coupon, 1);
        console.log(couponCollection)
    }
    else if(coupon===""){
        priceInput.value="Introduzca un cupon"
    }
    else{
        priceInput.value="Cupon no valido"
    }
    

})


