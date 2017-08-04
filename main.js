$(document).ready(function(){

    $('#namePara').on('click', function(){
        $('#namePara').addClass('hidden')
        $('#nameInput').removeClass('hidden')
    })

    $('#namePara').on('blur', function(){
        $('#namePara').removeClass('hidden')
        $('#nameInput').addClass('hidden')
        $('#nameInput').text($('namePara').val())
    })

    $('#sumPara').on('click', function(){
        $('#sumPara').addClass('hidden')
        $('#sumInput').removeClass('hidden')
    })

    $('#sumPara').on('blur', function(){
        $('#sumPara').removeClass('hidden')
        $('#sumInput').addClass('hidden')
        $('#sumPara').text($('sumPara').val())
    })

})