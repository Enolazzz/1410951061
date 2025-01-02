const {createApp,ref}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[
                
            ]
        }
    }
}).mount("#strollcontainer");


//myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})


$.ajax({
    url:"/Enolazzz",
    method: "get",
    dataType: "json",
    success: results=>{
        vueProfolio.Portfolio = results;
    }

})