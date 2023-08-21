import {
  type PropFunction,
  Slot,
  component$,
  useStylesScoped$,
  useVisibleTask$,
  useTask$,
} from '@builder.io/qwik';
import styles from './qw-button.scss?inline';

export interface QwButtonProps {
  ariaLabel?: string;
  /** this is variant button component */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** this is role button button or link */
  role?: 'button' | 'link';
  /** this is disabed attribute */
  disabled?: boolean;
  /** this event void click */
  onClick$?: PropFunction<() => void>;
}
/** this is action button component */
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
