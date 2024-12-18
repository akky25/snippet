import { Theme } from "@radix-ui/themes";
import { ComponentPropsWithRef } from "react";

export const ThemeWrapper = ({
  children,
  ...reset
}: ComponentPropsWithRef<typeof Theme>) => {
  return (
    <Theme
      appearance="dark"
      accentColor="gold"
      radius="medium"
      panelBackground="translucent"
      {...reset}
    >
      {children}
    </Theme>
  );
};
