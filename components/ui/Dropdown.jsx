import style from "../../styles/primitives.module.css";
import { CaretDown, SignIn, SignOut } from "../icons/Icons";
import useSessionData from "@/hooks/useSession";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/router";
import React from "react";

const Dropdown = () => {
  const { userEmail, authenticated, signOut } = useSessionData();

  const { push, asPath } = useRouter();
  const handleSignin = () => push(`/auth/signin?callbackUrl=${asPath}`);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={style.IconButton} aria-label="Customise options">
          <CaretDown />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={style.DropdownMenuContent}
          sideOffset={5}
        >
          {authenticated ? (
            <DropdownMenu.Item className={style.DropdownMenuItem}>
              <p>{userEmail}</p>{" "}
            </DropdownMenu.Item>
          ) : null}

          <DropdownMenu.Item className={style.DropdownMenuItem}>
            {authenticated ? (
              <button className="flex items-center" onClick={() => signOut()}>
                <SignOut />
                Sign Out
              </button>
            ) : (
              <button className="flex items-center" onClick={handleSignin}>
                <SignIn />
                Sign In
              </button>
            )}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
