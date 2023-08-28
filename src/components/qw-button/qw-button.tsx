import {
  Slot,
  component$,
  useStylesScoped$,
  type PropFunction,
  $,
} from '@builder.io/qwik';
import styles from './qw-button.scss?inline';

export interface QwButtonProps {
  /**
   * 👨🏻‍🦯` this is aria-label A11y propertie
   */
  ariaLabel?: string;
  /**
   * this is variant button component
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  /**
   * this is variant button component
   */
  size?: 'auto' | 'full';
  /**
   *  👨🏻‍🦯` this is role button button or link
   */
  role?: 'button' | 'link';
  /**
   *  this is disabed attribute
   */
  disabled?: boolean;
  /**
   * this event void click
   */
  onClick$?: PropFunction<() => void>;
  /**
   * this custom class css
   */
  class?: string;
}
/**
 *  this is UI button component
 */
export const QwButton = component$<QwButtonProps>(
  ({
    variant = 'primary',
    ariaLabel = '',
    role = 'button',
    disabled = false,
    size = 'auto',
    onClick$,
    class: _class = '',
  }) => {
    useStylesScoped$(styles);
    const handleCLick$ = $(() => !disabled && onClick$?.());
    return (
      <button
        class={{
          'qw-button': true,
          [`qw-button--${variant}`]: true,
          'qw-button--full': size === 'full',
          [_class]: true,
        }}
        disabled={disabled}
        onClick$={handleCLick$}
        role={role}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        <Slot />
      </button>
    );
  }
);
