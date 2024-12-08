import { useState } from "react";
import { Document, Page } from "react-pdf";

function PdfComp(props) {
  return (
    <div className="pdf-div">
      <Document file={props.pdfFile}>
      </Document>

    </div>
  );
}

export default PdfComp;
