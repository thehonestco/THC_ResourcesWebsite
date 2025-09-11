import { ThumbsUp, MessageSquare } from "lucide-react";

function StatusCard({ status, likes, comments, image, title }) {
  return (
    <div className="relative rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      {/* Status Badge */}
      {status && (
        <span className="absolute top-3 left-3 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
          {status}
        </span>
      )}

      {/* Like & Comment Icons */}
      <div className="absolute top-3 right-3 flex items-center gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <ThumbsUp size={16} />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare size={16} />
          <span>{comments}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="mt-6 flex flex-col items-center">
        <img src={image} alt={title} className="mb-3 w-full rounded-md" />
        <h3 className="text-[14px] font-medium">{title}</h3>
      </div>
    </div>
  );
}
