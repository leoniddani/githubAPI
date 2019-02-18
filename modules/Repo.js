const mysql = require('./../database/mysql');
exports.getAllRepo = (req,res)=>{
    let query = 'SELECT * FROM `githubstared` ORDER BY id DESC;';
    mysql.query(query , (error,resp)=>{
        try {
            if (error){
                throw error;
            }
            else {
                res.send({
                    success: true,
                    message: 'succesfull',
                    data : resp
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send({
                success: false,
                message: 'failed'
            });
        }
    });
};
