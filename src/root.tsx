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
        <link rel='stylesheet' href='/src/root.css' />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <QwButton class={'token'} onClick$={handleCLick}>
          My button
        </QwButton>
        <QwButton size='full' onClick$={handleCLick}>
          My button full
        </QwButton>
        <QwButton disabled size='full' onClick$={handleCLick}>
          My button full disabled
        </QwButton>
      </body>
    </>
  );
};
