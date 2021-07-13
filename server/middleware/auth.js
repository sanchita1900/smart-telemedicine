const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
        const decodedToken = jwt.verify(token, 'test');
        console.log(decodedToken);
        req.decodedToken = decodedToken;
        next();
        }
    }catch(err){
        console.log(e);
    res.status(401).json({
      error: new Error('Invalid request!'),
    });
    }
}