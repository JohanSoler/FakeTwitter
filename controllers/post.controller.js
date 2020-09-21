                /**
                 * TASK:
                 * IMPLEMENT THE CONTROLLER 
                 */
const dbManager = require ('../database.config/database.manager');
const operator = require('sequelize');
const db = require('../database.config/database.manager');

async function createPost (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newPostObject = {
        message: req.body.message,
        published_date: req.body.published_date
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Post.create(newPostObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred 01"
            });
        }
    );
}




/**
 * GEt all post
 */
async function findAllPost (req, res){
    try {
        //Execute query
        const post = await dbManager.Post.findAll({});
        
        //Send response
        res.json({
                data: post
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Get post by id
 */
async function findOnePost (req, res){
    try {
        const { idPost } = req.params;

        //Execute query
        const post = await dbManager.Post.findOne({
            where: {
                idPost: idPost
            }
        });
        //Send response
        res.json(post);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.createPost = createPost; 
exports.findAllPost = findAllPost; 
exports.findOnePost=findOnePost;