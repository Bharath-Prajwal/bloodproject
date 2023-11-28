const express=require('express')
const router=express.Router()
const Blood=require('../Model/details.model')
router.post('/',(req,res)=>{
    let newOne=new Blood({
        name:req.body.name,
        age:req.body.age,
        address:req.body.address,
        location:req.body.location,
        bloodgroup:req.body.bloodgroup,
        phonenumber:req.body.phonenumber,
        email:req.body.email,
        password:req.body.password
    })
    newOne.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        req.send(err)
    })
})
router.get('/',(req,res)=>{
    Blood.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    Blood.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    Blood.findByIdAndDelete(idQuery)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})


module.exports=router