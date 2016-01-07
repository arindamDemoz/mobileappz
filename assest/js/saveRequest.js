$(document).ready(function(){
   $('.requestclass').on('click',function(){
    var names =$('#tablesName').val();
    Urls = $('#names').val();
''
    $.ajax({
              url: Urls+"vendorview/updateRequestedService",
              type: 'POST',
              data: {'data':names},
              success:function(datas){
                  alert(datas);
              }
    });
    
    

  });
});