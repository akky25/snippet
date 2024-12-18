"use client";

import styles from "./navigation.module.css";
import { IconButton } from "@radix-ui/themes";
import { Menu } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ThemeWrapper } from "./theme";

const Links = [
  { href: "/", label: "Home" },
  { href: "/xxxx", label: "xxxx" },
  { href: "/yyyy", label: "yyyy" },
];

export const Navigation = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className={styles.buttonContainer}>
            <IconButton
              size="4"
              radius="full"
              variant="soft"
              className={styles.button}
            >
              <Menu size={28} />
            </IconButton>
          </div>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <ThemeWrapper asChild>
            <Dialog.Content className={styles.content}>
              <Dialog.Title />
              <NavigationItems />
            </Dialog.Content>
          </ThemeWrapper>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

const NavigationItems = () => {
  return (
    <div className={styles.navigationItemsContainer}>
      {Links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
};
