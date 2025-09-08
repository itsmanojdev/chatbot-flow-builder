import type { IconType } from "react-icons"

interface ButtonType {
    type?: 'primary',
    text: string
    className?: string
}

interface NodeType {
    icon: IconType,
    name: string
}

export type {
    NodeType,
    ButtonType
}