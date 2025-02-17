import { JSX } from "react";

interface AvatarProps {
    hasAvatar: boolean;
    name: string;
}

function Avatar({hasAvatar, name}:AvatarProps):JSX.Element {
    return ( <>
        {hasAvatar ? (
            <div className="avatar">
                <div className="size-6 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
                </div>
          </div>
        ) : (
            <div className="avatar placeholder">
                <div className="bg-primary/20 text-primary w-6 rounded-full">
                    <span className="text-md uppercase">{name[0]}</span>
                </div>
            </div>
        )}
    </> );
}

export default Avatar;