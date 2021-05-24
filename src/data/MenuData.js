import img_menu_jalapeno from '../images/menus/Jalapeno.png'
import img_menu_bacon_cheese from '../images/menus/bacon&cheese.png'
import img_menu_cheese from '../images/menus/cheese.png'
import img_menu_plant from '../images/menus/plant.png'
import img_menu_plant_barbeque from '../images/menus/plant barbeque.png'
import img_menu_real from '../images/menus/real.jpg'
import img_menu_stacker2 from '../images/menus/stack2.png'
import img_menu_stacker3 from '../images/menus/stack3.png'
import img_menu_stacker4 from '../images/menus/stack4.png'
import img_menu_trex_set from '../images/menus/rec1.png'
import img_menu_shrimp_set from '../images/menus/rec3.png'
import img_menu_miracle_set from '../images/menus/rec4.png'
import img_menu_folder_beef_set from '../images/menus/rec5.png'
import img_menu_folder_chicken_set from '../images/menus/rec6.png'
import img_menu_mozzarella_set from '../images/menus/rec2.png'
import img_menu_chicken_nuggets from '../images/menus/ext1.png'
import img_menu_squid_rings from '../images/menus/ext2.png'
import img_menu_corn_salad from '../images/menus/ext3.png'
import img_menu_cheese_sticks from '../images/menus/ext4.png'
import img_menu_seasoned_fries from '../images/menus/ext5.png'
import img_menu_fries from '../images/menus/ext6.png'


import info_img1 from '../images/infos/Jalapeno.png'

const MenuData = {
    menus: {
        1: {
            menuName: 'Basic Burger',
            menuPrice: 5900,
            imgSrc: img_menu_real,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        2: {
            menuName: 'Cheese Burger',
            menuPrice: 6400,
            imgSrc: img_menu_cheese,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        3: {
            menuName: 'Bacon&Cheese Burger',
            menuPrice: 6700,
            imgSrc: img_menu_bacon_cheese,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        4: {
            menuName: 'Jalapeno Burger',
            menuPrice: 6700,
            imgSrc: img_menu_jalapeno,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        5: {
            menuName: 'Plant Burger',
            menuPrice: 5500,
            imgSrc: img_menu_plant,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        6: {
            menuName: 'Plant Barbeque Burger',
            menuPrice: 6500,
            imgSrc: img_menu_plant_barbeque,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        7: {
            menuName: 'Stacker2 Burger',
            menuPrice: 7000,
            imgSrc: img_menu_stacker2,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        8: {
            menuName: 'Stacker3 Burger',
            menuPrice: 7500,
            imgSrc: img_menu_stacker3,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        9: {
            menuName: 'Stacker4 Burger',
            menuPrice: 8000,
            imgSrc: img_menu_stacker4,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        10: {
            menuName: 'T-REX Burger Set',
            menuPrice: 8000,
            imgSrc: img_menu_trex_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        11: {
            menuName: 'Shrimp Burger Set',
            menuPrice: 8000,
            imgSrc: img_menu_shrimp_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        12: {
            menuName: '(Vegan) Miracle Burger Set',
            menuPrice: 9500,
            imgSrc: img_menu_miracle_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        13: {
            menuName: 'Folder Burger Beef Set',
            menuPrice: 9600,
            imgSrc: img_menu_folder_beef_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        14: {
            menuName: 'Folder Burger Hot Chicken Set',
            menuPrice: 9600,
            imgSrc: img_menu_folder_chicken_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        15: {
            menuName: 'Mozzarella in the Burger Bacon Set',
            menuPrice: 9800,
            imgSrc: img_menu_mozzarella_set,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        16: {
            menuName: 'Chicken Nuggets',
            menuPrice: 1800,
            imgSrc: img_menu_chicken_nuggets,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        17: {
            menuName: 'Squid Rings',
            menuPrice: 3100,
            imgSrc: img_menu_squid_rings,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        18: {
            menuName: 'Corn Salad',
            menuPrice: 2600,
            imgSrc: img_menu_corn_salad,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        19: {
            menuName: 'Cheese Sticks',
            menuPrice: 2900,
            imgSrc: img_menu_cheese_sticks,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        20: {
            menuName: 'Seasoned Fries',
            menuPrice: 2900,
            imgSrc: img_menu_seasoned_fries,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
        21: {
            menuName: 'Fries',
            menuPrice: 2400,
            imgSrc: img_menu_fries,
            infoImg: info_img1,
            info: "It contains several pieces of jalapeno.",
        },
    },
    keys:[1, 2, 3, 4, 5],
    categoryMenus:{
        'recommended' :[
            10, 11, 12, 13, 14, 15,
        ],
        'burgers': [
            1, 2, 3, 4, 5, 6, 7, 8, 9,
        ],
        'sideMenus': [
            16, 17, 18, 19, 20, 21,
        ],
        'drinks':[

        ],
    }
};

export default MenuData;
