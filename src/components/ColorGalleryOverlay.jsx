export default function ColorGalleryOverlay({ images, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="grid grid-cols-2 grid-rows-3 w-full h-full">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" className="w-full h-full object-cover" draggable={false} />
        ))}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white text-2xl leading-none"
      >
        ×
      </button>
    </div>
  )
}
