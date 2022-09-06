

$(document).ready(function () {
    
    
    var mainMenu = ["Home","About","Service","Contact"];
    var subMenu = ["Service1","Service2","Service3"];
    
    var main = "<ul id='main'>";
    
    for(var i = 0; i < mainMenu.length; i++)
    {
        main += "<li>" +  mainMenu[i]  + "</li>";
    }
    main+="</ul>";
    $("body").append(main);
    
    //=====================================================
    var sub = "<ul id='sub'>";
    
    for(var i = 0; i < subMenu.length; i++)
    {
        sub += "<li>" +  subMenu[i]  + "</li>";
    }
    sub +="</ul>";
    $("#main li:nth-child(3)").append(sub);
        
});


