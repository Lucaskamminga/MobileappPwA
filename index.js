const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(express.static('public'));
 
app.get('/', (req, res) => {
    res.send('Hoi!');
});
 
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));