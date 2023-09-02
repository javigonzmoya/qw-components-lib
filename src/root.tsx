import { $ } from '@builder.io/qwik';
import { QwButton } from './components/qw-button/qw-button';
import { QwGrid } from './components/qw-grid/qw-grid';
import { QwGridItem } from './components/qw-grid/qw-grid-item/qw-grid-item';

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
        <QwGrid columnGap='s-200' rowGap='s-200'>
          <QwGridItem col={6} xs={12} sm={12} md={6} lg={4} xl={2} xxl={2}>
            <QwButton size='full' class={'token'} onClick$={handleCLick}>
              My button
            </QwButton>
          </QwGridItem>
          <QwGridItem xs={12} sm={12} md={6} lg={4} xl={2} xxl={2}>
            <QwButton size='full' onClick$={handleCLick}>
              My button full
            </QwButton>
          </QwGridItem>
        </QwGrid>
        <QwButton disabled size='full' onClick$={handleCLick}>
          My button full disabled
        </QwButton>
      </body>
    </>
  );
};
