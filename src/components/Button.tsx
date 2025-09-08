
import type { ButtonType } from '../types'

const Button = ({ type = 'primary', text, className: additionalClasses = '' }: ButtonType) => {
    const commonClasses = "inline-block px-6 py-1.5 rounded-md border font-semibold";
    let classes = "";
    switch (type) {
        case "primary":
            classes = "bg-white border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 active:border-blue-900 active:text-blue-900";
            break;

        default:
            // Default - primary
            classes = "bg-white border-blue-500 text-blue-500 hover:border-blue-700 hover:text-blue-700 active:border-blue-900 active:text-blue-900";
            break;
    }
    return (
        <div className={`${commonClasses} ${classes} ${additionalClasses}`}>{text}</div>
    )
}

export default Button