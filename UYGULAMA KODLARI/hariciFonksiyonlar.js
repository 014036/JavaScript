//X ile Y Arasındaki Sayıların Yazdırılması

function ikiSayiArasiniYazdir(x,y){
    if(x<y){
     for(var i=x; i<=y; i++){
        document.write(i+"<br>");
    }   
    }else if(y<x){
        for(var i=y; i<=x; i++){
            document.write(i+"<br>");
        }
    }else{
        document.write("Girilen sayilar esittir")
    }
    
}

function topla(x,y){
    return a+b;
}
function carpmaIslemiYap(x,y){
return x*y;
}

function bolmeIslemiYap(x,y){
    return x/y;
}

function karesiniBul(x){
    return x*x;
}

function kupunuAl(x){
    return x*x*x;
}

function ekranaYaz(metin){
    document.write(metin+"<br>");
}

function ikiSayiArasiniTopla(a, b){
    var toplam=0;
    if(b<a)  {
        for(var i=b; i<=a; i++){
            toplam+=i;
        }
        return toplam;
    }else if(a<b){
        var toplam=0;
        for(var i=a; i<=b; i++){
            toplam=toplam+i;
          }
          return toplam;  
         
}else{
     document.write("Girilen sayilar esit ");
     toplam=a;
     return toplam;
} }



// faktoriyel hesapla
function faktoriyelHesapla(sayi){
    var faktriyel=1;
    for(var i=1; i<=sayi; i++){
        faktriyel*=i;
    }
    return faktriyel;
}