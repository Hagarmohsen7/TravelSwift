const offers = [
{
    id: 1,
    Image: 'project pic/Giza.jpeg',
    title: 'Giza',
    price: 1000,
},
{
    id: 2,
    Image: 'project pic/London.jpeg',
    title: 'London',
    price: 1000, 
},{
    id:2,
    Image: 'project pic/Makkah.jpeg',
    title: 'Mahhah',
    price: 1000, 
},
{
    id: 4,
    Image: 'project pic/roma.jpg',
    title: 'Roma',
    price: 1000, 
}
];
const specialoffers = [... new Set(offers.map ((items)=>
{return items}))]
i=0;
document.getElementById('roots').innerHTML= specialoffers.map((items)=>
{
    var {Image, title, price}= items;
    return(
        `<div class='box'>
        <div class='image-box'>
        <img class='images' src=${Image}> </img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2> </div> </div>`
    )
})