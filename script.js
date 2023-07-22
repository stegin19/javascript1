

data1=0;
data2=0



function add(){
    data=parseInt(document.getElementById("num").value);

    if(data1==0){
     data1 = parseInt(document.getElementById("num").value);
    document.getElementById("result1").innerHTML = data1;
    data2+=data;

    }
    else{
        document.getElementById("result1").innerHTML = data1+data;
        data2+="+" +data;
        data1 += data;
        
    }    
}

function sub(){
    data=parseInt(document.getElementById("num").value);

    if(data1==0 && data2==0){
     data1 = parseInt(document.getElementById("num").value);
    document.getElementById("result1").innerHTML = data1;
    data2=data;

    }
    else{
        document.getElementById("result1").innerHTML = data1-data;
        data2+= "-"+data;
        data1 -= data;
        
    }    
}

function mul(){
    data=parseInt(document.getElementById("num").value);

    if(data1==0){
     data1 = parseInt(document.getElementById("num").value);
    document.getElementById("result1").innerHTML = data1;
    data2=data;

    }
    else{
        document.getElementById("result1").innerHTML = data1*data;
        data2+= "*"+data;
        data1 *= data;
        
    }    
}

function div(){
    data=parseInt(document.getElementById("num").value);

    if(data1==0){
     data1 = parseInt(document.getElementById("num").value);
    document.getElementById("result1").innerHTML = data1;
    data2=data;

    }
    else{
        document.getElementById("result1").innerHTML = data1/data;
        data2+= "/"+data;
        data1 /= data;
        
    }    
}



function submit(){
    document.getElementById("result2").innerHTML = data2;
}


