const axios = require("axios");

class Pelicula {

    //métodos controladores...
    async findTopRated(){
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }


    async searchById(id){

    }


};


let moviesController = new Pelicula();
module.exports = moviesController;