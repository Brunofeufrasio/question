    $(document).ready(function(){
    $("#awnser").submit(function(e) {
        e.preventDefault();

        const resultado = {
            selecionado: $("input:checked")[0],
            certo: $("[data-resultado= true")[0],
            Nselecionado: $("")[0]
        }

        if (resultado.selecionado == resultado.Nselecionado ) {
            alert(' [Erro] Marque uma das alternativas!')
            return [0]
        }   

        else if (resultado.selecionado == resultado.certo) {
            $(resultado.selecionado).parent().css("backgroundColor","#0080003a")
           

        } else   {
            $(resultado.selecionado).parent().css("backgroundColor","#ff00004d")
           
        } 


        const btn = document.querySelector("#refresh")
        btn.addEventListener("click",() => {
            location.reload()
        })
        
        $("input[type=submit]").prop("disabled",true);
        $("input[type=radio]").prop("disabled",true);

    })
});

