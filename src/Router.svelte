<script>
	import { onMount } from 'svelte';
	import Impressum from '../routes/impressum.svelte';

	let currentRoute = '#/';

	onMount(() => {
		// Update route on hash change
		const handleHashChange = () => {
			currentRoute = window.location.hash || '#/';
		};

		window.addEventListener('hashchange', handleHashChange);
		handleHashChange(); // Set initial route

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});
</script>

{#if currentRoute === '#/impressum'}
	<Impressum />
{/if}
