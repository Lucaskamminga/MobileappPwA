const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
 
app.use(express.static('Public'));
 

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));