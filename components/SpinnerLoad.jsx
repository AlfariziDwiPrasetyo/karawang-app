import { Spinner } from "@material-tailwind/react";

export default function SpinnerLoad({ width, height }) {
  return (
    <div className="flex items-center gap-8">
      <Spinner className={`h-${height} w-${width}`} />
    </div>
  );
}
