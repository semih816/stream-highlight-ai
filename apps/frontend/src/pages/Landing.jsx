import VideoForm from "../components/VideoForm";

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0917] text-white px-4">
      <div className="w-full max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold">
          🎬 Stream Highlight AI
        </h1>

        <p className="text-gray-400 text-sm">
          YouTube / Kick yayınlarından otomatik shorts oluştur
        </p>

        <VideoForm />
      </div>
    </div>
  );
}
