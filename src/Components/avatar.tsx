import { JSX } from "react";

interface AvatarProps {
  hasAvatar: boolean;
  name: string;
  size: string;
}

function Avatar({ hasAvatar, name, size }: AvatarProps): JSX.Element {
  return (
    <>
      {hasAvatar ? (
        <div className="avatar">
          <div className={` rounded-full ${size}`}>
            <img
              src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
              alt="avatar"
            />
          </div>
        </div>
      ) : (
        <div className="avatar placeholder">
          <div className={`bg-primary/20 text-primary rounded-full ${size}`}>
            <span className="text-md uppercase">{name[0]}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Avatar;