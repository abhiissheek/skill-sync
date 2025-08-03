// app/api/upload-resume/route.jsx

import { NextResponse } from 'next/server';
import mammoth from 'mammoth';

const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const ACCEPTED_MIMETYPE = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('resume');

    if (!file) {
      return NextResponse.json({ message: 'No file uploaded.' }, { status: 400 });
    }

    if (file.type !== ACCEPTED_MIMETYPE) {
      return NextResponse.json({ message: 'Invalid file type. Only DOCX files are allowed.' }, { status: 400 });
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json({ message: `File too large. Maximum ${MAX_FILE_SIZE_MB}MB allowed.` }, { status: 413 });
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const result = await mammoth.extractRawText({ buffer: fileBuffer });
    const extractedText = result.value;

    const wordCount = extractedText.split(/\s+/).filter(Boolean).length;
    const characterCount = extractedText.length;
    const lineCount = extractedText.split('\n').length;
    
    return NextResponse.json({
      success: true,
      message: 'DOCX file processed successfully',
      extractedText: extractedText,
      fileName: file.name,
      statistics: {
        wordCount,
        characterCount,
        lineCount
      }
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Server-side error during file upload/parsing:', error);
    return NextResponse.json({ 
      success: false,
      message: 'Error processing file content.', 
      error: error.message 
    }, { status: 500 });
  }
}