const express=require('express');
const bodyParser=require('body-parser');

const dishRouter=express.Router();

dishRouter.use(bodyParser.json());

//dishRouter.route('/')

// const dishRouter2=express.Router();

// dishRouter2.use(bodyParser.json());


dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();   
})

.get((req,res,next) =>{
    res.end("Will send all the dishes");
})

.put((req,res,next) =>{
    res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
})
.post((req,res,next) =>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req,res,next) =>{
    res.end("Deleting all the dishes");
});

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of dishId:' + req.params.dishId);
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation is not permitted on this route /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        res.end(`Will add the updated dish details of dishId: ${req.params.dishId}, dish details name:${req.body.name} description:${req.body.description}`);
    })
    .delete((req, res, next) => {
        res.end('Will delete the  details of the dish of ID:' + req.params.dishId);
    });

//dishRouter.route('/dishes/')

module.exports=dishRouter;
//module.exports=dishRouter2;