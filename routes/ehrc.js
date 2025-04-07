var express = require('express');
var router = express.Router();


export class EHRCRouter {
    constructor() {
        this.router = express.Router();
        this.router.get('/:id', this.handleAAIntakeRetrieve.bind(this));
    }

    getRouter() {
        return this.router;
    }

    /**
     * GET handler to retrieve a folder and its children.
     * @param {Request} req
     * @param {Response} res
     * @returns
     */
    async handleAAIntakeRetrieve(req, res) {
        const idParam = req.params.id;

        if (idParam) {
            res.json({ idParam });
        }
    }
}
