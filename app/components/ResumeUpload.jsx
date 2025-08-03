// app/components/ResumeUpload.jsx
"use client";

import React, { useState } from 'react';

const ResumeUpload = ({ onFileProcessed }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [extractedText, setExtractedText] = useState('');
  const [fileStats, setFileStats] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      console.log('📁 File selected:', {
        name: file.name,
        type: file.type,
        size: file.size,
        extension: file.name.split('.').pop()?.toLowerCase()
      });

      // Check if it's a DOCX file by extension (more reliable than MIME type)
      const hasDocxExtension = file.name.toLowerCase().endsWith('.docx');
      const validMimeTypes = [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/octet-stream' // Sometimes DOCX files show as this
      ];
      const hasValidMimeType = validMimeTypes.includes(file.type);

      if (!hasDocxExtension && !hasValidMimeType) {
        setMessage(`❌ Please select a DOCX file only. 
                   Received: ${file.name} (${file.type})
                   Expected: .docx file extension`);
        setSelectedFile(null);
        return;
      }
      
      // Check file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        setMessage(`❌ File too large. Maximum size is 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB.`);
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setMessage(`✅ Selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);
      setExtractedText('');
      setFileStats(null);
    } else {
      setSelectedFile(null);
      setMessage('');
      setExtractedText('');
      setFileStats(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('❌ Please select a DOCX file first.');
      return;
    }

    setIsLoading(true);
    setMessage('🔄 Processing DOCX file...');

    const formData = new FormData();
    formData.append('resume', selectedFile);

    try {
      console.log('🚀 Starting upload for:', selectedFile.name);

      const response = await fetch('/api/upload-resume', {
        method: 'POST',
        body: formData,
      });

      console.log('📡 Response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('📊 Response data:', data);

      if (data.success) {
        setMessage('✅ DOCX file processed successfully!');
        setExtractedText(data.extractedText);
        setFileStats(data.statistics);
        
        // Call the callback if provided
        if (onFileProcessed) {
          onFileProcessed({
            text: data.extractedText,
            fileName: data.fileName,
            stats: data.statistics
          });
        }
      } else {
        throw new Error(data.message || 'Processing failed');
      }

    } catch (error) {
      console.error('❌ Upload error:', error);
      setMessage(`❌ Error: ${error.message}`);
      setExtractedText('');
      setFileStats(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto border">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        📝 Upload Your Resume (DOCX Only)
      </h2>
      
      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">📋 Requirements:</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• File format: DOCX only (.docx)</li>
          <li>• Maximum size: 5MB</li>
          <li>• Document should contain readable text</li>
        </ul>
      </div>

      <div className="mb-4">
        <input
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg
                     hover:border-blue-400 focus:border-blue-500 focus:outline-none
                     file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
                     file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${
          message.includes('❌') 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : message.includes('✅') 
            ? 'bg-green-50 text-green-700 border border-green-200'
            : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          {message}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors
          ${!selectedFile || isLoading 
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
          }
        `}
      >
        {isLoading ? '🔄 Processing...' : '📤 Upload & Extract Text'}
      </button>

      {fileStats && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
          <h3 className="font-semibold text-gray-800 mb-2">📊 File Statistics:</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-bold text-blue-600">{fileStats.wordCount}</div>
              <div className="text-gray-600">Words</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-green-600">{fileStats.characterCount}</div>
              <div className="text-gray-600">Characters</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-purple-600">{fileStats.lineCount}</div>
              <div className="text-gray-600">Lines</div>
            </div>
          </div>
        </div>
      )}

      {extractedText && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">📄 Extracted Text Preview:</h3>
          <div className="max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg border text-sm">
            <pre className="whitespace-pre-wrap font-mono text-gray-700">
              {extractedText.length > 1000 
                ? extractedText.substring(0, 1000) + '\n\n... (text truncated for preview)'
                : extractedText
              }
            </pre>
          </div>
          {extractedText.length > 1000 && (
            <p className="text-xs text-gray-500 mt-2">
              Showing first 1000 characters. Full text has been processed.
            </p>
          )}
        </div>
      )}

      <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
        <p className="text-sm text-yellow-700">
          💡 <strong>Tip:</strong> If you have a PDF resume, you can convert it to DOCX by opening it in Microsoft Word 
          and saving as "Word Document (.docx)" format.
        </p>
      </div>
    </div>
  );
};

export default ResumeUpload;