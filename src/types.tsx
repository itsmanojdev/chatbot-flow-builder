import type { HTMLAttributes, JSX } from "react";
import type { IconType } from "react-icons"
import type { toastVariant } from "./constants";

interface ButtonType extends HTMLAttributes<HTMLDivElement> {
    type?: 'primary',
    text: string
    className?: string
}

type NodeObj = {
    icon: IconType,
    name: string,
    key: string,
    render?: (params: any) => JSX.Element,
}

type NodeType = Record<string, NodeObj>

type CustomNodeType = Record<string, (params: any) => JSX.Element>

type MessageNodeDataType = {
    text: string
}

type nodeDataType = MessageNodeDataType;

type ToastVariantType = (typeof toastVariant)[keyof typeof toastVariant]

export type {
    NodeObj,
    NodeType,
    ButtonType,
    CustomNodeType,
    nodeDataType,
    MessageNodeDataType,
    ToastVariantType
}