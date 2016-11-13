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
            if (i == 1) {
                $(dv1).text(operacao[indice1]+" + "+operacao[indice2]);
            }
            if (i == 2)
                $(dv2).text(operacao[indice1]+" + "+operacao[indice2]);
            if (i == 3)
                $(dv3).text(operacao[indice1]+" + "+operacao[indice2]);
            if (i == 4)
                $(dv4).text(operacao[indice1]+" + "+operacao[indice2]);
            if (i == 5)
                $(dv5).text(operacao[indice1]+" + "+operacao[indice2]);
            //alert(i + "= " + indice1 + "-" + indice2 + "-" + resultado[i]);

        }
        if ((i > 5) && (i <= 10)) {

            resultado[i] = operacao[indice1] - operacao[indice2];
            // alert(i + "Op = " + indice1 + "-" + indice2 + "-" + resultado[i]);
            if (i == 6)
                $(dv6).text(operacao[indice1]+" - "+operacao[indice2]);
            if (i == 7)
                $(dv7).text(operacao[indice1]+" - "+operacao[indice2]);
            if (i == 8)
                $(dv8).text(operacao[indice1]+" - "+operacao[indice2]);
            if (i == 9)
               $(dv9).text(operacao[indice1]+" - "+operacao[indice2]);
            if (i == 10)
                $(dv10).text(operacao[indice1]+" - "+operacao[indice2]);


        }
        if ((i > 10) && (i <= 15)) {
            resultado[i] = operacao[indice1] / operacao[indice2];
            if (i == 11)
                $(dv11).text(operacao[indice1]+" : "+operacao[indice2]);
            if (i == 12)
                $(dv12).text(operacao[indice1]+" : "+operacao[indice2]);
            if (i == 12)
                $(dv13).text(operacao[indice1]+" : "+operacao[indice2]);
            if (i == 13)
                $(dv13).text(operacao[indice1]+" : "+operacao[indice2]);
            if (i == 14)
                $(dv15).text(operacao[indice1]+" : "+operacao[indice2]);
            //alert(i + "= " + indice1 + "-" + indice2 + "-" + resultado[i]);

        }
        if ((i > 15)) {
            resultado[i] = operacao[indice1] * operacao[indice2];
            if (i == 16)
                $(dv16).text(operacao[indice1]+" / "+operacao[indice2]);
            if (i == 17)
                $(dv17).text(operacao[indice1]+" / "+operacao[indice2]);
            if (i == 18)
                $(dv18).text(operacao[indice1]+" / "+operacao[indice2]);
            if (i == 19)
                $(dv19).text(operacao[indice1]+" / "+operacao[indice2]);
            if (i == 20)
                $(dv20).text(operacao[indice1]+" / "+operacao[indice2]);
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
