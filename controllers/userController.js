const userSchema = require('../models/userSchema')
const adminSchema = require('../models/adminSchema')
module.exports = {
    userLogin: async(req,res)=>{
        try{
            const {email,password} = req.body
            if(email === 'admin'){
                const data = await adminSchema.findOne({email})
                return res.status(200).json({data,role:'admin'})
            }
            const user = await userSchema.findOne({email})
            if(user){
               if(user.password === password){
                return res.status(200).json({data:user,role:'driver'})
               }else{
                return res.status(403).json({message:'Invalid password enter valid password'})
               }
            }else{
                return res.status(403).json({message:'enetered driver not found enter a valid driver email'})
            }
        }catch(err){
            console.log(err);
            return res.status(500).json({message:"Sorry internal server error"})
        }
    }
}