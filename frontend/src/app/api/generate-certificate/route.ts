import { NextResponse } from 'next/server';
import { pdf, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// [same CertificateDocument function and styles...]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Participant';
  const email = searchParams.get('email') || 'unknown';

  // Log download
  await supabase.from('certificate_logs').insert([
    { name, email }
  ]);

  const doc = <CertificateDocument name={name} />;
  const stream = await pdf(doc).toBuffer();

  return new NextResponse(stream, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="certificate-${name}.pdf"`,
    },
  });
}
