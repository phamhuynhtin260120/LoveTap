import { useEffect, useState } from 'react';
import * as Clipboard from 'expo-clipboard';

/** Sao chép chữ vào bộ nhớ tạm; `copied` bật trong `resetMs` để hiện phản hồi (toast). */
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), resetMs);
    return () => clearTimeout(timer);
  }, [copied, resetMs]);

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
    setCopied(true);
  };

  return { copied, copy } as const;
}
