$(document).ready(function(){
    $('.btn').on('click', function(){
        $('pre').toggle()
        if ($('.btn').html() === 'show'){
            $('.btn').html('hide')
        }else{
            $('.btn').html('show')
        }
    })
})
