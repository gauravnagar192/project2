var assignments = [
    {
        code:"calculus",
        name:"calculus assignment 1",
        free:true
    } ,
    {
        code:"calculus",
        name:"calculus assignment 2",
        free:true
    } ,
    {
        code:"calculus",
        name:"calculus advance assignment 1",
        free:false
    } ,
    {
        code:"calculus",
        name:"calculus advance assignment 2",
        free:false
    } ,
    {
        code:"algebra",
        name:"algebra assignment 1",
        free:true
    } ,
    {
        code:"algebra",
        name:"algebra advance assignment 1",
        free:false
    } ,
    {
        code:"algebra",
        name:"algebra advance assignment 2",
        free:false
    } ,
    {
        code:"trigonometry",
        name:"trigonometry assignment 1",
        free:true
    } ,
    {
        code:"trigonometry",
        name:"trigonometry assignment 2",
        free:true
    } ,
    {
        code:"trigonometry",
        name:"trigonometry assignment 3",
        free:true
    } ,
    {
        code:"trigonometry",
        name:"trigonometry advance assignment 1",
        free:false
    } 
];
var nsub = document.getElementById('n-submit');
var find = document.getElementById('fa');


find.addEventListener('click', (e) => {
    e.preventDefault();
    let code = document.getElementById('code');
    code = code.value;
    let result ;
    let j = 1 ;
    let sec1A = document.getElementById('sec1-A');
    let sec1B = document.getElementById('sec1-B');
    let sec2 = document.getElementById('sec2');


    sec1A.innerText = code;
    sec1B.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum fermentum urna, eu pulvinar eros hendrerit sed. Sed sit amet efficitur nunc, sit amet gravida sapien. Nunc et vulputate diam, ut tincidunt turpis. Duis aliquet ac nulla ut maximus. Vivamus eleifend non magna in porttitor. Suspendisse non erat nisi. Aenean tempor maximus magna ut tristique.';


    // Code for Removing the Previous Search Result
    let child1 =  document.getElementsByClassName('col1');
    let child2 =  document.getElementsByClassName('col2');
    let childrenCount = child1.length;
    for (let i = 0; i < childrenCount ; i++) {
        sec2.removeChild(child1[child1.length-1])
        sec2.removeChild(child2[child2.length-1])
    }    

    // Code for Searching the Assignment
    for (let i = 0; i < assignments.length; i++) {
        if(code === assignments[i].code) {
            let div1 = document.createElement('div');
            let div1_content = document.createTextNode(j+'. '+assignments[i].name);
            j++;
            let div2 = document.createElement('div');
            if(assignments[i].free){
                var div2_content = document.createTextNode('Free Download');
            } else {
                var div2_content = document.createTextNode('Pay Now');
            }
            div1.appendChild(div1_content);
            div2.appendChild(div2_content); 
            div1.classList.add('col1');
            div2.classList.add('col2');
            div2.setAttribute('data-toggle','modal')
            div2.setAttribute('data-target','#exampleModal')
            sec2.appendChild(div1);
            sec2.appendChild(div2);         
            
        }    
    }

})


nsub.addEventListener('click' , (e) => {
    e.preventDefault();
})


