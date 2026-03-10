'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslationContext } from '@/components/TranslationProvider';

// Dynamic import PDFViewer to avoid SSR issues
const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Đang tải PDF viewer...</p>
      </div>
    </div>
  ),
});

const CVPage = () => {
  const { t } = useTranslationContext();

  return (
    <div className="min-h-screen bg-background">
      {/* PDF Viewer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <PDFViewer file="/assets/reactjs-phamthanhtruong-cv1.pdf" />
        </div>
      </div>
    </div>
  );
};

export default CVPage;
