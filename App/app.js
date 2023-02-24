const btn1=document.getElementById("tab1");
const btn2=document.getElementById("tab2");
const btn3=document.getElementById("tab3");

// Buttton1
document.getElementById('tab1').addEventListener('click',()=>{
    if(btn2.classList[1]=="active"){
        btn2.classList.remove("active");
        btn1.classList.add("active")
    }else if(btn3.classList[1]=="active"){
        btn3.classList.remove("active");
        btn1.classList.add("active");
    }
    const heading=document.querySelector('.tab-content h1')
    heading.innerHTML="Tabs with soft transitioning effect!"
    const paras=document.querySelectorAll('.tab-content p')
    for(let para of paras){
        para.innerHTML=`About Me: I'm Rizone Hasan
        Fullstack Developer I’m a Full-stack web developer. I have a passion for learning and sharing my knowledge with others. `
    }
})
// Buttton2
document.getElementById('tab2').addEventListener('click',()=>{
    if(btn1.classList[1]=="active"){
        btn1.classList.remove("active");
        btn2.classList.add("active")
    }else if(btn3.classList[1]=="active"){
        btn3.classList.remove("active");
        btn2.classList.add("active");
    }
    const heading=document.querySelector('.tab-content h1')
    heading.innerHTML="Tab with soft Transition Heading Number 2"
    const paras=document.querySelectorAll('.tab-content p')
    for(let para of paras){
        para.innerHTML="Short paragraphs are easier to read and understand. Writing experts recommend paragraphs of no more than 150 words in three to eight sentences."
    }
})
// Buttton3
document.getElementById('tab3').addEventListener('click',()=>{
    if(btn1.classList[1]=="active"){
        btn1.classList.remove("active");
        btn3.classList.add("active")
    }else if(btn2.classList[1]=="active"){
        btn2.classList.remove("active");
        btn3.classList.add("active");
    }
    const heading=document.querySelector('.tab-content h1')
    heading.innerHTML="Tab with soft My Heading Number 3"
    const paras=document.querySelectorAll('.tab-content p')
    for(let para of paras){
        para.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eum maiores voluptatibus blanditiis quae quos voluptate omnis debitis non eligendi."
    }
})