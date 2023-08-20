import { $ } from '@builder.io/qwik';
import { QwButton } from './components/qw-button/qw-button';

export default () => {
  const handleCLick = $(() => {
    alert();
  });
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <QwButton onClick$={handleCLick}>My button</QwButton>
      </body>
    </>
  );
};
