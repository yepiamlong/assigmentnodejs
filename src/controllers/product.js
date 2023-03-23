import dotenv from 'dotenv'
import joi from 'joi'
import Product from '../models/product'

dotenv.config()

const productSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    description: joi.string(),
})

export const getAll = async (req,res) =>{
    try{
        const products = await Product.find();
        console.log(products);
        if(products.length ===0){
            return res.status(404).json({
                message:'khong co san pham',
            })
        }
        return res.json({
            message:'lay danh sach san pham thanh cong',
            products,
        })
    }catch(error){
        return res.status(400).json({
            message:'error',
        })
    }
   
}
export const get = async(req,res)=>{
 try{
    const product = await product.FindById(req.params.id)
    if(!product){
        return res.json({
            message:"khong thay san pham"
        })
    }
    return res.json({
        message:"lay san pham thanh cong",
        product,
    })
 }catch(error){
    return res.status(400).json({
        message:'error',
    })
 }
}
export const create = async(req,res)=>{
    const product = await Product.create(req.body)
    if(!product){
        return res.json({
            message:"them san pham loi!"
        })
    }
    return res.json({
        message:"them san pham thanh cong",
        product,
    })
}
export const update = async(req,res)=>{
    try{
    const product = await Product.findOneAndUpdate({_id:req.params.id},req.body,{
        new:true,
    })
    if(!product){
        return res.json({
            message:"sua san pham khong thanh cong"
        })
    }
    return res.json({
        message:"sua san pham thanh cong",
        product,
    })
}catch(error){
    return res.status(400).json({
        message:error,
    })
}
}
export const remove = async (req,res) =>{
    try{
        const product = await Product.findOneAndDelete(req.params.id)
        return res.json({
            message:"xoa san pham thanh cong",
            product,
        })
    }catch(error){
        return res.status(400).json({
            message:error,
        })
    }
}