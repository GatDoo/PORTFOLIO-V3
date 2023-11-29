import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100 }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    if (text) {
      let index = 0;
      const timer = setInterval(() => {
        setContent((c) => c + text.charAt(index));
        index++;
        if (index === text.length) clearInterval(timer);
      }, speed);

      return () => clearInterval(timer);
    }
  }, [text, speed]);

  return <div className='writer'>{content}</div>;
};

export default Typewriter;

