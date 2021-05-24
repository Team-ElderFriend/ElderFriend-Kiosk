import img1 from '../images/menus/Jalapeno.png'
import info_img1 from '../images/infos/Jalapeno.png'

const MenuData = {
    menus: {
        1: {
            menuName: 'Japapeno',
            menuPrice: 5000,
            imgSrc: img1,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        2: {
            menuName: 'menu2',
            menuPrice: 6000,
            imgSrc: img1,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        3: {
            menuName: 'menu3',
            menuPrice: 7000,
            imgSrc: img1,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        4: {
            menuName: 'menu4',
            menuPrice: 8000,
            imgSrc: img1,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        5: {
            menuName: 'menu5',
            menuPrice: 9000,
            imgSrc: img1,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
    },
    keys:[1, 2, 3, 4, 5],
    categoryMenus:{
        'recommended' :[
            1, 2,
        ],
        'burgers': [
            3, 4, 3, 3, 3, 3, 3,
        ],
        'sideMenus': [
            5
        ],
        'drinks':[

        ],
    }
};

export default MenuData;
