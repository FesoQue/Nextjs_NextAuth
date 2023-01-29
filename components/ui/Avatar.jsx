import style from "../../styles/primitives.module.css";
import useSessionData from "@/hooks/useSession";
import * as Avatar from "@radix-ui/react-avatar";
import { UserIcon } from "lucide-react";
import React from "react";

const AvatarDemo = () => {
  const { userAvatar, userName } = useSessionData();

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Avatar.Root className={style.AvatarRoot}>
        <Avatar.Image className="AvatarImage" src={userAvatar} alt={userName} />
        <Avatar.Fallback className={style.AvatarFallback} delayMs={600}>
          <UserIcon />
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default AvatarDemo;
