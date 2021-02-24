

var user=prompt("GIVE ME A RATE FOR MY PAGE (1-5) ")



if(user > 5 ) { 
    alert("I ADORE YOU !!")
    document.write('<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Heart_Eyes_Emoji_2_grande.png?v=1571606090"/> ')

}

if(user <1 ) 
{ alert("YOU MAKE Me SAD , THINK AGAIN !! \n I DESERVE MORE DUDE")} 

var count=0;
while(user <1 )
{
    if(count == 2) alert("why you hate me ")
    user=prompt("TRY AGAIN, from (1-5)");
    count++;
    
    if( count > 3) 
    {
        alert("dude, I HATE YOU ")
        document.write('<img src="https://th.bing.com/th/id/Rfbcc45135bf3961ff43f7d6950a496d0?rik=zGh8yDUM6H3GwQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2fsad-boy-clipart-40.jpg&ehk=cF1WPlL9gva5NfkrmOuQtddCMw8XI%2bhQDcb%2fZrScZfg%3d&risl=&pid=ImgRaw"/> ')

        break;
    }
}

if(user>=1 && user <=5)
{
    alert(" COOL")
    for(var i=0 ; i< user ;i++)
    {
       document.write('<img src="https://rlv.zcache.com/stars_glitter_sparkle_universe_infinite_sparkly_star_sticker-r4c544383d0ac44269c15e5f41390607f_0ugdr_8byvr_630.jpg?view_padding=[285,0,285,0]"/> ')
    }
}