import React from 'react'
import classNames from 'classnames/bind'
import styles from "./KioskView.scss"
import CategorySelectButton from "../CategorySelectButton";
import MenuListView from "../MenuListView";
import MenuData from "../../data/MenuData";

const cx = classNames.bind(styles);


class KioskView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'recommended',
        };
        this.changeCategory = this.changeCategory.bind(this);

        this.categories = [
            {
                category: 'recommended',
                text: 'Recommended',
            },
            {
                category: 'burgers',
                text: 'Burgers',
            },
            {
                category: 'sideMenus',
                text: 'Side Menus',
            },
            {
                category: 'drinks',
                text: 'Drinks',
            },
        ]
    }

    changeCategory(category) {
        this.setState({category: category})
    }

    render() {
        return (
            <div className={cx('kiosk-view')}>
                <table className={cx('category-select-buttons-table')}>
                    <tr>

                        {(this.categories.map(d => <td><CategorySelectButton className={cx('csb')} category={d.category} text={d.text}
                                                                             onCategorySelect={this.changeCategory}
                                                                             selectedCategory={this.state.category}/>
                        </td>))}
                    </tr>
                </table>
                <MenuListView menuIds={MenuData.categoryMenus[this.state.category]}/>
            </div>
        );
    }
}

export default KioskView

