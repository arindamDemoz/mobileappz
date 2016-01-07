
            $(document).ready(function () {
                $("#wizard").steps();
                $("#form").steps({
                    bodyTag: "fieldset",
                    onStepChanging: function (event, currentIndex, newIndex)
                    {
                        // Always allow going backward even if the current step contains invalid fields!
                        if (currentIndex > newIndex)
                        {
                            return true;
                        }

                        // Forbid suppressing "Warning" step if the user is to young
                        if (newIndex === 3 && Number($("#age").val()) < 18)
                        {
                            return false;
                        }

                        var form = $(this);

                        // Clean up if user went backward before
                        if (currentIndex < newIndex)
                        {
                            // To remove error styles
                            $(".body:eq(" + newIndex + ") label.error", form).remove();
                            $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
                        }

                        // Disable validation on fields that are disabled or hidden.
                        form.validate().settings.ignore = ":disabled,:hidden";

                        // Start validation; Prevent going forward if false
                        return form.valid();
                    },
                    onStepChanged: function (event, currentIndex, priorIndex)
                    {
                        // Suppress (skip) "Warning" step if the user is old enough.
                        if (currentIndex === 2 && Number($("#age").val()) >= 18)
                        {
                            $(this).steps("next");
                        }

                        // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
                        if (currentIndex === 2 && priorIndex === 3)
                        {
                            $(this).steps("previous");
                        }
                    },
                    onFinishing: function (event, currentIndex)
                    {
                        var form = $(this);

                        // Disable validation on fields that are disabled.
                        // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
                        form.validate().settings.ignore = ":disabled";

                        // Start validation; Prevent form submission if false
                        return form.valid();
                    },
                    onFinished: function (event, currentIndex)
                    {
                        bootbox.alert({message:"Hey thanks for providing these details. We will come back to you. Ciao till then!",callback:function() {form.submit();s}});
                        $('.modal-footer').addClass('text-center');
                        $('.modal-footer [data-bb-handler="ok"]').html('Submit');
                        var form = $(this);
                        // Submit form input
                        
                    }
                }).validate({
                    errorPlacement: function (error, element)
                    {
                        element.before(error);
                    },
                    rules: {
                        confirm: {
                            equalTo: "#password"
                        }
                    }
                });
                
            });
            
            $(document).ready(function(){
                handleBootstrapSelect();
                handleInputMasks();
            });
                
            var handleBootstrapSelect   = function(){
                $('.bs-select').selectpicker({
                    iconBase: 'fa',
                    tickIcon: 'fa-check'
                });

            }
            function customShow(id,textId){
                
                if($("#"+id).prop("checked") == true){
                    $("#"+textId).show();
                }else{
                    $("#"+textId).hide();
                }
            }
            function allOpenHour(id,valId){
                if($("#"+id).prop("checked") == true){
                    var openHour = $("#"+valId).val();
                    
                    if(openHour == ''){
                        alert("Monday Time is Required");
                        $("#"+id).prop('checked', false);
                    }else{
                        $("#howToAccessCheckTue").prop('checked', true);
                        $("#howToAccessCheckWed").prop('checked', true);
                        $("#howToAccessCheckThur").prop('checked', true);
                        $("#howToAccessCheckFri").prop('checked', true);
                        $("#howToAccessCheckSat").prop('checked', true);
                        $("#howToAccessCheckSun").prop('checked', true);
                        
                        $('#howToAccessTue').prop("disabled", false);
                        $('#howToAccessWed').prop("disabled", false);
                        $('#howToAccessThur').prop("disabled", false);
                        $('#howToAccessFri').prop("disabled", false);
                        $('#howToAccessSat').prop("disabled", false);
                        $('#howToAccessSun').prop("disabled", false);
                        
                        $("#howToAccessTue").val(openHour); 
                        $("#howToAccessWed").val(openHour); 
                        $("#howToAccessThur").val(openHour); 
                        $("#howToAccessFri").val(openHour); 
                        $("#howToAccessSat").val(openHour); 
                        $("#howToAccessSun").val(openHour); 
                    }
                }else{
                    $("#howToAccessCheckTue").prop('checked', false);
                    $("#howToAccessCheckWed").prop('checked', false);
                    $("#howToAccessCheckThur").prop('checked', false);
                    $("#howToAccessCheckFri").prop('checked', false);
                    $("#howToAccessCheckSat").prop('checked', false);
                    $("#howToAccessCheckSun").prop('checked', false);

                    $('#howToAccessTue').prop("disabled", true);
                    $('#howToAccessWed').prop("disabled", true);
                    $('#howToAccessThur').prop("disabled", true);
                    $('#howToAccessFri').prop("disabled", true);
                    $('#howToAccessSat').prop("disabled", true);
                    $('#howToAccessSun').prop("disabled", true);

                    $("#howToAccessTue").val(''); 
                    $("#howToAccessWed").val(''); 
                    $("#howToAccessThur").val(''); 
                    $("#howToAccessFri").val(''); 
                    $("#howToAccessSat").val(''); 
                    $("#howToAccessSun").val(''); 
                }
            }
            function openHour(){
                var mon = document.getElementById('howToAccessCheckMon').checked;
                var tue = document.getElementById('howToAccessCheckTue').checked;
                var wed = document.getElementById('howToAccessCheckWed').checked;
                var thur = document.getElementById('howToAccessCheckThur').checked;
                var fri = document.getElementById('howToAccessCheckFri').checked;
                var sat = document.getElementById('howToAccessCheckSat').checked;
                var sun = document.getElementById('howToAccessCheckSun').checked;
                var lunch = document.getElementById('howToAccessCheckLunch').checked;
                //alert(mon + tue + wed + thur + fri + sat + sun);
                if(mon){
                        var monText = document.getElementById('howToAccessMon').disabled = false;
                }else{
                        var monText = document.getElementById('howToAccessMon').disabled = true;
                }
                if(tue){
                        var tueText = document.getElementById('howToAccessTue').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessTue').disabled = true;
                }
                if(wed){
                        var tueText = document.getElementById('howToAccessWed').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessWed').disabled = true;
                }
                if(thur){
                        var tueText = document.getElementById('howToAccessThur').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessThur').disabled = true;
                }
                if(fri){
                        var tueText = document.getElementById('howToAccessFri').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessFri').disabled = true;
                }
                if(sat){
                        var tueText = document.getElementById('howToAccessSat').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessSat').disabled = true;
                }
                if(sun){
                        var tueText = document.getElementById('howToAccessSun').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessSun').disabled = true;
                }
                if(lunch){
                        var tueText = document.getElementById('howToAccessLunch').disabled = false;
                }else{
                        var tueText = document.getElementById('howToAccessLunch').disabled = true;
                }
            }
            var handleInputMasks = function() {
                $.extend($.inputmask.defaults, {
                    'autounmask': true
                });
                $("#ageGroup").inputmask({
                    "mask": "99-99",
                    placeholder: "" // remove underscores from the input mask
                }); //specifying options only
                $(".openHour").inputmask({
                    "mask": "99:99-99:99",
                    placeholder: "00:00-00:00" // remove underscores from the input mask
                }); //specifying options only
             }
