<script>
	const backgrounds = [
		{
			id: 1,
			image: '/art-bg1.jpg',
			title: 'Visual Journey'
		},
		{
			id: 2,
			image: '/art-bg2.jpg',
			title: 'Contemporary Expression'
		},
		{
			id: 3,
			image: '/art-bg3.jpg',
			title: 'Artistic Evolution'
		}
	];
</script>

<div class="scroll-backgrounds-container">
	{#each backgrounds as bg, idx (bg.id)}
		<section class="scroll-background-section">
			<img src={bg.image} alt={bg.title} class="background-image" />
			<div class="overlay" />
			<div class="content">
				<h2>{bg.title}</h2>
			</div>
		</section>
	{/each}
</div>

<style>
	.scroll-backgrounds-container {
		width: 100%;
		/* Make this the scroll container so children can snap into place */
		height: 100vh;
		overflow-y: auto;
		scroll-snap-type: y mandatory;
		-webkit-overflow-scrolling: touch;
		scroll-behavior: smooth;
	}

	.scroll-background-section {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		z-index: 2;
	}

	.content {
		position: relative;
		z-index: 3;
		text-align: center;
		color: white;
	}

	.content h2 {
		font-size: clamp(2rem, 6vw, 4rem);
		font-weight: 200;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin: 0;
	}

	@media (max-width: 640px) {
		.scroll-background-section {
			height: 100vh;
		}

		.content h2 {
			font-size: clamp(1.5rem, 5vw, 2.5rem);
		}
	}
</style>
