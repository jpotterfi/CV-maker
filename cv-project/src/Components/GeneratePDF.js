import html2canvas from "html2canvas";
import JsPDF from "jspdf";
import ExportIcon from "../Images/export-icon.svg";
export default function GeneratePDF(props) {
  // <GeneratePDF data={props.data} forcePreview={props.forcePreview} />
  async function htmlToPDF() {
    if (props.data.isPreviewing === false) {
      props.forcePreview();
    }
    html2canvas(document.querySelector("#preview__ref"), {
      windowWidth: 2480,
      windowHeight: 3508,
    }).then(function (canvas) {
      var imgData = canvas.toDataURL("image/png");
      var doc = new JsPDF("p", "px");
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      doc.save("resume.pdf");
    });
  }
  return (
    <div>
      <img id="export-icon" src={ExportIcon} onClick={htmlToPDF} />
      <h1>
        Export<br></br>to PDF
      </h1>
    </div>
  );
}
