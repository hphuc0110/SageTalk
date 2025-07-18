export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <div className="text-6xl font-bold mb-4 font-playfair">MASTERTALK</div>
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-[#d6a067] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#d6a067] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-[#d6a067] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
