import image1 from "../resources/1.png"
import image2 from "../resources/2.png"
import image3 from "../resources/3.png"
import image4 from "../resources/4.png"
import image5 from "../resources/5.png"
import image6 from "../resources/6.png"
import image7 from "../resources/7.png"
import image8 from "../resources/8.png"
import presetText from "../helpers/presetText"

const products = [
    {
        id: "P-54976",
        title: "Parlante Edifier SonicBoom X",
        price: 14999,
        img: image1,
        category: "parlantes",
        description: presetText.lorem
    },
    {
        id: "A-46789",
        title: "Auricular Razer SoundMaster II",
        price: 4999,
        img: image2,
        category: "auriculares",
        description: presetText.lorem
    },
    {
        id: "T-85164",
        title: "Tablet Samsung Universe SE 2022",
        price: 19999,
        img: image3,
        category: "tablets",
        description: presetText.lorem
    },
    {
        id: "N-84956",
        title: "Notebook Asus Prophane V2",
        price: 89999,
        img: image4,
        category: "notebooks",
        description: presetText.lorem
    },
    {
        id: "P-46484",
        title: "Parlantes HP Simplicity 2.1",
        price: 8999,
        img: image5,
        category: "parlantes",
        description: presetText.lorem
    },
    {
        id: "P-29381",
        title: "Parlantes Logitech HomeBlast 5.1",
        price: 24999,
        img: image6,
        category: "parlantes",
        description: presetText.lorem
    },
    {
        id: "T-51231",
        title: "Tablet Lenovo IdeaPad Slim 2",
        price: 54999,
        img: image7,
        category: "tablets",
        description: presetText.lorem
    },
    {
        id: "A-29388",
        title: "Auriculares Sony Streetwalk Slim",
        price: 12999,
        img: image8,
        category: "auriculares",
        description: presetText.lorem
    }
]

export const getProducts = () =>{
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(products)
        }, 1000)
    })
}