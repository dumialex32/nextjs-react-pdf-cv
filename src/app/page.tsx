// src/app/page.tsx

"use client";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import Resume from "@/components/Resume";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container mx-auto my-8 h-screen">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex items-center justify-center gap-4">
          <button
            className="btn"
            onClick={() => setIsExpanded((prevState) => !prevState)}
          >
            {!isExpanded ? "Preview CV in PDF" : "Close Preview"}
          </button>

          {/* download the pdf resume directly */}
          <PDFDownloadLink
            className="btn"
            document={<Resume />}
            fileName="cv.pdf"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download CV in PDF"
            }
          </PDFDownloadLink>
        </div>

        {/* conditionally render pdf resume */}
        {true && (
          <PDFViewer width="100%" height="100%">
            <Resume />
          </PDFViewer>
        )}
      </div>
    </div>
  );
}
