import { Spinner } from "@material-tailwind/react";

export default function SpinnerLoad() {
  return (
    <div className="flex items-center gap-8">
      <Spinner className="h-6 w-6" />
    </div>
  );
}
