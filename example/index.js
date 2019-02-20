const ApiModule = require("../lib").default;

const apiModuleA = new ApiModule({
    apiMetas: {
        A: {
            aaa: {
                method: 'get',
                url: '/api/stock/list',
                name: '获取股票列表',
            }
        }
    },
    module: true
});

const apiModuleB = new ApiModule({
    apiMetas: {
        B: {
            bbb: {
                method: 'post',
                url: '/api/23123',
                name: '获取股票列表',
            }
        }
    },
    module: true
});

ApiModule.registeForeRequestMiddleWare((apiMeta, data, next) => {
    console.log(apiMeta.url);
    next();
})

apiModuleA.registeForeRequestMiddleWare((apiMeta, data, next) => {
    console.log(apiMeta)
    console.log(data)
    next();
})

apiModuleA.registeFallbackMiddleWare((apiMeta, error, next) => {
    console.log(apiMeta)
    // console.error(error)
    next(error);
})

// console.log(apiModule)
// console.log(apiModuleA.getInstance())
console.log(apiModuleA.getInstance().A.aaa({ query: { key: 123 } }))

// console.log(apiModuleB.getInstance())
console.log(apiModuleB.getInstance().B.bbb({ body: { key: 123 } }))