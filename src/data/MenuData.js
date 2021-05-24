import img1 from '../images/menus/Jalapeno.png'

const MenuData = {
    menus: {
        1: {
            menuName: 'Japapeno',
            menuPrice: 5000,
            imgSrc: img1,
        },
        2: {
            menuName: 'menu2',
            menuPrice: 6000,
            imgSrc: img1,
        },
        3: {
            menuName: 'menu3',
            menuPrice: 7000,
            imgSrc: img1,
        },
        4: {
            menuName: 'menu4',
            menuPrice: 8000,
            imgSrc: img1,
        },
        5: {
            menuName: 'menu5',
            menuPrice: 9000,
            imgSrc: img1,
        },
    },
    categories:{
        'Recommended' :[
            1, 2,
        ],
        'Burgers': [
            3, 4
        ],
        'Side Menus': [
            5
        ],
        'Drinks':[

        ],
    }
};

export default MenuData;
