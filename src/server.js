const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
    console.log('entrou');
    res.json({oi: 'mundo'})
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
