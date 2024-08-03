import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import uploadBooks from './routes/uploadRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to my library');
});

app.use('/upload', uploadBooks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
