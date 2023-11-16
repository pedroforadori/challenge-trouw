import React from "react";

export type ButtonPrimaryType = {
    isLoading?: boolean;
    handleClick: () => void;
    children: React.ReactNode;
    width: string;
}