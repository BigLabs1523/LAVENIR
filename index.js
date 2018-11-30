//démarer le serveur en mode automatique :> nodemon
const express = require("express");
const app = express();
var port_ecoute = 8092;
app.set("views ","./views");
app.set("view engine","ejs");
app.use('/CSS',express.static('CSS')); //ajout du style.css du dossier CSS
app.use('/img',express.static('img'));
app.use('/js',express.static('js'));
app.use('/include',express.static('include'));
app.use('/fonts',express.static('fonts'));


app.get("/",(req,res)=>{ //// Lance la page index.ejs
    res.render('index');
});
app.get("/Actu",(req,res)=>{ //// Lance la Actualité
    res.render('Actu');
});
app.get("/CGU",(req,res)=>{ //// Lance la page CGU
    res.render('CGU');
});
app.get("/Concours",(req,res)=>{ //// Lance la page Concours
    res.render('concours');
});
app.get("/Contact",(req,res)=>{ //// Lance la page Contact
    res.render('contact');
});
app.get("/Formulaire",(req,res)=>{ //// Lance la page formulaire
    res.render('formulaire');
});
app.get("/Galerie",(req,res)=>{ //// Lance la page Galerie
    res.render('galerie');
});
app.get("/Informations",(req,res)=>{ //// Lance la page Informations
    res.render('informations');
});
app.get("/onisep",(req,res)=>{ //// Lance la page Onisep
    res.render('onisep');
});



app.listen(port_ecoute,function(){
    console.log("##############################################");
    console.log("#                                            #");
    console.log("#        >>> Port d'écoute: " + port_ecoute + " <<<         #");
    console.log("#                                            #");
    console.log("##############################################");


});
