import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingSpinner() {
  return (
    <div className="w-full relative translate-x-1/2 mt-12">
      <AiOutlineLoading3Quarters className="animate-spin text-3xl text-main" />
    </div>
  );
}
