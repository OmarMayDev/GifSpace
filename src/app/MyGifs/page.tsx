import UploadedGifs from "./components/UploadedGifs";
import UploadGif from "./components/UploadGif";

export default function MyGifs() {
  return (
    <div className="overflow-x-hidden">
      <UploadGif />
      <UploadedGifs />
    </div>
  );
}
