function lead(id){$('#loaderIcon').show();$('#loaderIcon1').show();$('#loaderIcon2').show();$('#loaderIcon3').show();let FormData=$('#'+id).serializeArray();console.log(FormData);grecaptcha.ready(function(){grecaptcha.execute('6LdpP8okAAAAAG-d_Lk0itBjn1vay86yke6KeH6u',{action:'submit'}).then(function(token){FormData.push({name:'token',value:token});const FormDataPost=$.post(window.location.origin+"/service/lead.html",FormData);FormDataPost.done(function(response){console.log(response);if(response.status==="false"){$('#loaderIcon').hide();$('#loaderIcon1').hide();$('#loaderIcon2').hide();$('#loaderIcon3').hide();$('.modal').modal('hide');}
if(response.status==="true"){$('#loaderIcon').hide();$('#loaderIcon1').hide();$('#loaderIcon2').hide();$('#loaderIcon3').hide();$('.modal').modal('hide');setTimeout(function(){window.location.href=window.location.origin+"/query/brief.html?package="+$('#'+id).find('input[name="package"]').val()+'&id='+response.data.userid;},300);;}});FormDataPost.fail(function(xhr,textStatus,errorThrown){console.log(xhr.responseText);$('#loaderIcon').hide();$('#loaderIcon1').hide();$('#loaderIcon2').hide();$('#loaderIcon3').hide();$('.modal').modal('hide');});});});}
function priceChange(pack,price){$('#popupLead').find('input[name="package"]').val(pack);$('#popupLead').find('input[name="price"]').val(price);$('#bottomForm').find('input[name="package"]').val(pack);$('#bottomForm').find('input[name="price"]').val(price);}
function emailValid(string){let regex=new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);return regex.test(string);}
function chat(){$zopim.livechat.window.show();}


$('.tab-menu li a').on('click', function(){
   var target = $(this).attr('data-rel');
   $(this).closest('.tab-menu').find('li a').removeClass('active');
   $(this).addClass('active');
   $("#" + target).fadeIn('slow').siblings(".tab-box").hide();
   return false;
});

$('.tab-menu-pricing li a').on('click', function(){
   var target = $(this).attr('data-rel');
   $(this).closest('.tab-menu-pricing').find('li a').removeClass('active');
   $(this).addClass('active');
   $("#" + target).fadeIn('slow').siblings(".tab-box-pricing").hide();
   return false;
});


$(document).ready(function() {
  $(window).on("scroll", function() {
    console.log($(this).scrollTop())
    if($(this).scrollTop() >= 300){
      // set to new image
      $(".services-logo img").attr("src","assets/images/logo.png");
    } else {
      //back to default
      $(".services-logo img").attr("src","assets/images/logo-white.png");
    }
  })
});

