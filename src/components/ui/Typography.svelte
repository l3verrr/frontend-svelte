<script lang="ts">
	import "@fontsource/red-hat-display/latin.css";
	import "@fontsource/red-hat-display/latin-italic.css";
	import "@fontsource/red-hat-text/latin.css";
	import "@fontsource/red-hat-text/latin-italic.css";

	export let preset: "Heading" | "Subheading" | "Body" | "Bold" | "Caption" | "Italic" | undefined =
		undefined;
	export let weight: number | undefined = undefined;
	export let size: "xs" | "sm" | "md" | "lg" | "xl" | undefined = undefined;
	export let color: string | undefined = undefined;
	export let fontSize: number | undefined = undefined;
	export let truncated: boolean | undefined = undefined;
	export let element: string = "p";

	if (size && fontSize) throw new Error("Cannot specify both size and fontSize");
	if (size && element !== "p") throw new Error("Cannot specify size with non-default element");

	let font = "Red Hat Display";

	let className = "";
	export { className as class };

	if (size === "xl") {
		element = "h1";
	} else if (size === "lg") {
		element = "h2";
	} else if (size === "xs") {
		element = "small";
		font = "Red Hat Text";
	} else if (size === "sm" || size === "md") {
		font = "Red Hat Text";
	}
</script>

{#if !preset}
	<span
		class="typography-reset-global {size === ('lg' || 'xl')
			? 'typography-use-lg'
			: 'typography-use-sm'} {className}"
	>
		<svelte:element
			this={element}
			class="
            text chonky-{weight || '400'} chonky-{size || 'md'}
			truncated-{truncated}
			{className}
        "
			style="
            color: {color || '#ffffff'};
            font-family: {font}, sans-serif;
			{fontSize ? `font-size: ${fontSize}em` : null}
        "
		>
			<slot />
		</svelte:element>
	</span>
{/if}

<style>
	.typography-reset-global {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.text {
		margin: 0;
		padding: 0;
		border: 0;
	}

	.chonky-300 {
		font-weight: 300;
	}

	.chonky-400 {
		font-weight: 400;
	}

	.chonky-500 {
		font-weight: 500;
	}

	.chonky-600 {
		font-weight: 600;
	}

	.chonky-700 {
		font-weight: 700;
	}

	.chonky-800 {
		font-weight: 800;
	}

	.chonky-900 {
		font-weight: 900;
	}

	.chonky-xs {
		font-size: 0.75em;
	}

	.chonky-sm {
		font-size: 0.875em;
	}

	.chonky-md {
		font-size: 1em;
	}

	.chonky-lg {
		font-size: 1.25em;
	}

	.chonky-xl {
		font-size: 1.5em;
	}

	.truncated-true {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.truncated-false {
		overflow: visible;
		text-overflow: clip;
		white-space: normal;
	}
</style>
