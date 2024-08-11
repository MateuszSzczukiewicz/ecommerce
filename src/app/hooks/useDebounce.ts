import { useCallback, useRef } from "react";

type DebounceCallback<T> = (arg: T) => void;

export const useDebounce = <T>(callback: DebounceCallback<T>, delay: number) => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const debouncedCallback = useCallback(
		(arg: T) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				callback(arg);
			}, delay);
		},
		[callback, delay],
	);

	return debouncedCallback;
};
