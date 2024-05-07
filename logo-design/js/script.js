function lead (id){
    $('#loaderIcon').show(); 
    $('#loaderIcon1').show(); 
    $('#loaderIcon2').show(); 
    $('#loaderIcon3').show(); 
        let FormData = $('#'+id).serializeArray();
console.log(FormData);
    grecaptcha.ready(function() {
            grecaptcha.execute('6LdpP8okAAAAAG-d_Lk0itBjn1vay86yke6KeH6u', {action: 'submit'}).then(function(token) {
                FormData.push({name: 'token', value: token});                 
                // const FormDataPost = $.post("service/lead.php",FormData);

             const FormDataPost = $.post(window.location.origin+"/dv-logo-design/service/lead.php",FormData);
            FormDataPost.done(function(response) {
                console.log(response);
                if (response.status ===  "false") {
                   $('#loaderIcon').hide(); 
                   $('#loaderIcon1').hide(); 
                   $('#loaderIcon2').hide(); 
                   $('#loaderIcon3').hide(); 
                   $('.modal').modal('hide');
                }
                if (response.status === "true") {
                   $('#loaderIcon').hide(); 
                   $('#loaderIcon1').hide(); 
                   $('#loaderIcon2').hide(); 
                   $('#loaderIcon3').hide(); 
                   $('.modal').modal('hide');
                   setTimeout(function(){                        
                    window.location.href = window.location.origin+"/dv-logo-design/query/brief.php?package="+$('#'+id).find('input[name="package"]').val()+'&id='+response.data.userid;

                    // window.location.href = "query/brief.php?package="+$('#'+id).find('input[name="package"]').val()+'&id='+response.data.userid;
                    },300);;
                }
            });
            FormDataPost.fail( function(xhr, textStatus, errorThrown) {
                console.log(xhr.responseText);
               $('#loaderIcon').hide(); 
               $('#loaderIcon1').hide(); 
               $('#loaderIcon2').hide(); 
               $('#loaderIcon3').hide(); 
               $('.modal').modal('hide');
            });
                
            });
        });
}

function priceChange(pack,price) {
    $('#popupLead').find('input[name="package"]').val(pack);
    $('#popupLead').find('input[name="price"]').val(price);
    $('#bannerForm').find('input[name="package"]').val(pack);
    $('#bannerForm').find('input[name="price"]').val(price);
    $('#bottomForm').find('input[name="package"]').val(pack);
    $('#bottomForm').find('input[name="price"]').val(price);
}

function emailValid(string){
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return regex.test(string);
}

function chat(){
    $zopim.livechat.window.show();
}
;