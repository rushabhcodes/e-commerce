import {CheckCircle2 } from "lucide-react";

export const FormSuccess = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
        <div className="bg-destructive text-secondary-foreground p-3 rounded-md">
            <CheckCircle2 className="p-4 h-4"/>
            <p>{message}</p>
        </div>
    )
};
