const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {

    resizeBy.sendFile(path.join(__dirname,'public/index.html')); // Solicitudes get y raiz del sitio
});
    const PORT = process.env.PORT || 3000;

    app.listen(PORT,()=> {
        console.log("El servidor esta ejecutandose en https://localhost:$(PORT)")
    
    }
);
