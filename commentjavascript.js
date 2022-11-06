(function (){
 const next=document.querySelector("#next");
 const pre=document.querySelector("#pre");
 const imag=document.querySelector("#customer-img");
 const name=document.querySelector(".customer-name");
 const star=document.querySelector(".star");
 const te=document.querySelector("#customer-text");
let i=0;
 const img=['1.png','Capture.png','Mypasspoertsizedphoto.jpg','Screenshot (75).png'];
const na=['Ramu','Shamu','Lachu','Birdy'];
const t=['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda sequi odio omnis quasi consequuntur! Ab blanditiis voluptatem rerum nulla ex incidunt commodi, at consequatur accusamus esse numquam? Explicabo inventore recusandae nihil ex mollitia est harum!','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, adipisci perferendis. Architecto tempore, eveniet vitae alias doloremque consequuntur corrupti nam exercitationem, odio incidunt maxime quo!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum suscipit voluptatem placeat recusandae vitae soluta. Sit libero, fugiat reprehenderit odio eveniet earum, eum eos cumque nesciunt vel consequatur. Ducimus?','Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto quasi esse quidem eligendi adipisci ea itaque voluptatibus, sed excepturi! Nulla maxime quae repellat nam sed maiores ducimus architecto corrupti totam saepe vitae ipsam mollitia, velit quod nihil commodi iusto quam, qui, ipsa ullam. Eaque laudantium facere ex quibusdam culpa!'];
const st=['$$$$$','$$$','$$$$','$$'];
next.addEventListener('click',plus);
pre.addEventListener('click',minus);

function plus()
{
    
    i++;
    if(i==4)
    i=0;
    imag.src=img[i];
    name.textContent=na[i];
    te.textContent=t[i];
    star.textContent=st[i];

}

function minus()
{
    
    --i;
    if(i==-1)
    i=3;
    imag.src=img[i];
    name.textContent=na[i];
    te.textContent=t[i];
    star.textContent=st[i];
}


})()