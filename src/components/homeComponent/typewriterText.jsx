import { useTypewriter, Cursor } from 'react-simple-typewriter';

function TypewriterText({ words }) {
  const [text] = useTypewriter({
    words,
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 20,
    delaySpeed: 5000
  });

  return (
    <>
      {text}
      <Cursor cursorStyle="|" />
    </>
  );
}

export default TypewriterText;
