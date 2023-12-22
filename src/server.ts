import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors());

server.use((req: Request, res: Response) => {
	res.status(404);
	res.json({error: 'Endpoint not found.'});
});

server.listen(process.env.PORT);