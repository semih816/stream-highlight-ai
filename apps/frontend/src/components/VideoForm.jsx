import { useState } from "react";

export default function VideoForm() {
  const [videoUrl, setVideoUrl] = useState("");
  const [shortCount, setShortCount] = useState(3);
  const [addSubtitles, setAddSubtitles] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      videoUrl,
      shortCount,
      addSubtitles
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#12101c] p-6 rounded-xl shadow-lg space-y-4"
    >
      {/* Video URL */}
      <input
        type="text"
        placeholder="Video linkini gir"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg bg-[#0b0917] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
      />

      {/* Shorts Sayısı */}
      <select
        value={shortCount}
        onChange={(e) => setShortCount(Number(e.target.value))}
        className="w-full px-4 py-3 rounded-lg bg-[#0b0917] border border-gray-700 text-white focus:outline-none focus:border-pink-500"
      >
        <option value={3}>3 Shorts</option>
        <option value={5}>5 Shorts</option>
      </select>

      {/* Altyazı */}
      <label className="flex items-center gap-2 text-sm text-gray-300">
        <input
          type="checkbox"
          checked={addSubtitles}
          onChange={(e) => setAddSubtitles(e.target.checked)}
          className="accent-pink-500 cursor-pointer"
        />
        Altyazı ekle
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 font-semibold hover:opacity-90 transition cursor-pointer" 
      >
        Shorts Oluştur
      </button>
    </form>
  );
}
