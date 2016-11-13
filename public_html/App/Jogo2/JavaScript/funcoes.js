$(function () {
    var i = 1;
    var operacao = [];
    var resultado = [];
    var indice1 = 0;
    var indice2 = 0;
    while (i <= 20) {
        operacao[i] = Math.floor(Math.random() * 10 + 1);
       // alert(operacao[i]);
        i++;
    }

    i = 1;

    while (i <= 20) {
        var indice1 = Math.floor(Math.random() * 20 + 1);
        var indice2 = Math.floor(Math.random() * 20 + 1);
        if (i <= 5) {
            resultado[i] = operacao[indice1] + operacao[indice2];
            if(i==1)
            document.getElementById("dv1").innerHTML = "<div id='dv1' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" + "+operacao[indice2]+" </div>";
            //document.getElementById("dv1").innerHTML = "<span id="sp1">"+resultado[i]+"</span>";
            $(dv1).text("deu");
            if(i==2)
            document.getElementById("dv2").innerHTML = "<div id='dv2' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" + "+operacao[indice2]+" </div>";
            if(i==3)
            document.getElementById("dv3").innerHTML = "<div id='dv3' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" + "+operacao[indice2]+" </div>";
           if(i==4)
            document.getElementById("dv4").innerHTML = "<div id='dv4' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" + "+operacao[indice2]+" </div>";
            if(i==5)
            document.getElementById("dv5").innerHTML = "<div id='dv5' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" + "+operacao[indice2]+" </div>";
            //alert(i + "= " + indice1 + "-" + indice2 + "-" + resultado[i]);

        }
        if ((i > 5) && (i <= 10)) {
            
            resultado[i] = operacao[indice1] - operacao[indice2];
           // alert(i + "Op = " + indice1 + "-" + indice2 + "-" + resultado[i]);
            if(i==6)
            document.getElementById("dv6").innerHTML = "<div id='dv6' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" - "+operacao[indice2]+" </div>";
            if(i==7)
            document.getElementById("dv7").innerHTML = "<div id='dv7' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" - "+operacao[indice2]+" </div>";
            if(i==8)
            document.getElementById("dv8").innerHTML = "<div id='dv8' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" - "+operacao[indice2]+" </div>";
           if(i==9)
            document.getElementById("dv9").innerHTML = "<div id='dv9' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" - "+operacao[indice2]+" </div>";
            if(i==10)
            document.getElementById("dv10").innerHTML = "<div id='dv10' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" - "+operacao[indice2]+" </div>";


        }
        if ((i > 10) && (i <= 15)) {
            resultado[i] = operacao[indice1] / operacao[indice2];
            if(i==11)
            document.getElementById("dv11").innerHTML = "<div id='dv11' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" : "+operacao[indice2]+" </div>";
            if(i==12)
            document.getElementById("dv12").innerHTML = "<div id='dv12' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" : "+operacao[indice2]+" </div>";
            if(i==13)
            document.getElementById("dv13").innerHTML = "<div id='dv13' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" : "+operacao[indice2]+" </div>";
           if(i==14)
            document.getElementById("dv14").innerHTML = "<div id='dv14' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" : "+operacao[indice2]+" </div>";
            if(i==15)
            document.getElementById("dv15").innerHTML = "<div id='dv15' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" : "+operacao[indice2]+" </div>";
            //alert(i + "= " + indice1 + "-" + indice2 + "-" + resultado[i]);

        }
        if ((i > 15)) {
            resultado[i] = operacao[indice1] * operacao[indice2];
            if(i==16)
            document.getElementById("dv16").innerHTML = "<div id='dv16' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" x "+operacao[indice2]+" </div>";
            if(i==17)
            document.getElementById("dv17").innerHTML = "<div id='dv17' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" x "+operacao[indice2]+" </div>";
            if(i==18)
            document.getElementById("dv18").innerHTML = "<div id='dv18' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" x "+operacao[indice2]+" </div>";
           if(i==19)
            document.getElementById("dv19").innerHTML = "<div id='dv19' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" x "+operacao[indice2]+" </div>";
            if(i==20)
            document.getElementById("dv20").innerHTML = "<div id='dv20' class='aqui cor1' ALIGN='center'> "+operacao[indice1]+" x "+operacao[indice2]+" </div>";
            //alert(i + "= " + indice1 + "-" + indice2 + "-" + resultado[i]);

        }
        i++;
    }
});

var temp = "";
$("#principal").mouseover(function () {
    $(this).css("cursor", "move");
});
$("td").mousedown(function (e) {
    e.preventDefault();
    var novo = $(this).children("span").clone(true);
    $("#principal").append(novo);
    novo.css({"position": "absolute",
        "top": (e.pageY - parseInt(novo.css("height"))) + 'px',
        "left": (parseInt($(this).offset().left)) + 'px',
        "backgroundColor": "red"});
    temp = novo;
});
$("#dv1").mouseup(function (e) {
    $("#principal").children("span").remove();
    if (temp.text() == 20) {
        e.preventDefault();
        $(this).text("");
    }

});
$("#dv2").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv3").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv4").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv5").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv6").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv7").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv8").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv9").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv10").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv11").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv12").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv13").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv14").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv15").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv16").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv17").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv18").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv19").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv20").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv21").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv22").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv23").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv24").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
$("#dv25").mouseup(function (e) {
    $("#principal").children("span").remove();
    $(this).text("");
    e.preventDefault();
    alert(temp.text());
});
// Função para apagar o span da div onde foi solta            
$(document).mouseup(function () {
    $("#principal").children("span").remove();
    temp = null;
});
//Função para exibir o movimento de transissão
$(document).mousemove(function (e) {
    if (temp !== "") {
        temp.css({"top": (e.pageY - parseInt(temp.css("height"))) + "px",
            "left": e.pageX + "px"
        });
    }
});
