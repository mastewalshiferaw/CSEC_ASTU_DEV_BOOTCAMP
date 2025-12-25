const express = require('express');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const PORT = 3000;


app.use(express.json());


app.use('/', pageRoutes);


app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});