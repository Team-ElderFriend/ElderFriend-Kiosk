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


import info_jalapeno from '../images/infos/Jalapeno.png'
import info_bean from '../images/infos/bean.jpg'
import info_chickenleg from '../images/infos/chickenleg.png'
import info_fold1 from '../images/infos/fold1.jpg'
import info_fold2 from '../images/infos/fold2.png'
import info_mozzabacon from '../images/infos/mozzabacon.png'
import info_shrimp from '../images/infos/shrimp.png'
import info_cheese from '../images/infos/cheese.jpg'
import info_cheesebacon from '../images/infos/cheesebacon.png'
import info_stack from '../images/infos/stack.png'
import info_chicken from '../images/infos/chicken.jpg'
import info_corn from '../images/infos/corn.jpg'
import info_potato from '../images/infos/potato.jpg'
import info_squid from '../images/infos/squid.jpg'
import info_patty from '../images/infos/patty.png'


const MenuData = {
    menus: {
        1: {
            menuName: 'Basic Burger',
            menuPrice: 5900,
            imgSrc: img_menu_real,
            infoImg: info_patty,
            info: "Simple beef burger.",
        },
        2: {
            menuName: 'Cheese Burger',
            menuPrice: 6400,
            imgSrc: img_menu_cheese,
            infoImg: info_cheese,
            info: "It contains cheese.",
        },
        3: {
            menuName: 'Bacon&Cheese Burger',
            menuPrice: 6700,
            imgSrc: img_menu_bacon_cheese,
            infoImg: info_cheesebacon,
            info: "It contains cheese and bacon.",
        },
        4: {
            menuName: 'Jalapeno Burger',
            menuPrice: 6700,
            imgSrc: img_menu_jalapeno,
            infoImg: info_jalapeno,
            info: "It contains several pieces of jalapeno.",
        },
        5: {
            menuName: 'Plant Burger',
            menuPrice: 5500,
            imgSrc: img_menu_plant,
            infoImg: info_bean,
            info: "It contains patty made of bean meat.",
        },
        6: {
            menuName: 'Plant Barbeque Burger',
            menuPrice: 6500,
            imgSrc: img_menu_plant_barbeque,
            infoImg: info_bean,
            info: "It contains patty made of bean meat. (+ barbeque sauce)",
        },
        7: {
            menuName: 'Stacker2 Burger',
            menuPrice: 7000,
            imgSrc: img_menu_stacker2,
            infoImg: info_stack,
            info: "It contains mutiple beef patties. (N = 2)",
        },
        8: {
            menuName: 'Stacker3 Burger',
            menuPrice: 7500,
            imgSrc: img_menu_stacker3,
            infoImg: info_stack,
            info: "It contains mutiple beef patties. (N = 3)",
        },
        9: {
            menuName: 'Stacker4 Burger',
            menuPrice: 8000,
            imgSrc: img_menu_stacker4,
            infoImg: info_stack,
            info: "It contains mutiple beef patties. (N = 4)",
        },
        10: {
            menuName: 'T-REX Burger Set',
            menuPrice: 8000,
            imgSrc: img_menu_trex_set,
            infoImg: info_chickenleg,
            info: "It contains patty made of chicken leg.",
        },
        11: {
            menuName: 'Shrimp Burger Set',
            menuPrice: 8000,
            imgSrc: img_menu_shrimp_set,
            infoImg: info_shrimp,
            info: "It contains patty made of shrimp.",
        },
        12: {
            menuName: '(Vegan) Miracle Burger Set',
            menuPrice: 9500,
            imgSrc: img_menu_miracle_set,
            infoImg: info_bean,
            info: "It contains patty made of bean meat.",
        },
        13: {
            menuName: 'Folder Burger Beef Set',
            menuPrice: 9600,
            imgSrc: img_menu_folder_beef_set,
            infoImg: info_fold1,
            info: "It is folded version of beef burger.",
        },
        14: {
            menuName: 'Folder Burger Hot Chicken Set',
            menuPrice: 9600,
            imgSrc: img_menu_folder_chicken_set,
            infoImg: info_fold2,
            info: "It is folded version of chicken burger.",
        },
        15: {
            menuName: 'Mozzarella in the Burger Bacon Set',
            menuPrice: 9800,
            imgSrc: img_menu_mozzarella_set,
            infoImg: info_mozzabacon,
            info: "It contains mozzarella cheese and bacon.",
        },
        16: {
            menuName: 'Chicken Nuggets',
            menuPrice: 1800,
            imgSrc: img_menu_chicken_nuggets,
            infoImg: info_chicken,
            info: "It is made of chicken.",
        },
        17: {
            menuName: 'Squid Rings',
            menuPrice: 3100,
            imgSrc: img_menu_squid_rings,
            infoImg: info_squid,
            info: "It is made of squid.",
        },
        18: {
            menuName: 'Corn Salad',
            menuPrice: 2600,
            imgSrc: img_menu_corn_salad,
            infoImg: info_corn,
            info: "It contains corn.",
        },
        19: {
            menuName: 'Cheese Sticks',
            menuPrice: 2900,
            imgSrc: img_menu_cheese_sticks,
            infoImg: info_cheese,
            info: "It is fried food containing cheese.",
        },
        20: {
            menuName: 'Seasoned Fries',
            menuPrice: 2900,
            imgSrc: img_menu_seasoned_fries,
            infoImg: info_potato,
            info: "It is fried potato. (+ seasoning powder)",
        },
        21: {
            menuName: 'Fries',
            menuPrice: 2400,
            imgSrc: img_menu_fries,
            infoImg: info_potato,
            info: "It is fried potato.",
        },
    },
    keys:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
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
