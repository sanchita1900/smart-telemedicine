const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
        const decodedToken = jwt.verify(token, 'test');
        console.log(decodedToken);
        if(decodedToken.type !== 'patient'){
            return res.status(403).json({message:" unauthorized, should be patient"})
        }
        req.decodedToken = decodedToken;
        next();
        }
    }catch(err){
        console.log(err);
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
    }
}