import express from 'express';
import {MongoDataSource} from "../../db/MongoDataSource";
import debug from 'debug';
import {DeleteResult, Document} from 'mongodb';

const router = express.Router();


const logger = debug('api-transactions');

// The `/api/transaction` endpoint

router.get('/', (req, res) => {
    // find all exercise types
    const collection = process.env.DB_COLLECTION_TRANSACTIONS || 'transactions';
    MongoDataSource.getInstance().getDatabase().collection(collection).find().sort({createdOn: 1}).toArray().then((results: Document[]) => {
        logger(results.length);
        res.json(results);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});

router.get('/:id', (req, res) => {
    const collection = process.env.DB_COLLECTION_TRANSACTIONS || 'transactions';
    MongoDataSource.getInstance().getDatabase().collection(collection).findOne({_id: req.params.id}).then((result: Document | null) => {
        logger(result);
        if (!result) result = {_id: req.params.id};
        res.json(result);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});

router.post('/', (req, res) => {
    const collection = process.env.DB_COLLECTION_TRANSACTIONS || 'transactions';
    MongoDataSource.getInstance().getDatabase().collection(collection).insertOne(req.body).then((value) => {
        logger(value);


        res.json(req.body);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});

router.put('/', (req, res) => {
    const collection = process.env.DB_COLLECTION_TRANSACTIONS || 'transactions';
    MongoDataSource.getInstance().getDatabase().collection(collection).replaceOne({_id: req.body._id}, req.body).then((result) => {
        logger(result);

        res.json(req.body);
    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});

router.delete('/:id', (req, res) => {
    const collection = process.env.DB_COLLECTION_TRANSACTIONS || 'transactions';
    MongoDataSource.getInstance().getDatabase().collection(collection).deleteOne({_id: req.params.id}).then((result: DeleteResult) => {

        logger(result);
        res.json(result);

    })
        .catch((err) => {
            logger(err);
            res.status(400).json(err);
        });
});

export = router;
