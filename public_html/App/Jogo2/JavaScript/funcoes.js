$(function () {
    var i = 1;
    var operacao = [];
    var linhaOp="<table id='tb' border='1'>";
    var linhaRe="";
    var posicao = 0;
    var num1 = 0;
    var num2 = 0;
    
    while (i <= 20) {
        operacao[i] = Math.floor(Math.random() * 10 + 1);
        i++;
    }
     
    i=1;
    
    while (i <= 20) {
        num1 = operacao[Math.floor(Math.random() * 10 + 24)];
        num2 = operacao[Math.floor(Math.random() * 10 + 24)];
        if (i<=5){            
            resultado[i] = num1 + num2;
            linhaOp +=  "  <tr>  \n\
                                <td><div id="+ i +" class='aqui cor1' >"+ num1 + " + " + num2 +"</div></td>\n\
                            </tr>";
        }     
        if ((i>5) && (i<=10)) {
            resultado[i] = num1 - num2;
            linhaOp +=  "  <tr>  \n\
                                <td><div id="+ i +" class='aqui cor1' >"+ num1 + " - " + num2 +"</div></td>\n\
                            </tr>";
        }     
        if ((i>10) && (i<=15)){
            resultado[i] = num1 / num2;
            linhaOp +=  "  <tr>  \n\
                                <td><div id="+ i +" class='aqui cor1' >"+ num1 + " : " + num2 +"</div></td>\n\
                            </tr>";
        }     
        if (i>15){
            resultado[i] = num1 * num2;
            linhaOp +=  "  <tr>  \n\
                                <td><div id="+ i +" class='aqui cor1' >"+ num1 + " X " + num2 +"</div></td>\n\
                            </tr>";
        }     
        i++;
    }
    
    linhaOp += "</table>";
    
//    i=0;
//    while (i <= 5) {
//        var texto += "<tr>\n\
//                                <td class=' aqui cor2'><span>" +num[i]+"</span></td>\n\
//                                <td class=' aqui cor2'><span >"+num[i]+"</span></td>\n\
//                                <td class=' aqui cor2'><span>"+num[i]+"</span></td>\n\
//                                <td class=' aqui cor2'><span>"+num[i]+"</span></td>\n\
//                                <td class=' aqui cor2'><span>"+num[i]+"</span></td>\n\
//                            </tr>";
//    }

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
            //alert(soma());
            alert(num[14]);
            $(this).text(soma());
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
});