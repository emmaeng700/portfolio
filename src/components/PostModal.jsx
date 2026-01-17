import { useState } from "react";

const PostModal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-75'
      onClick={onClose}
    >
      <div
        className='rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative bg-white'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='p-8'>
          <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium'>
                📝 Post
              </span>
              <span className='text-gray-500 text-sm'>{post.date}</span>
            </div>
            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-600 text-2xl font-bold'
            >
              ✕
            </button>
          </div>

          <h1 className='text-4xl font-bold text-gray-900 mb-6'>
            {post.title}
          </h1>

          <div className='prose prose-sm max-w-none text-gray-600 leading-relaxed'>
            {post.content}
          </div>

          <button
            onClick={onClose}
            className='mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
