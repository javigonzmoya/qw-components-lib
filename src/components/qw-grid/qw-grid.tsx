import { Slot, component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './qw-grid.scss?inline';

export type SpacingGap =
  | 's-0'
  | 's-10'
  | 's-25'
  | 's-50'
  | 's-75'
  | 's-100'
  | 's-150'
  | 's-200'
  | 's-250'
  | 's-300'
  | 's-400'
  | 's-500';

export interface QwGridProps {
  /**
   * Explicitly controls the space between flex items row. It applies that spacing only between items not on the outer edges.
   */
  rowGap?: SpacingGap;
  /**
   * Explicitly controls the space between flex items column. It applies that spacing only between items not on the outer edges.
   */
  columnGap?: SpacingGap;

  /**
   * This defines the default behavior for how flex items are laid out along the cross axis on the current line.
   */
  alignItems?: 'stretch' | 'start' | 'end' | 'center' | 'baseline';
  /**
   * This defines the alignment along the main axis.
   */
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /**
   * this custom class css
   */
  class?: string;
}
/**
 *  this is UI button component
 */
export const QwGrid = component$<QwGridProps>(
  ({
    rowGap = 's-0',
    columnGap = 's-0',
    alignItems = 'stretch',
    justifyContent = 'start',
    class: _class = '',
  }) => {
    useStylesScoped$(styles);
    return (
      <div
        class={{
          'qw-grid': true,
          [`qw-grid-justify-content--${justifyContent}`]: true,
          [`qw-grid-align-items--${alignItems}`]: true,
          [`qw-grid-row-gap--${rowGap}`]: true,
          [`qw-grid-column-gap--${columnGap}`]: true,
          [_class]: true,
        }}
        data-column-gap={columnGap}
      >
        <Slot />
      </div>
    );
  }
);
