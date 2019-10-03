const express = require('express');
const bodyParser = require('body-parser');
var uuid = require('uuid');

const app = express();
  var mysql = require('mysql')
  var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Findia'
})
connection.connect(function(err){
    if(err) throw err;
    
    console.log('Connected to database');
})



app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true})); 

app.get('/',function(req,res){
    return res.redirect('/post');
});


/*

app.get('/put', function(request, response){
    return response.render('Put'); 
}); 

app.post('/put-result', function(request, response){
    
    
    var id= request.body.id;
    var name =  request.body.name ;
    var bio =   request.body.bio;
    var img =   request.body.img ;
    var link =  request.body.link ;
    var desc =  request.body.desc ;
    var hl =    request.body.hl ;
    var active = request.body.active;
   
    
   // I was not sure if I should update all or only a few
    connection.query('update photograph set PhotographerName = ?, Bio = ?, image = ?, WebLink = ?, Desc = ?, HeadLine= ?, Active = ?  where ID = ?', [name, bio, img, link, desc, hl, active, id ], function(err, rows){
  connection.release();
}); */ 

//Have to debug put- command will be4 done by tonight ;
   
    
    connection.query(getv, function(err, result, fields){
        if(err) throw err
         response.send(request.body.name + "  your id is  " + id);
        console.log("ID is" + id);
        
    });
    
   
    
    connection.end();
    
    return ;
   
})


app.get('/delete', function(request, response){
    return response.render('delete'); 
}); 

app.post('/delete-result', function(request, response){
    
    id = request.body.ID;
    
    var del = "DELETE FROM photograph WHERE ID = '" + id + "'";
    
     connection.query(del, function(err){
        if(err) throw err
         response.send(id + " is deleted");
        console.log("deleted ID is " + id);
        
    });

}); 

app.get('/get', function(request, response){
    return response.render('Get');
}); 

app.post('/get-result', function(request, response){
    
    
    var del = "SELECT* FROM photograph WHERE Active = '1'";
    
     connection.query(del, function(err,result){
        if(err) throw err
         response.send(result);
        console.log(result);
        
    });

}); 


app.get('/post', function(request, response){
    return response.render('Post'); 
}); 


app.post('/post-result', function(request, response){

    
    var id = uuid.v1();
    var name =  request.body.name ;
    var bio =   request.body.bio;
    var img =   request.body.img ;
    var link =  request.body.link ;
    var desc =  request.body.desc ;
    var hl =    request.body.hl ;
    var active = request.body.active;
   
    
    var getv = "insert into photograph Value('"+id+ "', '"+ name + "', '"+ bio + "', '"+ img + "', '"+ link + "', '"+ desc + "', '"+ hl + "', "+ active + ", null)";
   
    
    connection.query(getv, function(err, result, fields){
        if(err) throw err
         response.send(request.body.name + "  your id is  " + id);
        console.log("ID is" + id);
        
    });
    
   
    
    connection.end();
    
    return ;
   
})


app.listen(3000, function() {
    console.log('server on port 3000');
})

