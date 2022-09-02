const {porta, app} =require('./config/servidor')

app.listen(porta,()=>{
    console.log('http://localhost:'+porta)
})