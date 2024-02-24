function cricket(i){
   
    let tag=document.getElementsByTagName('a');
    for(let j=1;j<5;j++){
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }
    let subnav2=document.getElementById('sub-navbar2');
    subnav2.style.visibility ='hidden';
    subnav2.style.height='0%';
    subnav2.style.transition='none';
    
    let subnav3=document.getElementById('sub-navbar3');
    subnav3.style.visibility ='hidden';
    subnav3.style.height='0%';
    subnav3.style.transition='none';
    
    let subnav4=document.getElementById('sub-navbar4');
    subnav4.style.visibility ='hidden';
    subnav4.style.height='0%';
    subnav4.style.transition='none';
    
    let subnav5=document.getElementById('sub-navbar5');
    subnav5.style.visibility='hidden';  
    subnav5.style.height='0%';
    subnav5.style.transition='none';

    
    let subnav=document.getElementById('sub-navbar');
    let blur_box=document.getElementById('container2');
    tag[i].style.backgroundColor="black";
    tag[i].style.color="white";
    if(subnav.style.visibility!='visible'){ 
        subnav.style.transition ='all .5s linear ';
        subnav.style.height='100%';
        subnav.style.visibility ='visible';
        subnav.style.backgroundColor='white';
        blur_box.style.visibility="visible";
    }
    else{
    tag[i].style.backgroundColor="white";
    tag[i].style.color="black";
    subnav.style.visibility ='hidden';
    subnav.style.height='0%';
    subnav.style.transition='none';
    blur_box.style.visibility="hidden";
    }
   
}
function football(i){
    let tag=document.getElementsByTagName('a');
    for(let j=0;j<5;j++){
    if(i==j){
        j++;
     }
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }
    let subnav=document.getElementById('sub-navbar');
    subnav.style.visibility ='hidden';
    subnav.style.height='0%';
    subnav.style.transition='none';

    let subnav3=document.getElementById('sub-navbar3');
    subnav3.style.visibility ='hidden';
    subnav3.style.height='0%';
    subnav3.style.transition='none';

    let subnav5=document.getElementById('sub-navbar5');
    subnav5.style.visibility='hidden';  
    subnav5.style.height='0%';
    subnav5.style.transition='none';

    let subnav4=document.getElementById('sub-navbar4');
    subnav4.style.visibility ='hidden';
    subnav4.style.height='0%';
    subnav4.style.transition='none';

    let subnav2=document.getElementById('sub-navbar2');
    let blur_box=document.getElementById('container2');
    tag[i].style.backgroundColor="black";
    tag[i].style.color="white";
    if(subnav2.style.visibility !='visible'){
        subnav2.style.visibility ='visible';
        subnav2.style.height='100%';
        subnav2.style.transition ='all .5s linear';
        subnav2.style.backgroundColor='white'
        blur_box.style.visibility="visible";
    }
    else{
        tag[i].style.backgroundColor="white";
        tag[i].style.color="black";
        subnav2.style.visibility ='hidden';
        subnav2.style.height='0%';
        subnav2.style.transition='none';
        blur_box.style.visibility="hidden";
    }
}
function badminton(i){
    let tag=document.getElementsByTagName('a');
    for(let j=0;j<5;j++){
    if(i==j){
        j++;
     }
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }

    let subnav=document.getElementById('sub-navbar');
    subnav.style.visibility ='hidden';
    subnav.style.height='0%';
    subnav.style.transition='none';

    let subnav2=document.getElementById('sub-navbar2');
    subnav2.style.visibility ='hidden';
    subnav2.style.height='0%';
    subnav2.style.transition='none';

    let subnav4=document.getElementById('sub-navbar4');
    subnav4.style.visibility ='hidden';
    subnav4.style.height='0%';
    subnav4.style.transition='none';

    let subnav5=document.getElementById('sub-navbar5');
    subnav5.style.visibility='hidden';  
    subnav5.style.height='0%';
    subnav5.style.transition='none';

    let subnav3=document.getElementById('sub-navbar3');
    let blur_box=document.getElementById('container2');
    tag[i].style.backgroundColor="black";
    tag[i].style.color="white";
    if(subnav3.style.visibility !='visible'){
        subnav3.style.visibility ='visible';
        subnav3.style.height='100%';
        subnav3.style.transition ='all .5s linear';
        subnav3.style.backgroundColor='white'
        blur_box.style.visibility="visible";
    }
    else{
        tag[i].style.backgroundColor="white";
        tag[i].style.color="black";
        subnav3.style.visibility ='hidden';
        subnav3.style.height='0%';
        subnav3.style.transition='none';
        blur_box.style.visibility="hidden";
}
}
function kabaddi(i){
    let tag=document.getElementsByTagName('a');
    for(let j=0;j<5;j++){
    if(i==j){
        j++;
     }
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }

    let subnav=document.getElementById('sub-navbar');
    subnav.style.visibility ='hidden';
    subnav.style.height='0%';
    subnav.style.transition='none';

    let subnav2=document.getElementById('sub-navbar2');
    subnav2.style.visibility ='hidden';
    subnav2.style.height='0%';
    subnav2.style.transition='none';
    
    let subnav3=document.getElementById('sub-navbar3');
    subnav3.style.visibility ='hidden';
    subnav3.style.height='0%';
    subnav3.style.transition='none';

    let subnav5=document.getElementById('sub-navbar5');
    subnav5.style.visibility='hidden';  
    subnav5.style.height='0%';
    subnav5.style.transition='none';

    let subnav4=document.getElementById('sub-navbar4');
    let blur_box=document.getElementById('container2');
    tag[i].style.backgroundColor="black";
    tag[i].style.color="white";
    if(subnav4.style.visibility !='visible'){
        subnav4.style.visibility ='visible';
        subnav4.style.height='100%';
        subnav4.style.transition ='all .5s linear';
        subnav4.style.backgroundColor='white'
        blur_box.style.visibility="visible";
    }
    else{
    tag[i].style.backgroundColor="white";
    tag[i].style.color="black";
    subnav4.style.visibility='hidden';  
    subnav4.style.height='0%';
    subnav4.style.transition='none';
    blur_box.style.visibility="hidden";
    }
}

function khokho(i){
    let tag=document.getElementsByTagName('a');
    for(let j=0;j<=3;j++){
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }
    
 
    
    let subnav=document.getElementById('sub-navbar');
    subnav.style.visibility ='hidden';
    subnav.style.height='0%';
    subnav.style.transition='none';
    
    let subnav2=document.getElementById('sub-navbar2');
    subnav2.style.visibility ='hidden';
    subnav2.style.height='0%';
    subnav2.style.transition='none';
    
    let subnav3=document.getElementById('sub-navbar3');
    subnav3.style.visibility ='hidden';
    subnav3.style.height='0%';
    subnav3.style.transition='none';
    
    let subnav4=document.getElementById('sub-navbar4');
    subnav4.style.visibility ='hidden';
    subnav4.style.height='0%';
    subnav4.style.transition='none';
    
    let subnav5=document.getElementById('sub-navbar5');
    let blur_box=document.getElementById('container2');
    tag[i].style.backgroundColor="black";
    tag[i].style.color="white";
    if(subnav5.style.visibility !='visible'){
        subnav5.style.visibility ='visible';
        subnav5.style.transition ='all .5s linear';
        subnav5.style.height='100%';
        subnav5.style.backgroundColor='white'
        blur_box.style.visibility="visible";
    }
    else{
    tag[i].style.backgroundColor="white";
    tag[i].style.color="black";
    subnav5.style.visibility='hidden'; 
    subnav5.style.height='0%';
    subnav5.style.transition='none';
    blur_box.style.visibility="hidden";
    }
}

function subnav_down(){
    let subnav=document.getElementById('sub-navbar');  
    let subnav2=document.getElementById('sub-navbar2'); 
    let subnav3=document.getElementById('sub-navbar3');
    let subnav4=document.getElementById('sub-navbar4');
    let subnav5=document.getElementById('sub-navbar5');
    subnav.style.transition="none";
    subnav2.style.transition="none";
    subnav3.style.transition="none";
    subnav4.style.transition="none";
    subnav5.style.transition="none"
    subnav.style.visibility='hidden';
    subnav2.style.visibility='hidden';
    subnav3.style.visibility='hidden';
    subnav4.style.visibility='hidden';
    subnav5.style.visibility='hidden';
    subnav.style.height='0%';
    subnav2.style.height='0%';
    subnav3.style.height='0%';
    subnav4.style.height='0%';
    subnav5.style.height='0%';

    let tag=document.getElementsByTagName('a');
    
    for(let j=0;j<5;j++){
    tag[j].style.backgroundColor="white";
    tag[j].style.color="black";
    }
    let blur_box=document.getElementById('container2');
    blur_box.style.visibility="hidden";
}