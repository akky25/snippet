"use client";

import styles from "./navigation.module.css";
import { IconButton } from "@radix-ui/themes";
import { Menu } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ThemeWrapper } from "./theme";
import { NavigationItems } from "./navigation-items";

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
