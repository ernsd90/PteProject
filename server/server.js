require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());  // This will allow all CORS requests
app.use(require('./routes/userRoutes')); // You will set up routes later
const readLoudRoutes = require('./routes/readLoudRoutes');
app.use('/api', readLoudRoutes);



const PORT = process.env.SERVERPORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 