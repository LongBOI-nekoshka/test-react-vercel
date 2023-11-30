const test = (app) => {
    
    app.get('/', async (req,res) => {
        res.send({
            data:"home",
        })
    });

    app.get('/test/', async (req,res) => {
        res.send({
            data:"this is a test data",
            urls:["/test/yournamehere/","/static/paul.jpg"]
        })
    });

    app.get('/test/:name', async (req,res) => {
        res.send({
            data:"Hi "+req.params.name,
        })
    });
}

module.exports= test;