

var stripe = require('stripe')('sk_test_51IyEiPKXO6zoy45XnSBJfUeShcjGESS1F0uIZoZH3XQjKcJrBVsctduUrUqjabgjdHZVALOU1OFe4lefVdlriKJg00dp6rwSy2')

exports.payme = (req, res) => {
    console.log('the body is ',req.body);
    var charge = stripe.charges.create({
        amount:6000,
        currency: 'eur',
        source:req.body.token
    }
    ,(err,charge)=>{
        if(err){
            throw err;
        }
        res.json({
            success:true,
            message: "paiement done"
        })
        
    }
    );
}