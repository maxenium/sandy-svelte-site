<script>
	const title = 'FROM REGENSBURG';
	const subtitle = 'WITH ♥ TO THE WORLD';
</script>

<section class="visual-journey">
	<div class="blur-overlay" />
	<div class="content">
		<h2 class="journey-title">{title}</h2>
		<p class="journey-subtitle">{subtitle}</p>
	</div>

	<div class="divider-line" />

	<div class="scroll-indicator">
		<span>Continue scrolling</span>
		<div class="arrow">↓</div>
	</div>
</section>

<style>
	.visual-journey {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--secondary-color);
		overflow: hidden;
		z-index: 25;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}


	.content {
		text-align: center;
		margin-bottom: 3rem;
		z-index: 10;
		position: relative;
	}

	.journey-title {
		font-size: clamp(2.5rem, 8vw, 4rem);
		font-weight: 200;
		letter-spacing: 0.15em;
		color: var(--primary-color);
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	.journey-subtitle {
		font-size: clamp(0.9rem, 2vw, 1.1rem);
		color: var(--accent-color);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 300;
	}

	.divider-line {
		width: 60px;
		height: 2px;
		background: var(--primary-color);
		margin: 3rem 0;
		animation: fadeInScale 0.8s ease-out 0.3s backwards;
		position: relative;
		z-index: 10;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		text-align: center;
		z-index: 10;
		animation: bounce 2s infinite;
	}

	.scroll-indicator span {
		display: block;
		font-size: 0.75rem;
		color: var(--accent-color);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.arrow {
		font-size: 1.2rem;
		color: var(--accent-color);
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	@keyframes fadeInScale {
		from {
			opacity: 0;
			transform: scaleX(0);
		}
		to {
			opacity: 1;
			transform: scaleX(1);
		}
	}

	@media (max-width: 640px) {
		.visual-journey {
			height: auto;
			padding: 4rem 1rem;
		}

		.journey-title {
			font-size: clamp(1.8rem, 6vw, 2.5rem);
		}

		.content {
			margin-bottom: 2rem;
		}

		.divider-line {
			width: 50px;
			margin: 2rem 0;
		}

		.scroll-indicator {
			position: relative;
			bottom: auto;
			margin-top: 2rem;
		}
	}
</style>
