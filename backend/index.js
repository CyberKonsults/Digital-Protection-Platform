const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/api/health', (req, res) => res.send('API is running'));

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
