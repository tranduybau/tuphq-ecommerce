import './CategoryItem.scss'

export default function CategoryItem(props) {
    let IconProp = props.icon
    return (
        <div className="category-item lg:max-w-[170px]">
            <div className="category-icon">
                {props.children}
            </div>
            <span className="category-name font-poppins">{props.category}</span>
        </div>
    )
}