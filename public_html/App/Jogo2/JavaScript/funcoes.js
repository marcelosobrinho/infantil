/* global dv16, res1, res15, dv15, dv1, dv2, res2, dv3, res3, dv4, res4, dv5, res5, dv6, res6, dv7, res7, dv8, res8, dv9, res9, dv10, res10, dv11, res11, dv12, res12, dv13, res13, dv14, res14, res20, dv20, res19, dv19, res18, dv18, res17, dv17, res16 */

$(function () {
    var i = 1;
    var operacao = [];
    var resultado = [];
    var indice1 = 0;
    var indice2 = 0;
    function random() {
        return Math.floor(Math.random() * 20 + 1);
    }
    function randomsemrepeticao() {
        var i;
    }
    // gera numeros randomico, para os operados
    while (i <= 20) {
        operacao[i] = Math.floor(Math.random() * 10 + 1);
        i++;
    }
    //-----------------------------------------------------
    
    //vetor para posicionamento randomico
    
    i = 1;
    var j = 1;
    var posicaoResposta = [];
    var num = 0;
    
    while (i <= 20){
        j = 1; 
        num = random();
        while (j <= 20){            
            if (posicaoResposta[j] === num){
                num = random();
                j = 1;
            } else {
                j++;
            }
        }
        posicaoResposta[i] = num;
        i++;
    }
//Conferir vetor aleatório    
//    i=1;
//    var q = [];
//    while (i <= 20){
//        q += posicaoResposta[i] + ", ";
//        i++;
//    }
//    alert(q);
    //-----------------------------------------------------
    i = 1;
    
    while (i <= 20) {
        // gera os indices random
        var indice1 = random();
        var indice2 = random();
        //--------------------------------------------------------
        
        
        if (i <= 5) {
            // soma de cada operador por volta
            resultado[i] = operacao[indice1] + operacao[indice2];
            //--------------------------------------------------
            // enviar os numeros e o sinal para div, sendo orientado pelo seu seletor. A condição limita a execução em apenas uma vez
            if (i === 1) {
                $(dv1).text(operacao[indice1] + " + " + operacao[indice2]);
            }
            if (i === 2) {
                $(dv2).text(operacao[indice1] + " + " + operacao[indice2]);
            }
            if (i === 3) {
                $(dv3).text(operacao[indice1] + " + " + operacao[indice2]);
            }
            if (i === 4) {
                $(dv4).text(operacao[indice1] + " + " + operacao[indice2]);
            }
            if (i === 5) {
                $(dv5).text(operacao[indice1] + " + " + operacao[indice2]);
                
            }
        }
        if ((i > 5) && (i <= 10)) {
            resultado[i] = operacao[indice1] - operacao[indice2];
            if (i === 6) {
                $(dv6).text(operacao[indice1] + " - " + operacao[indice2]);
            }
            if (i === 7) {
                $(dv7).text(operacao[indice1] + " - " + operacao[indice2]);
            }
            if (i === 8) {
                $(dv8).text(operacao[indice1] + " - " + operacao[indice2]);
            }
            if (i === 9) {
                $(dv9).text(operacao[indice1] + " - " + operacao[indice2]);
            }
            if (i === 10) {
                $(dv10).text(operacao[indice1] + " - " + operacao[indice2]);
            }

        }
        if ((i > 10) && (i <= 15)) {
            resultado[i] = operacao[indice1] / operacao[indice2];
            if (i === 11) {
                $(dv11).text(operacao[indice1] + " : " + operacao[indice2]);
            }
            if (i === 12) {
                $(dv12).text(operacao[indice1] + " : " + operacao[indice2]);
            }
            if (i === 13) {
                $(dv13).text(operacao[indice1] + " : " + operacao[indice2]);
            }
            if (i === 14) {
                $(dv14).text(operacao[indice1] + " : " + operacao[indice2]);
            }
            if (i === 15) {
                $(dv15).text(operacao[indice1] + " : " + operacao[indice2]);
            }
        }
        if ((i > 15)) {
            resultado[i] = operacao[indice1] * operacao[indice2];
            if (i === 16) {
                $(dv16).text(operacao[indice1] + " x " + operacao[indice2]);
            }
            if (i === 17) {
                $(dv17).text(operacao[indice1] + " x " + operacao[indice2]);
            }
            if (i === 18) {
                $(dv18).text(operacao[indice1] + " x " + operacao[indice2]);
            }
            if (i === 19) {
                $(dv19).text(operacao[indice1] + " x " + operacao[indice2]);
            }
            if (i === 20) {
                $(dv20).text(operacao[indice1] + " x " + operacao[indice2]);
            }
        }
        i++;
    }

        $(res1).text(resultado[posicaoResposta[1]].toFixed(2));
        $(res2).text(resultado[posicaoResposta[2]].toFixed(2));
        $(res3).text(resultado[posicaoResposta[3]].toFixed(2));
        $(res4).text(resultado[posicaoResposta[4]].toFixed(2));
        $(res5).text(resultado[posicaoResposta[5]].toFixed(2));
        $(res6).text(resultado[posicaoResposta[6]].toFixed(2));
        $(res7).text(resultado[posicaoResposta[7]].toFixed(2));
        $(res8).text(resultado[posicaoResposta[8]].toFixed(2));
        $(res9).text(resultado[posicaoResposta[9]].toFixed(2));
        $(res10).text(resultado[posicaoResposta[10]].toFixed(2));
        $(res11).text(resultado[posicaoResposta[11]].toFixed(2));
        $(res12).text(resultado[posicaoResposta[12]].toFixed(2));
        $(res13).text(resultado[posicaoResposta[13]].toFixed(2));
        $(res14).text(resultado[posicaoResposta[14]].toFixed(2));
        $(res15).text(resultado[posicaoResposta[15]].toFixed(2));
        $(res16).text(resultado[posicaoResposta[16]].toFixed(2));
        $(res17).text(resultado[posicaoResposta[17]].toFixed(2));
        $(res18).text(resultado[posicaoResposta[18]].toFixed(2));
        $(res19).text(resultado[posicaoResposta[19]].toFixed(2));
        $(res20).text(resultado[posicaoResposta[20]].toFixed(2));

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
    $("#dv1").mouseup(function () {
        $("#principal").children("span").remove();
        if (resultado[1] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }

    });
    $("#dv2").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[2] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv3").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[3] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv4").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[4] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv5").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[5] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv6").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[6] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv7").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[7] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv8").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[8] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv9").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[9] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv10").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[10] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv11").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[11] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv12").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[posicaoResposta[12]] === temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv13").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[13] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv14").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[14] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv15").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[15] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv16").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[16] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv17").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[17] == temp.text()) {
            $(this).text(temp.text());
        } else {lert("Resultado Incorreto");
        }
    });
    $("#dv18").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[18] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
    });
    $("#dv19").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[19] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
            a
        }
    });
    $("#dv20").mouseup(function (e) {
        $("#principal").children("span").remove();
        if (resultado[20] == temp.text()) {
            $(this).text(temp.text());
        } else {
            alert("Resultado Incorreto");
        }
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
