const axios = require('axios');
const express = require('express');
const { functions } = require('lodash');
const apiRouter = express.Router();
const coinReq = require('../Srv/index')


apiRouter.route('/info')
    .get(function(req, res) {

        res.json('Alet Nalet v1.0')
    });

apiRouter.route('/getCoin10_100_200_1dk')
    .post(async function() {

        let result = await coinReq.getCoin10_100_200_1dk();

        console.log(result)
    });

module.exports = apiRouter;