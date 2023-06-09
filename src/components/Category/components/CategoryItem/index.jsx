import Image from "next/image";
import './CategoryItem.scss'
import { ReactSVG } from "react-svg";
export default function CategoryItem(props) {
    return (
        <div className="category-item">
            <div className="category-icon">
                <ReactSVG
                    className="category-img"
                    src={`image/${props.icon}`} />
            </div>
            <span className="category-name">{props.category}</span>
        </div>
    )
}