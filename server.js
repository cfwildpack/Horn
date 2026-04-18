const express = require('express');
const app = express();
const port = 8000;

app.get('/horn', (req, res) => {
    res.json({
        animal: "Bull",
        hornLength: "85 cm",
        material: "Keratin",
        status: "Healthy"
    });
});

app.listen(port, () => {
    console.log(`Horn research API running at http://localhost:${port}`);
});
