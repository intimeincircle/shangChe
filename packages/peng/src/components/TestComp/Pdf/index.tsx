/* eslint-disable react/jsx-no-bind */
import {FunctionComponent, useState} from "react";
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import {PdfReact} from "../../../pdf";
// @ts-ignore
import { Document as ADocument, Page } from 'react-pdf/dist/umd/entry.webpack';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// /dist/esm/entry.webpack
// const PdfReact= require('react-pdf')

// PdfReact.pdfjs.GlobalWorkerOptions.workerSrc = `/live/assets/pdf.worker.min.js`
// `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PdfReact.pdfjs.version}/pdf.worker.min.js`;


// const {Page, Document } = PdfReact


export const Pdf: FunctionComponent = () => {

    const [numPages, setNumPages] = useState(null);

    // @ts-ignore
    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <ADocument
            file={{
            url: "https://pdf.dfcfw.com/pdf/H3_AP202102191463440531_1.pdf?1613758345000.pdf"}}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            {
                Array.from(
                    new Array(numPages),
                    (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ),
                )
            }
        </ADocument>
    )
}

export default Pdf