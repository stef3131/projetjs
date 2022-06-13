
//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
      var fname= post.first_name;
      var lname= post.last_name;
      var mob= post.mob_no;

      var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + name + "','" + pass + "')";

      var query = db.query(sql, function(err, result) {

         message = "Succesfully! Your account has been created.";
         res.render('signup.ejs',{message: message});
      });

   } else 
   {
      res.render('signup');
   }
};
 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};

exports.dashboard = function(req, res, next){
           
   var user =  req.session.user,
   userId = req.session.userId;

   console.log('ddd='+userId);
   if(userId == null)
   {
      res.redirect("/login");
      return;
   }



    message = '';
    
  

   if(req.method == "POST")
   {
      //var submit = req.body.submit;

      //if(submit){

      var post  = req.body;
      var id= post.id;
      var nom_tache= post.nom_tache;
      var faite= post.faite;
      var description= post.description;

      

      var sql = "INSERT INTO `tache`(`nom_tache`,`faite`,`description_tache`,`id_utilisateur`) VALUES ('" + nom_tache + "','" + faite + "','" + description + "','" + id + "')";

      var query = db.query(sql, function(err, result) 
      {

         message = "Félicitations! Votre tâche a été créée.";
         res.render('dashboard.ejs',{message: message});
      });

   }
  // }

    

   messageb = '';
   if(req.method == "POST")
   {
     // var submit = req.submit;

     // if(submit === "bb"){
      var post  = req.body;
      var nom_categorie= post.nom_categorie;
      var couleur_categorie= post.couleur_categorie;
      

      var sqlc = "INSERT INTO `categorie`(`nom_categorie`,`couleur_categorie`) VALUES ('" + nom_categorie + "','"  + couleur_categorie + "')";

      var query = db.query(sqlc, function(err, result) 
      {

         messageb = "Félicitations! Votre catégorie de tâche a été créée.";
         res.render('dashboard.ejs',{messageb: messageb});
      });

   } 
   // }







   //var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   var nombredetaches = "select count(id_tache) as tata FROM users left JOIN tache ON users.id = tache.id_utilisateur where users.id = '"+userId+"'";
   //var nombredetaches = "SELECT count(*) from users left JOIN tache ON "+userId+" = 1";
      db.query(nombredetaches, function(err, resb){ 
         telb = resb[0].tata;
      /* for (i = 0; i < telb; i++) { 
      tache + telb = results[0].nom_tache
      } */
       //taches = resb.
      }); 

   var nombredetachesfaites = "select count(id_tache) as tati FROM users left JOIN tache ON users.id = tache.id_utilisateur where faite = 'oui' and users.id = '"+userId+"'";
   //var nombredetaches = "SELECT count(*) from users left JOIN tache ON "+userId+" = 1";
      db.query(nombredetachesfaites, function(err, rese){ 
         tele = rese[0].tati;

      }); 
   var nombredetachespasfaites = "select count(id_tache) as tato FROM users left JOIN tache ON users.id = tache.id_utilisateur where users.id = '"+userId+"' and faite = 'non'";
   //var nombredetaches = "SELECT count(*) from users left JOIN tache ON "+userId+" = 1";
      db.query(nombredetachespasfaites, function(err, resf){ 
         telf = resf[0].tato;

      }); 


   var sqlfaites="SELECT id, first_name, last_name, user_name, nom_tache, description_tache, nom_categorie FROM users left JOIN tache ON users.id = tache.id_utilisateur left join categorie on tache.id_tache = categorie.id_tache where faite = 'oui' and users.id = '"+userId+"'";
   db.query(sqlfaites, function(err, resc){ 
         for (i = 0; i < tele; i++) { 
      eval('tachefaite' + i + ' = \'' + resc[i].nom_tache + '\';');
      eval('nomcategorie' + i + ' = \'' + resc[i].nom_categorie + '\';');
      eval('descriptionfaite' + i + ' = \'' + resc[i].description_tache + '\';');

      //this["tache"+telb] = results[0].nom_tache;
      } 
     
      });
   var sqlpasfaites="SELECT id, first_name, last_name, user_name, nom_tache, description_tache, nom_categorie FROM users left JOIN tache ON users.id = tache.id_utilisateur left join categorie on tache.id_tache = categorie.id_tache where users.id = '"+userId+"' and faite = 'non'";
   db.query(sqlpasfaites, function(err, resd){ 
         for (i = 0; i < telf; i++) { 
      eval('tachepasfaite' + i + ' = \'' + resd[i].nom_tache + '\';');
      eval('nomcategoriep' + i + ' = \'' + resd[i].nom_categorie + '\';');
      eval('descriptionfaitep' + i + ' = \'' + resd[i].description_tache + '\';');
      //this["tache"+telb] = results[0].nom_tache;
      } 
     
      });
   var sql="SELECT id, first_name, last_name, user_name, nom_tache FROM users left JOIN tache ON users.id = tache.id_utilisateur where users.id = '"+userId+"'";
   //var sql="SELECT id, first_name, last_name, user_name FROM users left JOIN tache ON "+userId+" = 1";
   db.query(sql, function(err, results){



      
      //var tel = results[0];
      /*for (i = 0; i < telb; i++) { 

      this["tache"+telb] = results[0].nom_tache;
      } */
for (i = 0; i < telb; i++) { 
      eval('tache' + i + ' = \'' + results[i].nom_tache + '\';');
      //this["tache"+telb] = results[0].nom_tache;
      } 
      

      tel = results[0].id;
      //taches = results[0].nom_tache;

      res.render('dashboard.ejs', {user:user});  
      //res.render("dashboard.ejs", {"results" : results}, {}, function (err, str) { });  
   });       
};






//------------------------------------logout functionality----------------------------------------------
exports.logout=function(req,res){
   req.session.destroy(function(err) {
      res.redirect("/login");
   })
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//---------------------------------edit users details after login----------------------------------
exports.editprofile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};
