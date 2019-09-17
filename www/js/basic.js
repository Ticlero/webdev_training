function on_over_titleChange(target)
{
    var str = "";
    console.log(target.getAttribute('id'));
    var change = document.getElementById(target.getAttribute('id'));
    if(target.getAttribute('id')=="training_menu")
    {
        str = "Gallary";
        document.getElementById("shapG").textContent = str;
    }else if(target.getAttribute('id')=="training_menu2")
    {
        str = "History";
        document.getElementById("shapH").textContent = str;
    }
    change.textContent = str;
}

function on_out_titleChange(target)
{
    var str = "";
    console.log(target.getAttribute('id'));
    var change = document.getElementById(target.getAttribute('id'));
    if(target.getAttribute('id')=="training_menu")
    {
        str = "사진";
        document.getElementById("shapG").textContent = str;
    }else if(target.getAttribute('id')=="training_menu2")
    {
        str = "역사";
        document.getElementById("shapH").textContent = str;
    }
    change.textContent = str;
}