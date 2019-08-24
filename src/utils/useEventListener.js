import { useEffect, useRef } from 'react';

export default function useEventListener(eventName, handler, element = window) {
  const handlerRef = useRef();
  /* eslint-disable consistent-return */
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = e => handlerRef.current(e);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [element, eventName]);
}
