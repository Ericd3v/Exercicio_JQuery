$(document).ready(function(){ /* chama a função ou evento do botão de enviar */
    $('form').on('submit', function(e){
        e.preventDefault();  /* evita que o formulario recarregue */
            
            const nomeTarefa = $('input').val(); /* Criação da constante, recebendo o vaalor inserido pelo usuario */       
             const novaTrefa = $(`<li>${nomeTarefa}</li>`)  /* Criação da constante auxiliar , concatenção da tag + variavel */

            $(novaTrefa).appendTo('ul') /* Pegqa o valor da constante auxiliar e joga dentro da tag 'ul' */
            $('input').val('')  /* limpa o 'inpu' após inserido a nova tarefa. */
        })

        $('ul').on('click', 'li', function(e){ /* criação do evendo de 'click' e da função */
            e.preventDefault(); /* evita que o formulario regarregue */

            $(this).toggleClass('riscarTarefa') /* comando de troca de class quando um elemento do parametro (click, li) for clicado*/
            
        })

    })
