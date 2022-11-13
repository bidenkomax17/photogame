let img =[];
let changeImg = 'images/back.png';
let first = "";
let idFirst = "";
$(function ()
{
    loading();
    $('#divmain').on('click', 'img', function ()
    {
        if(first=="")
        {
            first = $(this).attr('src');
            idFirst = $(this).attr('id');
        }
        else if(first==$(this).attr('src') && idFirst != $(this).attr('id'))
        {
            $('img').each(function ()
            {
                if($(this).attr('src')==first)
                {
                    $(this).attr('src', changeImg);
                }
            });
            first = "";
            statusEnd();
        }
        else
        {
            first=="";
        }
    })
});
function loading()
{
    $('#divmain').empty();
    img = [];
    img.push($("<img>").attr("src", "images/1.jpg").attr('id', 'i1'));
    img.push($("<img>").attr("src", "images/1.jpg").attr('id', 'i2'));
    img.push($("<img>").attr("src", "images/2.jpg").attr('id', 'i3'));
    img.push($("<img>").attr("src", "images/2.jpg").attr('id', 'i4'));
    img.push($("<img>").attr("src", "images/3.jpg").attr('id', 'i5'));
    img.push($("<img>").attr("src", "images/3.jpg").attr('id', 'i6'));
    img.push($("<img>").attr("src", "images/4.jpg").attr('id', 'i7'));
    img.push($("<img>").attr("src", "images/4.jpg").attr('id', 'i8'));
    img.push($("<img>").attr("src", "images/5.jpg").attr('id', 'i9'));
    img.push($("<img>").attr("src", "images/5.jpg").attr('id', 'i10'));
    img.push($("<img>").attr("src", "images/6.jpg").attr('id', 'i11'));
    img.push($("<img>").attr("src", "images/6.jpg").attr('id', 'i12'));
    img.push($("<img>").attr("src", "images/7.jpg").attr('id', 'i13'));
    img.push($("<img>").attr("src", "images/7.jpg").attr('id', 'i14'));
    img.push($("<img>").attr("src", "images/8.jpg").attr('id', 'i15'));
    img.push($("<img>").attr("src", "images/8.jpg").attr('id', 'i16'));
    shuffle(img)
    for(let i=0; i<img.length; i++)
    {
        img[i].appendTo("#divmain");
    }
    $('#btn').hide();
}
function shuffle(array)
{
    array.sort(() => Math.random() - 0.5);
}
function statusEnd()
{
    let status = true;
    $('img').each(function ()
    {
        if($(this).attr('src') != changeImg)
        {
            status=false;
        }
    })
    if(status)
    {
        $('#victory').html('Ура вы выиграли!').animate({fontSize: '60px'}, 5000);
        $('#divmain').hide();
        $('#btn').show();
    }
}
$("#btn").on("click", function ()
{
    $('#btn').hide();
    $('#divmain').show();
    loading();
    $('#victory').empty();
    first = "";
    idFirst = "";
})
