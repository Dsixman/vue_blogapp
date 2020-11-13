const webpack = require('webpack')
module.exports={
	devServer:{
		proxy:{
		'/api/v1':{
			target:'http://localhost:3000/',
			ws:true,
			changeOrigin:true,
			pathRewrite:{
				'^/api/v1':''
			}
		   },
	    },
      //开发环境下提供内网穿透时使用，可以让外网访问项目
	    //disableHostCheck: true
    }
}
