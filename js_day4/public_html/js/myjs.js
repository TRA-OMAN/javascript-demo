
$(document).ready(function () {

    var trainee = {
            id:10,
            name:"ammar",
            role:"desginer"
    };
    var trainees = [
        {
            id:10,
            name:"ammar",
            role:"desginer"
        },
        {
            id:11,
            name:"sultan",
            role:"developer"
        },
        {
            id:12,
            name:"abd alaziz",
            role:"leader"
        },
        {
            id:13,
            name:"loay",
            role:"desginer"
        }];
        $("#btnLoad").click(function() {
            $("#d1").append("<p>" + trainee.id + "</p>");
            $("#d1").append("<p>" + trainee.name + "</p>");
            $("#d1").append("<p>" + trainee.role + "</p>");
            //==========================================================
            
            var tbl ="<table class='table'>";
            tbl+="<tr><th>ID</th>";
            tbl+="<th>Name</th>";
            tbl+="<th>Role</th></tr>";
            for (var i = 0; i < trainees.length; i++) {
                tbl+="<tr><td>" + trainees[i].id + "</td>";
                tbl+="<td>" + trainees[i].name + "</td>";
                tbl+="<td>" + trainees[i].role + "</td></tr>";
                
            }
            
            tbl+="</table>";
            $("#d1").append(tbl);
            //============================================
            $.each(trainees,function (index,value) {
            $("#d1").append("<b>" + trainees[index].id  +"</b>");
             });
            
            
            
            
        }); // end load
        
        $("#btnStyle").click(function () {
            $("#d1").addClass("blue-new-style");
        });
        $("#btnStyle2").click(function () {
            $("#d1").removeClass("blue-new-style");
        });
         $("#btnAnimate").click(function () {
            $("table").animate({left:0}).animate({
                width:"300px"
                });
            });
            
         $("input[type=button]").click(function () {
             //CHAINING
            $(this).animate({top:"-100px"},340)
                        .animate({top:0},340)
                
                   .animate({top:"-70px"},300)
                        .animate({top:0},300)
                
                   .animate({top:"-40px"},200)
                        .animate({top:0},200)
                
                   .animate({top:"-10px"}, 100)
                        .animate({top:0},100);
                });

        $("select").change(function() {
         $("body,input").removeClass();
          //$("this").val() read value from dropdownlist select option
          $("body").addClass($(this).val()); 
          $("input").addClass($(this).val());
          });
          
         $("input[type=email],input[type=password]").blur(function() {
             
             if($(this).val().trim()==""){
                  $(this).css("border","1px solid red");
             }else{
                  $(this).css("border","1px solid green");
             }
                     
         });
         
         $("#conf").blur(function () {
             if($(this).val().trim()==""){
                  $(this).css("border","1px solid red");
                     }
                     
                    else{
                        if($("#conf").val() != $("#pass").val()  ){
                            $("#third").
                            append("<p style='color:red'>does not match!</p>");
                            $(this).css("border","1px solid red");
                            }
                            else
                                 {
                                $("#third p").text("");
                                $(this).css("border","1px solid green");
                                }
                      }
            });
   

}); // end document

