import type { Snippet } from "svelte";
import type { Align, Boundary, Side } from "./floating-layer.svelte.js";
import type { Arrayable } from "$lib/internal/types.js";
import type { StyleProperties, TextDirection } from "$lib/shared/index.js";

export type FloatingLayerContentProps = {
	id: string;
	/**
	 * The preferred side of the anchor to render against when open.
	 * Will be reversed when collisions occur.
	 *
	 * @see https://floating-ui.com/docs/computePosition#placement
	 */
	side?: Side;

	/**
	 * The distance in pixels from the anchor to the floating element.
	 * @see https://floating-ui.com/docs/offset#options
	 */
	sideOffset?: number;

	/**
	 * The preferred alignment of the anchor to render against when open.
	 * This may change when collisions occur.
	 *
	 * @see https://floating-ui.com/docs/computePosition#placement
	 */
	align?: Align;

	/**
	 * An offset in pixels from the "start" or "end" alignment options.
	 * @see https://floating-ui.com/docs/offset#options
	 */
	alignOffset?: number;

	/**
	 * Whether the content should be the same width as the trigger.
	 *
	 * @see https://floating-ui.com/docs/size
	 */
	sameWidth?: boolean;

	/**
	 * The distance in pixels from the anchor to the floating element.
	 */
	arrowPadding?: number;

	/**
	 * When `true`, overrides the `side` and `align` options to prevent collisions
	 * with the boundary edges.
	 *
	 * @default true
	 * @see https://floating-ui.com/docs/flip
	 */
	avoidCollisions?: boolean;

	/**
	 * A boundary element or array of elements to check for collisions against.
	 *
	 * @see https://floating-ui.com/docs/detectoverflow#boundary
	 */
	collisionBoundary?: Arrayable<Boundary>;

	/**
	 * The amount in pixels of virtual padding around the viewport edges to check
	 * for overflow which will cause a collision.
	 *
	 * @default 8
	 * @see https://floating-ui.com/docs/detectOverflow#padding
	 */
	collisionPadding?: number | Partial<Record<Side, number>>;

	sticky?: "partial" | "always";

	hideWhenDetached?: boolean;

	updatePositionStrategy?: "optimized" | "always";

	/**
	 * Callback that is called when the floating element is placed.
	 */
	onPlaced?: () => void;

	content?: Snippet<[{ props: Record<string, unknown> }]>;

	/**
	 * The positioning strategy to use for the floating element.
	 * @see https://floating-ui.com/docs/computeposition#strategy
	 */
	strategy?: "absolute" | "fixed";

	/**
	 * The text direction of the content.
	 */
	dir?: TextDirection;

	/**
	 * The style properties to apply to the content.
	 */
	style?: StyleProperties;

	/**
	 * Whether the floating layer is present.
	 */
	present: boolean;

	/**
	 * The ID of the content wrapper element.
	 */
	wrapperId?: string;
};

export type FloatingLayerAnchorProps = {
	id: string;
	children?: Snippet;
};