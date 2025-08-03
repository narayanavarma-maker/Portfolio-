'use client';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';

interface BuilderPageProps {
  content: any;
}

export function RenderBuilderContent({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent model="page" content={content} />;
  }

  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>
        Make sure you have a page that corresponds to this URL in Builder.io
      </p>
    </>
  );
}
