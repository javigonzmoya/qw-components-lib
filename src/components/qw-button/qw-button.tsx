import {
  type PropFunction,
  Slot,
  component$,
  useStylesScoped$,
  useVisibleTask$,
  useTask$,
} from '@builder.io/qwik';
import styles from './qw-button.scss?inline';

interface QwButtonProps {
  ariaLabel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  role?: 'button' | 'link';
  disabled?: false;
  onClick$?: PropFunction<() => void>;
}

export const QwButton = component$<QwButtonProps>(
  ({ ariaLabel = '', role = 'button', disabled = false, onClick$ }) => {
    useStylesScoped$(styles);
    useVisibleTask$(() => {
      console.log('cliente');
    });
    useTask$(() => {
      console.log('server');
    });
    return (
      <button
        class='qw-button'
        onClick$={onClick$}
        role={role}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        <Slot />
      </button>
    );
  }
);
