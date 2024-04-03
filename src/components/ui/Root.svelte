<script lang="ts">
	import { onNavigate } from "$app/navigation";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div>
	<slot />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}

	@keyframes blur-in {
		from {
			opacity: 0;
			filter: blur(120px);
		}
	}

	@keyframes blur-out {
		to {
			opacity: 0;
			filter: blur(4px);
		}
	}

	:root::view-transition-old(root) {
		animation: 200ms linear both blur-out;
	}

	:root::view-transition-new(root) {
		animation: 200ms linear both blur-in;
	}
</style>
