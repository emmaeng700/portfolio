import { useState } from "react";

const DescriptionTooltip = ({ description }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      top: rect.bottom + 10,
      left: rect.left,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className='relative'>
      <p
        className='text-gray-600 leading-relaxed cursor-help'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {description}
      </p>

      {showTooltip && (
        <div
          className='fixed bg-gray-900 text-white text-sm rounded-lg p-4 max-w-xs shadow-xl z-50 animate-in fade-in'
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            maxHeight: '300px',
            overflowY: 'auto',
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {description}
          <div className='absolute -top-2 left-4 w-4 h-4 bg-gray-900 transform rotate-45'></div>
        </div>
      )}
    </div>
  );
};

export default DescriptionTooltip;
