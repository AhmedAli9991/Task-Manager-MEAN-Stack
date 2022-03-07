var users = require("../Models/Users");
var bcrypt = require("bcrypt");
var { createjwts} = require("../Utils/JWTs");
module.exports.Register = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    old = await users.findOne({ Email });
    if (old) {
      return await res.status("200").json("already exists");
    }
    newPassword = await bcrypt.hash(Password, 12);
    const newu = await users.create({ Email, Password: newPassword });
    await res.status("200").json(newu);
  } catch (err) {
    res.status("400").json(err);
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await users.findOne({ Email });
    if (!user) return res.status("200").json("user dose not exist");
    const match =  await bcrypt.compare(Password,user.Password);
    if (!match) return res.status("200").json("password dose not exist");
    const AccessTokens = createjwts(user,"Access key" ,"10s");
    const RefreshTokens = createjwts(user,"Refersh Key" ,"10m");    
    res.cookie("AccessTokens", AccessTokens, {
      MaxAge: 600000,
      httpOnly:true
    });
    res.cookie("RefreshTokens", RefreshTokens, {
      MaxAge: 600000,
      httpOnly:true
    });
    res.status('200').json('Logged in');
  } catch (err) {
    res.status("400").json(err);
  }
};
module.exports.Logout =async(req,res)=>{
  res.cookie("AccessTokens", '', {
    MaxAge: 0,
    httpOnly:true
  });
  res.cookie("RefreshTokens", '', {
    MaxAge: 0,
    httpOnly:true
  });
  res.json("logged out")
}
