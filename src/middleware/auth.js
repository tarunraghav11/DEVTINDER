const adminAuth=(req,res,next)=>{
    token="xyz"
    isAdminAuthorized=token==="xyz"
    if (!isAdminAuthorized) {
        return res.status(401).json({message:"Unauthorized"})
    }
    else{
        next();
    }
}

module.exports={
    adminAuth   
}