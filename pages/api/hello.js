import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    console.log(req.query)

    res.status(200).json({ text: 'Hello Yakov', query: req.query, path: __dirname });
}
