const { json } = require("express");
const express = require("express")
const app = express()
const knex = require ("./db")



class Contenedor {
    constructor({knex}){
  }

    save(){
        app.post("/", (res, req)=>{
            let data = [{
                name:"Balanceado",
                price:5000,
                image:"https://www.danec.com/wp-content/uploads/2018/01/prod_ind_balanceados.jpg"
            }];
        
            knex("productospet")
                .insert(data)
                .then(()=> {
                    console.log("El producto se guardo correctamente!");
                })
                .catch((err)=> {
                    console.log(err);
                })
        
        
        })
    }
    getById(){
       app.get("/:id", (req, res)=>{
           knex.from("productospet").where({id:req.params.id})
           .then((json)=>{
               res.send({data : json});
           })
           .catch((err)=>{
               res.send("Error al buscar el producto");
           })
       })
    }
    getAll(){
        
        app.get("/all", (req, res)=>{
            knex.from("productospet").then((res)=>{
            console.log(res);
    })
})
    }
    deleteById(){
        app.delete("/delete/:id", (req, res)=>{
            knex("productospet")
            .where({id: req.params.id})
            .del()
            .then((json)=>{
                res.send("Producto eliminado")
            })
            .catch((err)=>
                res.send("Error al eliminar elproducto"))
        })
    }
    
}


save();
getById();
getAll();
deleteById();





app.listen(8080, ()=>{
    console.log("Server ok!");
})
