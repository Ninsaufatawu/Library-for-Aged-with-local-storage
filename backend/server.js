import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import uploadBooks from './routes/uploadRoutes.js';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the uploads directory
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to my library');
});

app.use('/upload', uploadBooks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
