const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./routes/userRoutes')); // You will set up routes later

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
