import React from 'react'
import classNames from 'classnames/bind'
import styles from "./CategorySelectButton.scss"

const cx = classNames.bind(styles);


const CategorySelectButton = ({children, category, selectedCategory, onCategorySelect, ...props}) => {
        const isCurrentSelected = category === selectedCategory;

        return (
            <div {...props}>
                <div className={cx('category-select-button', isCurrentSelected? 'selected': '')} onClick={()=>{onCategorySelect(category)}}>
                    {children}
                </div>
            </div>
        );
    }
;

export default CategorySelectButton
