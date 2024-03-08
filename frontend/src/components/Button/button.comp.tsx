import React from "react";
import { CustomButton } from "./button.style";

// Submit Button
export const SubmitButton: React.FC =() =>(
    <CustomButton 
        variant=""
        color="#fff"
        bg="#4caf50"
        hoverColor="#fff"
        hoverFontWeight = "600"
        hoverBackgroundColor = "#45a049"
        hoverBorderColor="#2e2e2e"
        hoverBorderThickeness="0px"
        width="100%"
        p={"2.5%"}
        mb={"4%"}
        mt={"3%"}
        type="submit"
        font-weight={true}
    >Submit</CustomButton>
);


// Delete Button
export const DeleteButton: React.FC = () => (
    <CustomButton
        variant=""
        color="#fff"
        bg="#ff0000"
        hoverColor="#ffffff"
        hoverFontWeight = "600"
        hoverBackgroundColor="#c40000"
        hoverBorderColor="#2e2e2e"
        hoverBorderThickeness="0px"
        width="50%"
        p={8}
        type="button"
    >
        Delete
    </CustomButton>
);

// Cancel Button
interface CancleButtonProps {
    onClick: () => void;
}
export const CancleButton: React.FC<CancleButtonProps> = ({ onClick }) => (
    <CustomButton
        variant=""
        color="#fff"
        bg="#616161"
        hoverColor="#ffffff"
        hoverFontWeight = "500"
        hoverBackgroundColor="#424242"
        hoverBorderColor="#2e2e2e"
        hoverBorderThickeness="0px"
        p={"3.5%"}
        mr={"2%"}
        onClick={onClick}
    >
        Cancel
    </CustomButton>
)
// Clear Button
export const ClearButton: React.FC<CancleButtonProps> = ({ onClick }) => (
    <CustomButton
        variant=""
        color="#000"
        bg="#e0e0e0"
        hoverColor="#2e2e2e"
        hoverFontWeight = "500"
        hoverBackgroundColor="#bdbdbd"
        hoverBorderColor="#2e2e2e"
        hoverBorderThickeness="0px"
        // width="50%"
        p={"3.5%"}
        mr={"2%"}
        onClick={onClick}
    >
        Clear
    </CustomButton>
)

// X `Close` button

export const XCloseButton: React.FC<CancleButtonProps> = ({ onClick }) => (
    <CustomButton
        variant=""
        bg="#fff"
        // border={"none"}
        onClick={onClick}
        pl={"2%"}
        pr={"2%"}
        hoverColor="#000"
        hoverFontWeight = "500"
        hoverBackgroundColor="#fff"
        hoverBorderColor="#2e2e2e"
        hoverBorderThickeness="1px"
    >
        X
    </CustomButton>
)

