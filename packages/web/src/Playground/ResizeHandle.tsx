import { Separator } from "react-resizable-panels";

export function ResizeHandle({ orientation }: { orientation: "horizontal" | "vertical" }) {
  return (
    <Separator className={`playground-resize-handle playground-resize-handle--${orientation}`} aria-label="Resize editors">
      <span aria-hidden="true" />
    </Separator>
  );
}
