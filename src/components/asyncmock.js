import image1 from "../resources/1.png"
import image2 from "../resources/2.png"
import image3 from "../resources/3.png"
import image4 from "../resources/4.png"

const products = [
    {
        id: "P-54976",
        title: "Parlante Edifier SonicBoom X",
        price: 14999,
        img: image1,
        category: "parlantes"
    },
    {
        id: "A-46789",
        title: "Auricular Razer SoundMaster II",
        price: 4999,
        img: image2,
        category: "auriculares"
    },
    {
        id: "N-84956",
        title: "Notebook Asus Prophane V2",
        price: 89999,
        img: image3,
        category: "notebooks"
    },
    {
        id: "T-85164",
        title: "Tablet Samsung Universe SE 2022",
        price: 19999,
        img: image4,
        category: "tablets"
    }
]

export const getProducts = () =>{
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(products)
        }, 500)
    })
}