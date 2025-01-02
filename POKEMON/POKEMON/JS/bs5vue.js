const {createApp,ref,onUpdated}  = Vue;

var myService = createApp({
    data() {
        return{
            Services:[]
        }
    },
    setup(){
        onUpdated(()=>{
         console.log("onUpdate");
         ScrollTrigger.batch(".card", {
            //interval: 0.1, // time window (in seconds) for batching to occur. 
            //batchMax: 3,   // maximum batch size (targets)
           onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
           onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
           onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
           onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
           
            // you can also define things like start, end, etc.
        });
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".card", {y: 0}));
         //gsap.to(".card",{
         //   scrollTrigger:{
         //                 trigger: "#filter",
         //                 start: "top 250px", //"top center", "10px 80%"
         //                 end: "bottom 100px",//"+=200"
         //                 toggleActions: "restart restart pause pause",//play, pause, resume, reverse, complete, restart, reset, or none.
         //                 scrub: 1, //1 sec, or  srub:true start到end的時間
         //                 //horizontal: true,
         //                 markers: true
         //             },
         //             opacity: 0,
         //             duration: 5//no use if scrub:1
         //             
         //           }
         //     )
            }
        )
    }
}).mount("#card-container");


//myService.Services.push({icon: "fa-lock", heading:"Web Security", text:"asdf adf adf"})
$.ajax({
    url:"/POKEMON",
    method: "get",
    dataType: "json",
    success: results=>{
        myService.Services = results;
    }

})