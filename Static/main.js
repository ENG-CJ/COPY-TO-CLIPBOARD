

// JQUERY

$('document').ready(()=>{

    // we make two function add and remove 

    function add_class(){
        $('.copied').addClass('bounceIn')
    };

    function remove_class(){
        $('.copied').removeClass('bounceIn')
    };

    // calling functions
    $('#copy-btn').click(()=>{
        $('#text-field').select();
        document.execCommand('copy')
        add_class();
        setTimeout(remove_class,900)
    })
})