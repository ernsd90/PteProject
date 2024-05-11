const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();


if (!process.env.JWT_SECRET) {
    console.error("JWT Secret is not set!");
}
app.use(express.json());
app.use(cors());  // This will allow all CORS requests
app.use(require('./routes/userRoutes')); // You will set up routes later

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 