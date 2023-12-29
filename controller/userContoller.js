let credential = {
    username: 'vishnu',
    password: '123456',
  };

//get home and login pages
const getPages=(req,res)=>{
    if (req.session.user) {
     
        res.render('user/homePage');
      } else {
       
        res.render('user/loginPage', { loginErr: req.session.loginErr });
        req.session.loginErr = false;
      }
}

//login 
const login=(req,res)=>{
    if (
        req.body.username == credential.username &&
        req.body.password == credential.password
      ) {
        req.session.user = req.body.username;
        res.redirect('/');
      } else {
        req.session.loginErr =
        "Incorrect email address or password.";
        res.redirect('/');
      }
}
//logout
const logout=(req,res)=>{
    req.session.destroy();
    res.redirect('/');
}










module.exports={
    getPages,login,logout
}