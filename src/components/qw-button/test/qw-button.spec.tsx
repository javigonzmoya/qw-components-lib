import { $, component$, useSignal } from '@builder.io/qwik';
import { createDOM } from '@builder.io/qwik/testing';
import { expect, test } from 'vitest';
import { QwButton, type QwButtonProps } from '../qw-button';

test(`[QwButton Component]: Should render default success`, async () => {
  const { screen, render } = await createDOM();
  await render(<QwButton />);
  const btn = screen.querySelector('button') as HTMLElement;
  expect(btn.className).toContain('qw-button');
  expect(btn.className).toContain('qw-button--primary');
  expect(btn.className).not.toContain('qw-button--full');
  expect(btn.getAttribute('role')).toBe('button');
  expect(btn.getAttribute('disabled')).toBeFalsy();
});

test(`[QwButton Component]: Should render set props`, async () => {
  const props: QwButtonProps = {
    variant: 'secondary',
    role: 'link',
    ariaLabel: 'description',
    size: 'full',
    class: 'test-css',
  };

  const { screen, render } = await createDOM();
  await render(<QwButton {...props} />);
  const btn = screen.querySelector('button') as HTMLElement;
  expect(btn.className).toContain('qw-button');
  expect(btn.className).toContain(`qw-button--${props.variant}`);
  expect(btn.className).toContain(`qw-button--full`);
  expect(btn.getAttribute('role')).toBe(props.role);
});

test(`[QwButton Component]: Should render disabled`, async () => {
  const { screen, render } = await createDOM();
  await render(<QwButton disabled />);
  const btn = screen.querySelector('button') as HTMLElement;
  expect(btn.getAttribute('disabled')).toBe('');
});

test(`[QwButton Component]: Should emit click`, async () => {
  const MyMockWrapper = component$(() => {
    const signal = useSignal(0);
    const onClick = $(() => {
      signal.value++;
    });
    const test = async () => {
      const { screen, render, userEvent } = await createDOM();
      await render(<QwButton onClick$={onClick} />);
      const btn = screen.querySelector('button') as HTMLElement;
      await userEvent(btn, 'click');
      await userEvent(btn, 'click');
      expect(signal.value).toBe(2);
    };
    test();
    return <></>;
  });
  const { render } = await createDOM();
  await render(<MyMockWrapper />);
});

test(`[QwButton Component]: Should no emit click -> button is disabled`, async () => {
  const MyMockWrapper = component$(() => {
    const signal = useSignal(0);
    const onClick = $(() => {
      signal.value++;
    });
    const test = async () => {
      const { screen, render, userEvent } = await createDOM();
      await render(<QwButton disabled onClick$={onClick} />);
      const btn = screen.querySelector('button') as HTMLElement;
      await userEvent(btn, 'click');
      await userEvent(btn, 'click');
      expect(signal.value).toBe(0);
    };
    test();
    return <></>;
  });
  const { render } = await createDOM();
  await render(<MyMockWrapper />);
});
