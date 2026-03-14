import jwt from "jsonwebtoken"

const SECRET = "mysecretkey"

const auth = (req,res,next)=>{

    const header = req.headers.authorization

    if(!header){
        return res.status(401).json({
            message:"Token missing"
        })
    }

    const token = header.split(" ")[1]

    try{

        const decoded = jwt.verify(token,SECRET)

        req.user = decoded

        next()

    }catch(err){

        res.status(401).json({
            message:"Invalid token"
        })

    }

}

export default auth