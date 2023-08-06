import { css, cx } from "panda/css";
import { SystemStyleObject } from "panda/types";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  css?: SystemStyleObject;
}

export function IconButton(props: IconButtonProps) {
  const { children, className, css: cssProp, ...rest } = props;
  return (
    <button
      {...rest}
      className={cx(
        className,
        css({
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          w: "40px",
          h: "40px",
          borderRadius: "md",
          bg: { base: "gray.100", _dark: "gray.700" },
          _hover: {
            bg: "cyan.500",
            color: "white",
            _dark: {
              bg: "cyan.800",
            },
          },
        }),
        css(cssProp ?? {}),
      )}
    >
      {children}
    </button>
  );
}
