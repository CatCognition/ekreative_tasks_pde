import React, { useState } from 'react';

const CopyToClipboardButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <span
      className={`copyable ${isCopied ? 'copied' : ''}`}
      onClick={copyToClipboard}
    >
      {text}
    </span>
  );
};

export default CopyToClipboardButton;
