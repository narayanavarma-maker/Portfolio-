'use client';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { builder } from '@builder.io/sdk';

interface BuilderPageProps {
  content: any;
}

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
