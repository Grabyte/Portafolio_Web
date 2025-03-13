import { useContext,useState, useEffect, useRef } from "react";
import { LanguageContext } from '../languagueProviderComponent/languagueContext';
import { PDFViewerText } from './PdfViewerText'; // ajustá la ruta si está en otro archivo
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import cvEs from "../../assets/CV.pdf";
import cvEn from "../../assets/CV_English.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../../styles/pdfViewer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFViewerModal = () => {
  const { language } = useContext(LanguageContext);
  const text = PDFViewerText[language];
  const cvFile = language === "es" ? cvEs : cvEn;

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const modalRef = useRef(null);
  const [isPdfLoaded, setIsPdfLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      const hasScrollbar = scrollbarWidth > 0; // Verificar si hay barra de desplazamiento
  
      document.body.classList.add("modal__open");
  
      // Aplicar padding-right solo si hay barra de desplazamiento y no es un dispositivo móvil
      if (hasScrollbar) {
        document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
      }
    } else {
      document.body.classList.remove("modal__open");
      document.body.style.removeProperty("--scrollbar-width");
    }
  
    return () => {
      document.body.classList.remove("modal__open");
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, [isOpen, isMobile]);

  const baseWidth = 595;
  const maxModalWidth = Math.min(window.innerWidth * 0.6, baseWidth);
  const pdfWidth = isMobile ? Math.min(window.innerWidth * 0.9, 550) : maxModalWidth;

  const onLoadSuccess = () => {
    setIsPdfLoaded(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsPdfLoaded(false);
  };

  return (
    <>
      <a className="btn" onClick={() => setIsOpen(true)}>{text.button}</a>
      {isOpen && (
        <div className="modal__overlay" onClick={closeModal}>
          <div className="modal__content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <div className="pdf__container">
              <Document 
                file={cvFile} 
                onLoadSuccess={onLoadSuccess} 
                className="pdf__document"
                loading={null} // Oculta el mensaje de carga
              >
                <button className="close__btn" onClick={closeModal}>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <Page pageNumber={1} width={pdfWidth} className="pdf__page" />
              </Document>
            </div>
            <div className={`download__container ${isPdfLoaded ? "active" : ""}`}>
              <a href={cvFile} download="Ricardo_Torrena_Curriculum.pdf" className="btn">
              {text.download}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewerModal;

