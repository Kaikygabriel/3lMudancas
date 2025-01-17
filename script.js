function  menu(){
    
    const s1 = document.getElementById('s1')
    const s11 = document.getElementById('s11')

    // Funcition para testar o tamanho do elemento
    function Intam(e){
        if(e.style.height =='40px'){
            return true
        }else{
            return false 
        }
    }

    function Intam2(e){
        if(e.style.height =='41px'){
            return true
        }else{
            return false 
        }
    }
    // 
    if(Intam(s1)){
        s11.style.left ='0%'
        s1.style.height ='41px'
        
    } else if(Intam2(s1)){
        s11.style.left ='-100%'
        s1.style.height = '40px'
        
    } else{
        alert('[ERROR-01]Não foi possivel abrir o menu, tente novamente')
    }
}

function pj(){
    window.scroll({
        top:940,
        behavior:"smooth",
    })
}
function inicio(){
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
function sobre(){
    window.scroll({
        top:500,
      
        behavior:"smooth",
    })
}