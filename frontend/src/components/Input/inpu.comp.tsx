import { FC } from "react";
import { CustomInput } from "./input.style";
import { ChangeEvent } from "react";

export interface InputFormProps {
    label: string
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}