console.log('oi')

import express from "express"

const app = express()
const port = 3001

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
} )