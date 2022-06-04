const products = [
    {
        id: "AW-T2008",
        title: "Torre de sonido Aiwa AW-T2008",
        price: 19999,
        img: "https://i.ibb.co/PCZBS6J/1.png"
    },
    {
        id: "AW-T2010",
        title: "Torre de sonido Aiwa AW-T2010",
        price: 29999,
        img: "https://i.ibb.co/LR3zTHg/2.png"
    },
    {
        id: "AW-T2012",
        title: "Torre de sonido Aiwa AW-T2012",
        price: 39999,
        img: "https://i.ibb.co/ScJBZc1/3.png"
    }
]

export const getProducts = () =>{
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(products)
        }, 2000)
    })
}