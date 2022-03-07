const {createjwts,verifyjwts} = require ("../Utils/JWTs")

module.exports.getUser=(req ,res,next)=>{
    const {AccessTokens,RefreshTokens}=req.cookies
    if(!AccessTokens) return next()
   const user = verifyjwts(AccessTokens,"Access key")
   if(user){
    req.user = user 
    return next()
   }
   const re = verifyjwts(RefreshTokens,"Refersh Key")
   if(!user){
        if(!re) return next()
        const AccessTokens = createjwts(re,"Access key" ,"10s");
        const RefreshTokens = createjwts(re,"Refersh Key" ,"10m");
        res.cookie("AccessTokens", AccessTokens, {
          MaxAge: 600000,
          httpOnly:true
        });
        res.cookie("RefreshTokens", RefreshTokens, {
          MaxAge: 600000,
          httpOnly:true
        });
        const user = verifyjwts(AccessTokens,"Access key")
        req.user = user 
        return next()
    }
}