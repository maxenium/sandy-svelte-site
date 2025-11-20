<script>
	export let scrollY = 0;

	$: bumpOpacity = Math.max(0, Math.min(1, (scrollY - 2500) / 300));
	$: bumpScale = 0.95 + bumpOpacity * 0.05;
	$: overlayOpacity = bumpOpacity * 0.6;
</script>

<section class="scroll-bump">
	<div class="background-overlay" style="opacity: {overlayOpacity}" />
	<div class="bump-content" style="opacity: {bumpOpacity}; transform: scale({bumpScale})">
		<div class="accent-line" />
		<h3 class="bump-text">Explore the collection</h3>
		<div class="accent-line" />
	</div>
</section>

<style>
	.scroll-bump {
		position: relative;
		width: 100%;
		max-width: 100%;
		height: 80vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--secondary-color);
		overflow: hidden;
		z-index: 10;
	}

	.background-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		transition: opacity 0.1s linear;
		z-index: 1;
		pointer-events: none;
	}

	.bump-content {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		transition: all 0.1s linear;
		position: relative;
		z-index: 2;
	}

	.accent-line {
		width: 80px;
		height: 1px;
		background: var(--primary-color);
		opacity: 0.3;
	}

	.bump-text {
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		font-weight: 200;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--primary-color);
		white-space: nowrap;
	}

	@media (max-width: 640px) {
		.scroll-bump {
			height: 60vh;
		}

		.bump-text {
			font-size: clamp(1.2rem, 4vw, 1.8rem);
		}

		.accent-line {
			width: 60px;
		}
	}
</style>
