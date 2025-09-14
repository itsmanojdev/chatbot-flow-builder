import { toast as reactToast } from "react-toastify";
import { nodeTypes, toastVariant } from "./constants";
import type { nodeDataType, ToastVariantType } from "./types";

export const getDefaultNodeData = (nodeType: string): nodeDataType => {
    switch (nodeType) {
        case nodeTypes.MESSAGE.key:
            return {
                text: ''
            }

        default:
            // Default Message Type
            return {
                text: ''
            }
    }
}



export const toast = (variant: ToastVariantType = toastVariant.DEFAULT, text = '') => {
    const commonClassName = "text-gray-700! font-semibold! justify-center! w-fit! min-h-0! px-5! py-3! rounded-lg!";
    switch (variant) {
        case toastVariant.SUCCESS:
            reactToast.success(text, {
                className: `${commonClassName} bg-green-200!`
            })
            break;

        case toastVariant.ERROR:
            reactToast.error(text, {
                className: `${commonClassName} bg-red-200!`
            })
            break;

        default:
            break;
    }
}

