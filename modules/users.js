const mysql = require('./../database/mysql');
const request = require('request');


exports.getUser = (req,res)=>{
    try {
        let username = req.query.username;
        let password = req.query.password;
        let options = {
            url: 'https://'+username+':'+password+'@api.github.com/user/starred',
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(options, (error, response, body)=> {
            try {
                if (error){
                    throw error
                }
                else {
                    try {
                        let myJsonObject = JSON.parse(body);
                        let checkArray = Array.isArray(myJsonObject);
                        if ( checkArray == false) {
                            throw error;
                        }
                        else {
                            insertToDb(myJsonObject , (data)=>{

                                GetUserInfo(username,password,(callback)=>{
                                    let StarredObj ={};
                                    StarredObj = callback;
                                    StarredObj.starred = data;
                                    res.send({
                                        success: true,
                                        message: 'succesfull',
                                        data : callback
                                    });
                                });
                            })
                        }
                    }
                    catch (error) {
                        console.log(error);
                        res.send({
                            success: false,
                            message: 'failed'
                        });
                    }
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
    }catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: 'failed'
        });
    }

    function insertToDb(myJsonObject , callback) {
        let StarredHtml = [];
        let StarredObj = {};
        myJsonObject.forEach( (elm) => {
            StarredHtml.push(elm.html_url);
            let query = 'INSERT INTO `githubstared` ( `giturl`, `ownerurl`) VALUES ("'+elm.html_url+'", "'+elm.owner.html_url+'");';
            mysql.query(query , (error,resp)=>{
                if (error){
                    throw error;
                }
            });
        });
        callback(StarredHtml)
    }

    function GetUserInfo(username,password,callback) {

        let options = {
            url: 'https://'+username+':'+password+'@api.github.com/user',
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get(options, (error, response, body)=> {
            try {

                let JsonObject = JSON.parse(body);
                        let UserDetail = {};

                        UserDetail.avatar_url = JsonObject.avatar_url;
                        UserDetail.name = JsonObject.login;
                        UserDetail.html_url = JsonObject.html_url;
                        UserDetail.created_at = JsonObject.created_at;
                        UserDetail.updated_at = JsonObject.updated_at;
                        UserDetail.plan = JsonObject.plan.name;
                        RepoData = UserDetail;
                        callback(UserDetail);

            }catch (error) {
                console.log(error);
                res.send({
                    success: false,
                    message: 'failed'
                });
            }

        });

    }

};

