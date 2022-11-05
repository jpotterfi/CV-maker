import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import ExportIcon from "../Images/export-icon.svg";
import Purple from "../Banners/purple.svg";
import Orange from "../Banners/orange.svg";
import Bluegrey from "../Banners/bluegrey.svg";
import Bluered from "../Banners/bluered.svg";
import Self from "../Images/self.jpeg";
import BluegreyPDF from "../PDF Images/BluegreyPDF.png";
import BlueredPDF from "../PDF Images/BlueredPDF.png";
import PurplePDF from "../PDF Images/PurplePDF.png";
import OrangePDF from "../PDF Images/OrangePDF.png";
import download from "downloadjs";

export default function PDFFile(props) {
  let bannerColor;
  if (props.data.banner === "purple") {
    console.log("purple hi");
    bannerColor = Purple;
    console.log(bannerColor);
  } else if (props.data.banner === "orange") {
    console.log("orange hi");
    bannerColor = Orange;
    console.log(bannerColor);
  } else if (props.data.banner === "bluegrey") {
    console.log("bluegrey hi");
    bannerColor = Bluegrey;
    console.log(bannerColor);
  } else if (props.data.banner === "bluered") {
    console.log("bluered hi");
    bannerColor = Bluered;
    console.log(bannerColor);
  }

  //   if (props.photoFile === "") {
  //     photoStyle = {
  //       backgroundColor: "white",
  //     };
  //   } else if (props.photoFile !== "") {
  //     photoStyle = {
  //       backgroundColor: "none",
  //       backgroundImage: `url(${props.photoFile})`,
  //     };
  //   }

  console.log(Self);

  async function createPdf() {
    const jpgUrl = "https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg";
    const selfUrl = Self;

    const bluegreyImageBytes = await fetch(BluegreyPDF).then((res) =>
      res.arrayBuffer()
    );
    const blueredImageBytes = await fetch(BlueredPDF).then((res) =>
      res.arrayBuffer()
    );
    const purpleImageBytes = await fetch(PurplePDF).then((res) =>
      res.arrayBuffer()
    );
    const orangeImageBytes = await fetch(OrangePDF).then((res) =>
      res.arrayBuffer()
    );

    const selfImageBytes = await fetch(selfUrl).then((res) =>
      res.arrayBuffer()
    );
    const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.create();
    const selfImage = await pdfDoc.embedJpg(selfImageBytes);
    const bluegreyImage = await pdfDoc.embedPng(bluegreyImageBytes);
    const blueredImage = await pdfDoc.embedPng(blueredImageBytes);
    const purpleImage = await pdfDoc.embedPng(purpleImageBytes);
    const orangeImage = await pdfDoc.embedPng(orangeImageBytes);

    const jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    const page = pdfDoc.addPage([2480, 3508]);
    // const { width, height } = page.getSize();
    const pageWidth = 2480;
    const pageHeight = 3508;
    const fontSize = 30;
    page.drawImage(orangeImage, {
      x: 0,
      y: pageHeight - 863,
      width: 2510,
      height: 863,
    });
    page.drawText("Creating PDFs in JavaScript is awesome!", {
      x: 50,
      y: 50,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });

    const pdfBytes = await pdfDoc.save();
    download(pdfBytes, "pdf-lib_creation_example.pdf", "application/pdf");
  }
  return (
    <div>
      <img id="export-icon" src={ExportIcon} onClick={() => createPdf()} />
      <h1>
        Export<br></br>to PDF
      </h1>
    </div>
  );
}
