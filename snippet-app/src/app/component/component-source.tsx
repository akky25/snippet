import * as React from "react";

export function ComponentSource({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}
