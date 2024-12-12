import React, { useState, useEffect } from 'react';

  function DisplayContent({ formData }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date();
        const start = new Date(`${formData.startDate}T${formData.startTime}`);
        const end = new Date(`${formData.endDate}T${formData.endTime}`);

        if (now >= start && now <= end) {
          setShowContent(true);
        } else {
          setShowContent(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }, [formData]);

    return (
      <div className="content">
        {showContent && (
          <div>
            {formData.image && <img src={formData.image} alt="Selected" className="fade-effect" />}
            <p>{formData.message}</p>
          </div>
        )}
      </div>
    );
  }

  export default DisplayContent;
