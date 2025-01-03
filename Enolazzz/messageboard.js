const commentslist =[
    {
        name:"3t2",
        comment1:
        "welcome.",
        time :"Mon Dec 02 2024"
    },{
        name:"God of Thunder ⚡︎ ",
        comment1:
        "나 아직 살아있다 ",
        time :"Wed Jan 31 2024"
    },{
        name:"Owner of the Rift ☽",
        comment1:
        "여름 겨울",
        time :"Tue Dec 24 2024"
    
    },{
        name:"The Unkillable King 𖤓 ",
        comment1:
        "T1 is the past, now, and future. ",
        time :"Tue May 07 2024"
    },{
        name:"Show and Prove ☼ ",
        comment1:
        "T1 is where the best belongs. ",
        time :"Tue Feb 06 2024"
    },{
        name:"Legendary Genius Monster ⭒ ",
        comment1:
        "Vamos! ",
        time :"Mon Oct 14 2024"
    }
    ];
    const commentsBox=document.querySelector('#commentslist');
    const btnSubmit = document.querySelector('#btn-submit');
    let nameInput = document.querySelector('#name');
    let commentInput = document.querySelector('#comment');
    
    const renderComments=function(commentslist){
            commentsBox.innerHTML=""
    
    commentslist.forEach((item)=>{
                commentsBox.insertAdjacentHTML(
                        'beforeend',
               `<hr>
                <h4>
            <span>${item.name}</span>
            <span class="date">${item.time}</span>
            </h4>
                <p>${item.comment1}</p>
            `	
            )	
         }
       )
    }
    
    renderComments (commentslist);
    
    btnSubmit.onclick =function(){
        let nameStr = nameInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
        let commentStr = commentInput.value.replace(/<(\/?\w+)>/g,"&lt;$1&gt;");
        if(nameStr!=""&&commentStr!=""){
        commentslist.unshift(
        {
            name :nameStr,
            comment1: commentStr,
            time:new Date(),
        }
    
        );
        renderComments(commentslist);
        commentInput.value=""
    }
    else
        alert('please enter your name and content')
    }