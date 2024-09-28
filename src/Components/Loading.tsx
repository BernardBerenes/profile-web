import React from 'react';

const Loading: React.FC = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <span className="loading loading-ball loading-lg bg-slate-200"></span>
          <span className="loading loading-ball loading-lg bg-slate-200"></span>
          <span className="loading loading-ball loading-lg bg-slate-200"></span>
          <span className="loading loading-ball loading-lg bg-slate-200"></span>
      </div>
  );
};

export default Loading;
