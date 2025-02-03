import { Clipboard } from "lucide-react";
import { Button } from "./ui/button";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

interface CredentialsProps {
    email: string;
    password: string;
}

const Credentials = ({ email, password }: CredentialsProps) => {
    const [copied, setCopied] = useState<boolean>(false);
    return (
        <div className="w-full mt-2 border rounded-lg p-3">
            <div className="w-full">
                <div className="flex justify-between items-center w-full my-1">
                    <p className="text-pink-500 italic">{email}</p>
                    <CopyToClipboard
                        text={email}
                        onCopy={() => setCopied(true)}
                    >
                        <Button type="button" variant="outline" size="sm">
                            <Clipboard className="text-pink-500" />
                        </Button>
                    </CopyToClipboard>
                </div>
                <div className="flex justify-between items-center w-full my-1">
                    <p className="text-pink-500 italic">{password}</p>
                    <CopyToClipboard
                        text={password}
                        onCopy={() => setCopied(true)}
                    >
                        <Button type="button" variant="outline" size="sm">
                            <Clipboard className="text-pink-500" />
                        </Button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    );
};

export default Credentials;
