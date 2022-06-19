var express = require('express');
var router = express.Router();
const { RandomPHUB } = require('discord-phub');
const nsfw = new RandomPHUB(unique = true);

router.get('/', (req, res) => {
   
    const data = nsfw.getRandomInCategory('pussy', "jpg");

    res.status(200).send({
        url: data.url,
        
    });
});

module.exports = router;
