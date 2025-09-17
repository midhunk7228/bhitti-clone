"use client";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as PdfPage } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
  file: Blob | null;
}

const PdfFlipbook = forwardRef(({ file }: PdfFlipbookProps, ref) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const flipBookRef = useRef(null);
  const page_width = 350;
  const page_height = 450;
  const [zoomLevel, setZoomLevel] = useState(1.0);

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    flipNext: () => {
      if (flipBookRef.current) {
        (flipBookRef.current as any).pageFlip().flipNext();
      }
    },
    flipPrev: () => {
      if (flipBookRef.current) {
        (flipBookRef.current as any).pageFlip().flipPrev();
      }
    },
  }));

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const onPage = (e: any) => {
    setCurrentPage(e.data + 1); // Update currentPage on page turn
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.1, 2.0)); // Max zoom 2.0
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.5)); // Min zoom 0.5
  };

  return (
    <div className="flex flex-col items-center w-full p-4 bg-white">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && (
          <div
            style={{ height: `${page_height}px` }}
            className="relative flex justify-center items-center my-4 shadow-lg"
          >
            <HTMLFlipBook
              key={zoomLevel}
              width={page_width}
              height={page_height}
              showCover={true}
              flippingTime={800}
              usePortrait={false}
              startPage={0}
              size="fixed"
              minWidth={page_width * 0.5 * zoomLevel}
              maxWidth={page_width * 2 * zoomLevel}
              minHeight={page_height}
              maxHeight={page_height}
              maxShadowOpacity={0.5}
              mobileScrollSupport={true}
              className="pdf-flipbook-container"
              onFlip={onPage}
              ref={flipBookRef}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <div
                  key={`page_${index + 1}`}
                  className={` flex justify-center items-center w-full z-30`}
                  style={{
                    height: `${page_height}px`,
                    // transform: `scale(${zoomLevel})`,
                    // width: page_width * 2 * zoomLevel,
                    // height: page_height * zoomLevel,
                  }}
                >
                  <PdfPage
                    key={`pdf_page_${index + 1}_${zoomLevel}`}
                    pageNumber={index + 1}
                    width={page_width}
                    height={page_height * zoomLevel}
                    renderTextLayer={false}
                    renderAnnotationLayer={true}
                    _className="focus:outline-none"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        )}
      </Document>
      {numPages && (
        <div className="flex flex-wrap justify-center items-center mt-11 space-x-2 p-3 rounded-lg ">
          <button
            onClick={() => {
              if (flipBookRef.current) {
                (flipBookRef.current as any).pageFlip().flipPrev();
              }
            }}
            className="px-4 py-2 bg-neutral-800 text-white rounded-md hover:bg-neutral-700 transition-colors text-sm font-semibold cursor-pointer"
          >
            Previous
          </button>
          <span className="text-base font-semibold text-gray-800 mx-2">
            Page {currentPage} of {numPages}
          </span>
          <button
            onClick={() => {
              if (flipBookRef.current) {
                (flipBookRef.current as any).pageFlip().flipNext();
              }
            }}
            className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors text-sm font-semibold cursor-pointer"
          >
            Next
          </button>
          {/* <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={zoomOut}
              className="px-3 py-1 bg-gray-400 text-gray-900 rounded-md hover:bg-gray-500 transition-colors text-sm font-semibold"
            >
              -
            </button>
            <span className="text-base font-semibold text-gray-800">
              {(zoomLevel * 100).toFixed(0)}%
            </span>
            <button
              onClick={zoomIn}
              className="px-3 py-1 bg-gray-400 text-gray-900 rounded-md hover:bg-gray-500 transition-colors text-sm font-semibold"
            >
              +
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
});

PdfFlipbook.displayName = "PdfFlipbook";

export default PdfFlipbook;
