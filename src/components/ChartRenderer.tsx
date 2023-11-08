import { useEffect, useRef } from 'react';

export function ChartRenderer({ render }: {render: (container: HTMLDivElement) => void}) {
  const chartRendererRef = useRef<HTMLDivElement | null>(null);
  const rendered = useRef(false);

  useEffect(() => {
    if (chartRendererRef.current && !rendered.current ) {
      rendered.current = true;
      render(chartRendererRef.current);
    }
  }, []);

  return <div ref={chartRendererRef} style={{ minHeight: 400 }}></div>;
}
