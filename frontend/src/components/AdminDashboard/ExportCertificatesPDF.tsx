// components/AdminDashboard/ExportCertificatesPDF.tsx
'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

jsPDF.API.autoTable = autoTable;

const certs = [
  { user: 'Michael Taiwo', course: 'Cyber Hygiene 101', issued: '2025-04-10' },
  { user: 'Makayla Taiwo', course: 'Digital Privacy Basics', issued: '2025-04-21' },
];

export default function ExportCertificatesPDF() {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Certificate Issuance Report', 14, 20);

    const rows = certs.map(cert => [cert.user, cert.course, cert.issued]);

    doc.autoTable({
      startY: 30,
      head: [['User', 'Course', 'Issued']],
      body: rows,
      theme: 'grid',
      headStyles: { fillColor: [26, 32, 44] },
      margin: { top: 10, left: 14, right: 14 },
    });

    doc.save('certificates.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-4 bg-purple-700 hover:bg-purple-600 text-white text-sm px-4 py-2 rounded"
    >
      Export Certificates to PDF
    </button>
  );
}
