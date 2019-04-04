// import React, { Component } from "react";
// import { Document, Page } from "react-pdf";
// import resume from './resume.pdf'

// class PdfViewer extends Component {
//     constructor() {
//         this.state = {
//             numPages: null,
//             pageNumber: 1
//         };
//     }

//     onDocumentLoadSuccess() {
//         numPages => {
//             this.setState({ numPages });
//         }
//     };

//     goToPrevPage() {
//         this.setState(state =>
//             ({ pageNumber: state.pageNumber - 1 }))
//     }

//     goToNextPage() {
//         this.setState(state =>
//             ({ pageNumber: state.pageNumber + 1 })
//         )

//     };

//     render() {
//         const { pageNumber, numPages } = this.state;


//         return (
//             <div>
//                 <nav>
//                     <button onClick={this.goToPrevPage}>Prev</button>
//                     <button onClick={this.goToNextPage}>Next</button>
//                 </nav>

//                 <div style={{ width: 600 }}>
//                     <Document
//                         file= resume
//                         onLoadSuccess={this.onDocumentLoadSuccess}
//                     >
//                         <Page pageNumber={pageNumber} width={600} />
//                     </Document>
//                 </div>

//                 <p>
//                     Page {pageNumber} of {numPages}
//                 </p>
//             </div >
//         );
//     }

// }
// export default PdfViewer;