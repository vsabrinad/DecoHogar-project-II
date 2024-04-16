const category = [
    {
        id: 1, category: "Deco",
        id: 2, category: "Espejos",
        id: 3, category: "Kit de baño"

    }
]
const products= [
    {
        id: 1,
        name: "Reloj Olivia",
        price: 7000,
        category: "Deco",
        img: "https://images.pexels.com/photos/552774/pexels-photo-552774.jpeg?auto=compress&cs=tinysrgb&w=600",
        stock: 10, 
        description: "Ver descripcion"
    },
    {
        id: 2,
        name: "Espejo Amber",
        price: 5000,
        category: "Espejos",
        img: "https://images.pexels.com/photos/6620705/pexels-photo-6620705.jpeg?auto=compress&cs=tinysrgb&w=600",
        stock: 8,
        description: "Ver descripcion"

    },
    {
        id: 3,
        name: "Set de velas Ameli",
        price: 3500,
        category: "Deco",
        img: "https://images.pexels.com/photos/4887772/pexels-photo-4887772.jpeg?auto=compress&cs=tinysrgb&w=600",
        stock: 3,
        description: "Ver descripcion"
        
    },
    {
        id: 4,
        name: "Set de higiene personal madera",
        price: 5500,
        category: "Kit de baño",
        img: "https://media.istockphoto.com/id/641732948/es/foto/spa-productos-naturaleza-muerta.jpg?s=612x612&w=0&k=20&c=4QbEA2fDUnkcXMvddg4j2spkbRqrK2IVMfT5wfJMh-g=",
        stock: 5,
        description: "Ver descripcion" 
    },
    {
        id: 5,
        name: "Box higiene",
        price: 3500,
        category: "Kit de baño",
        img: "https://media.istockphoto.com/id/1349994332/es/foto/paquete-de-autocuidado-caja-de-regalo-de-temporada-con-productos-cosm%C3%A9ticos-org%C3%A1nicos-sin.jpg?b=1&s=612x612&w=0&k=20&c=6RI4pjWkckju_E6s30JBTxVgaZN_Rsx6qhw12EcyVzg=",
        stock: 3,
        description: "Ver descripcion"
    }
]
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout ( () => {
            resolve(products)}
            , 2000
        )
    })
}
