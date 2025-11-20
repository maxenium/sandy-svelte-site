<script>
	import StartScreen from './components/StartScreen.svelte';
	import ScrollBackgrounds from './components/ScrollBackgrounds.svelte';
	import VisualJourney from './components/VisualJourney.svelte';
	// import ScrollBump from './components/ScrollBump.svelte';
	import Gallery from './components/Gallery.svelte';
	import Footer from './components/Footer.svelte';
	import Impressum from './routes/impressum.svelte';
	import { onMount } from 'svelte';

	let scrollY = 0;
	let currentRoute = '#/';

	$: scrollProgress = Math.min(scrollY / 1000, 1);

	onMount(() => {
		const handleHashChange = () => {
			currentRoute = window.location.hash || '#/';
		};

		window.addEventListener('hashchange', handleHashChange);
		handleHashChange();

		return () => {
			window.removeEventListener('hashchange', handleHashChange);
		};
	});
</script>

<svelte:window bind:scrollY />

{#if currentRoute === '#/impressum'}
	<Impressum />
{:else}
	<div class="app">
		<!-- snap-container only wraps the sections that should snap -->
		<div
			class="snap-container"
			style="height:100vh; overflow-y:auto; scroll-snap-type:y mandatory; scroll-behavior:smooth;"
		>
			<section style="height:100vh; scroll-snap-align:start;">
				<StartScreen {scrollY} />
			</section>

			<section style="height:100vh; scroll-snap-align:start;">
				<ScrollBackgrounds {scrollProgress} />
			</section>

			<section style="height:100vh; scroll-snap-align:start;">
				<VisualJourney />
			</section>
		</div>

		<!-- Gallery is outside the snap container so it does not affect snap scrolling -->
		<div class="gallery-container" style="width:100%;">
			<Gallery />
		</div>

		<br>
		<Footer />
	</div>
{/if}

<style global>
	:root {
		--primary-color: #000;
		--secondary-color: #fff;
		--accent-color: #888;
		--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		--font-serif: 'Georgia', 'Times New Roman', serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		margin: 0;
    	padding: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		scroll-behavior: smooth;
		scroll-snap-type: y mandatory;
	}

	body {
		font-family: var(--font-sans);
		background: var(--secondary-color);
		color: var(--primary-color);
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin: 0;
		padding: 0;
	}

	#app,
	.app {
		width: 100%;
		position: relative;
		display: block;
	}
</style>
