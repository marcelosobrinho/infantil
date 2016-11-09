
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
                $(this).text("");
                e.preventDefault();
                alert(temp.text());
            });
            $("#dv1").mouseup(function (e) {
                $("#principal").children("span").remove();
                $(this).text("");
                e.preventDefault();
                alert(temp.text());
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
