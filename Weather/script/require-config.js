debugger;
require.config({
    baseUrl:"script",
    paths:{
        weather:"app",
        main:"main"
    }
})
require(["main"])

