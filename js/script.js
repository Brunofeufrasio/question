    $(document).ready(function(){
    $("#awnser").submit(function(e) {
        e.preventDefault();

        const resultado = {
            selecionado: $("input:checked")[0],
            certo:  $("[data-resultado= true")[0],
        }

        

        if (resultado.selecionado == resultado.certo) {
            $(resultado.selecionado).parent().css("backgroundColor","#00800054")
           

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

