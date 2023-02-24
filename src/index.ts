export type Timeout = ReturnType<typeof setTimeout>;
export type Callback = () => void;
export type Args = unknown[];

/**
 * Set a gap of time between repeated function calls.
 *
 * @param cb - Function being invoked
 * @param rate - Time, in milliseconds, between callback firings.
 * @returns Callback function, {@link rate}-spaced.
 *
 * @example
 * Best used for things like `mousemove` events.
 * ```
 * const handler = (evt)=>{console.log(evt);}
 * const throttledHandler = throttle(handler, 100);
 * document.body.addEventListener('mousemove', throttledHandler)
 * ```
 * @public
 */
export function throttle(cb: Callback, rate = 1000) {
  let timeout: Timeout;

  return (...args: Args) => {
    if (!timeout) {
      cb.call(null, ...args);

      timeout = setTimeout(() => {
        timeout = null;
      }, rate);
    }
  };
}

export function debounce(cb: Callback, rate = 1000) {
  let timeout: Timeout;

  return (...args: Args) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      cb.call(null, ...args);
    }, rate);
  };
}
