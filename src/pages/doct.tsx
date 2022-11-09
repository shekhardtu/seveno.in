import { jsPDF } from 'jspdf';
import React, { useRef } from 'react';

import ContentTemplate from '@/components/WelcomeTemplate';

const GeneratePdf: React.FC = () => {
  const certificateTemplateRef = useRef<any>(null);

  const handleGeneratePdf = () => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      format: 'a3',
      unit: 'px',
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });

    // Adding the fonts
    // doc.setFont('Anton-Regular', 'normal');

    doc.html(certificateTemplateRef.current, {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      async callback(doc) {
        // save the document as a PDF with name of Memes
        doc.save('Memes');
      },
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <button
        style={{
          margin: '50px',
          padding: '10px',
          backgroundColor: 'black',
          color: 'white',
          fontFamily: 'Anton',
          fontSize: '1.2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1rem',
          cursor: 'pointer',
          width: '200px',
          position: 'relative',
          display: 'block',
        }}
        onClick={handleGeneratePdf}
      >
        Generate Pdf
      </button>
      <div ref={certificateTemplateRef} className="p-0 m-0">
        <ContentTemplate />
      </div>
    </div>
  );
};

export default GeneratePdf;
