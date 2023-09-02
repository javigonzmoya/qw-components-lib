import {
  Slot,
  component$,
  useSignal,
  useStylesScoped$,
  useVisibleTask$,
} from '@builder.io/qwik';
import styles from './qw-grid-item.scss?inline';
import { getJsxTruthyAttr } from '@/utils';

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

export interface QwGridItemProps {
  /**
   * The order property controls the order in which they appear in the flex container.
   */
  order?: number;
  /**
   * Indicates column size fixed shortland all breakpoint. Not responsive
   */
  col?: number;
  /**
   * Indicates column size for mobile portrait
   */
  xs?: number;
  /**
   * Indicates column size for mobile landscape
   */
  sm?: number;
  /**
   * Indicates column size for tablet portrait
   */
  md?: number;
  /**
   * Indicates column size for desktop and tablet landscape
   */
  lg?: number;
  /**
   * Indicates column size for mobile wide desktop
   */
  xl?: number;
  /**
   * Indicates column size for mobile ultra wide desktop
   */
  xxl?: number;
  /**
   * this custom class css
   */
  class?: string;
}
/**
 *  this is gtid  component
 * @description this is grid item layout component
 */
export const QwGridItem = component$<QwGridItemProps>(
  ({ order = 0, col, xs, sm, md, lg, xl, xxl, class: _class = '' }) => {
    useStylesScoped$(styles);
    const $gridItem = useSignal<HTMLDivElement>();
    const columParentGap = useSignal<string>('s-0');

    useVisibleTask$(() => {
      $gridItem.value!.style.order = `${order}`;
      const container = $gridItem.value?.parentElement;
      columParentGap.value = container?.getAttribute('data-column-gap') ?? '';
    });

    return (
      <div
        ref={$gridItem}
        class={{
          'qw-grid-item': true,
          [_class]: true,
        }}
        {...getJsxTruthyAttr<number | string | undefined>({
          'data-column-gap': columParentGap.value,
          'data-col': col,
          'data-xs-col': xs,
          'data-sm-col': sm,
          'data-md-col': md,
          'data-lg-col': lg,
          'data-xl-col': xl,
          'data-xxl-col': xxl,
        })}
      >
        <Slot />
      </div>
    );
  }
);
