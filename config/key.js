if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
} else{
    module.exports = require('./dev');
}
//환경변수에 따라서 prod인지dev인지 선택