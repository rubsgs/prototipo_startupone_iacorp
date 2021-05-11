function geraBotoesAvaliacao(){
	var divClassTodos = document.createElement("div");
	divClassTodos.classList.add("col-xs-2");
	var btnClassTodos = document.createElement("button");
	btnClassTodos.innerText = "Classificar todos os leads";
	btnClassTodos.classList.add("btn", "btn-link");
	divClassTodos.appendChild(btnClassTodos);

	var spanQtd = $("#search_form .slats-heading .row-gutter-xs>div:nth-child(2)");
	spanQtd.removeClass("col-xs-5").addClass("col-xs-3");
	$(divClassTodos).insertAfter(spanQtd);

	$("html").append(`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">`)
	var colunasListaLead = $("#leads-list article.slat-group-item .slat-body div.col-xs-3:last-child");
	var criaBotao = function(){
		var btnAvaliacao = document.createElement("button");
		btnAvaliacao.classList.add("btn");
		btnAvaliacao.onclick = function(){
			console.log("disparou click");
			console.log(this);
			var porcentagemLeadQuente = (Math.round((Math.random() + Number.EPSILON)*10000, 2)/100).toFixed(2);
			var divPai = $(this).parent();
			var classeBtn = porcentagemLeadQuente > 50 ? "btn-danger" : "btn-primary";

			var label = document.createElement("label");
			label.classList.add("btn", classeBtn);
			var icon = document.createElement("i");
			var classe = porcentagemLeadQuente > 50 ? "fa-fire" : "fa-snowflake-o";
			var nome = porcentagemLeadQuente > 50 ? "quente" : "frio";
			var porcentagemDisplay = porcentagemLeadQuente > 50 ? porcentagemLeadQuente : 100 - porcentagemLeadQuente;
			icon.classList.add("fa", classe);
			label.appendChild(icon);
			label.appendChild(document.createTextNode(` ${porcentagemDisplay}% ${nome}`));
			divPai.html(label);
		}

		btnAvaliacao.innerText = "Avaliar como quente/frio";
		return btnAvaliacao;
	}

	colunasListaLead.each(function(){
		var divContainer = document.createElement("div");
		divContainer.classList.add("container-btn-avaliar");
		divContainer.appendChild(criaBotao());
		$(this).append(divContainer);
	})
}