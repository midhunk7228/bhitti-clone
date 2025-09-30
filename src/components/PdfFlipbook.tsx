"use client";
import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as PdfPage } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfFlipbookProps {
  file: Blob | null;
}

interface FlipBookRef {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
  };
}

interface PdfFlipbookHandle {
  flipNext: () => void;
  flipPrev: () => void;
}

const PdfFlipbook = forwardRef<PdfFlipbookHandle, PdfFlipbookProps>(
  ({ file }, ref) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const flipBookRef = useRef<FlipBookRef | null>(null);
    const page_width = 350;
    const page_height = 450;
    const [zoomLevel] = useState(1.0);

    useEffect(() => {
      setNumPages(null);
    }, [file]);

    useImperativeHandle(ref, () => ({
      flipNext: () => {
        if (flipBookRef.current) {
          flipBookRef.current.pageFlip().flipNext();
        }
      },
      flipPrev: () => {
        if (flipBookRef.current) {
          flipBookRef.current.pageFlip().flipPrev();
        }
      },
    }));

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
    }

    const onPage = (e: { data: number }) => {
      setCurrentPage(e.data + 1);
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
                useMouseEvents={true}
                style={{}}
                drawShadow={true}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                swipeDistance={0}
                showPageCorners={true}
                disableFlipByClick={false}
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
                    className={`flex justify-center items-center w-full z-30`}
                    style={{
                      height: `${page_height}px`,
                    }}
                  >
                    <PdfPage
                      key={`pdf_page_${index + 1}_${zoomLevel}`}
                      pageNumber={index + 1}
                      width={page_width}
                      height={page_height * zoomLevel}
                      renderTextLayer={false}
                      renderAnnotationLayer={true}
                      className="focus:outline-none"
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
                  flipBookRef.current.pageFlip().flipPrev();
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
                  flipBookRef.current.pageFlip().flipNext();
                }
              }}
              className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition-colors text-sm font-semibold cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
);

PdfFlipbook.displayName = "PdfFlipbook";

export default PdfFlipbook;
