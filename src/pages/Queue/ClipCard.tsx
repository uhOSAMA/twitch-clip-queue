import React from 'react';
import { removeClip, selectCurrentClip } from '../../store/queue';

export interface ClipCardProps {
  id: string;
  provider: string;
  title?: string;
  submitter?: string;
  submitterCount?: number;
  channel?: string;
  game?: string;

  thumbnailUrl?: string;
}

function ClipCard({ id, provider, thumbnailUrl, title, submitter, submitterCount = 0, channel, game }: ClipCardProps) {
  return (
    <div className="clip max-w-sm rounded overflow-hidden flex flex-col mb-4">
      {thumbnailUrl && <img className="w-full" src={thumbnailUrl} alt={title} />}
      <div className="h-full w-full relative">
        <div className="absolute flex right-1 bottom-1 clip-buttons space-x-1">
          <button className="btn-play" onClick={() => selectCurrentClip({ id, provider })}>
            &raquo;
          </button>
          <button className="btn-clear" onClick={() => removeClip({ id, provider })}>
            &times;
          </button>
        </div>
        <div className="px-2 py-1">
          <h4 className="font-bold text-sm mb-1">{title}</h4>
          <p className="text-gray-700 text-xs mb-1 font-normal">
            <span className="font-bold">{channel} </span>
            {game && (
              <span>
                playing&nbsp;<span className="font-bold">{game}</span>
              </span>
            )}
          </p>
          <p className="text-gray-700 text-xs font-normal">
            {submitter && (
              <>
                Submitted by <span className="font-bold">{submitter}</span>
              </>
            )}
            <span className="text-xs">{submitterCount > 0 && ' +' + submitterCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClipCard;
