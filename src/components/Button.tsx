
import type { ButtonType } from '../types'

const Button = ({ type = 'primary', text, className: additionalClasses = '', ...props }: ButtonType) => {
    const commonClasses = "inline-block px-6 py-1.5 rounded-md border font-bold";
    let classes = "";
    switch (type) {
        case "primary":
            classes = "bg-white border-indigo-500 text-indigo-500 hover:border-indigo-700 hover:text-indigo-700 active:border-indigo-900 active:text-indigo-900";
            break;

        default:
            // Default - primary
            classes = "bg-white border-indigo-500 text-indigo-500 hover:border-indigo-700 hover:text-indigo-700 active:border-indigo-900 active:text-indigo-900";
            break;
    }
    return (
        <div className={`${commonClasses} ${classes} ${additionalClasses}`} {...props}>{text}</div>
    )
}

export default Button