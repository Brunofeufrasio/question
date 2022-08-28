    $(document).ready(function(){
    $("#awnser").submit(function(e) {
        e.preventDefault();

        const resultado = {
            selecionado: $("input:checked")[0],
            certo:  $("[data-resultado= true")[0],
        }

        

        if (resultado.selecionado == resultado.certo) {
            window.alert('Parabens! Fez mais que sua obrigação!')
            $(resultado.selecionado).parent().css("backgroundColor","green")
            $(resultado.selecionado).parent().css("color","white")

        } else   {
            alert('Resposta Errada! BURRO!')
            $(resultado.selecionado).parent().css("backgroundColor","red")
            $(resultado.selecionado).parent().css("color","white")
        } 


        const btn = document.querySelector("#refresh")
        btn.addEventListener("click",() => {
            location.reload()
        })

        
        $("input[type=submit]").prop("disabled",true);
        $("input[type=radio]").prop("disabled",true);

    })
});

