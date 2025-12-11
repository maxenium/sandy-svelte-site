<script>
  import { lang, t, setLang } from '../i18n.js';
  export let scrollY = 0;
</script>

<section class="start-screen">
	<div class="background-wrapper">
		<img
			src="gallery3.jpg"
			alt="Hero background"
			class="hero-image"
			style="transform: translateY({scrollY * 0.5}px)"
		/>
		<div class="blur-overlay" />
	</div>

	<div class="content" style="opacity: {Math.max(1 - scrollY / 400, 0)}">
		<h1 class="artist-name">{$t('artistName')}</h1>
		<p class="tagline">{$t('tagline')}</p>
	</div>

	<div class="lang-switch" aria-hidden="false">
		<button class:active={$lang === 'en'} on:click={() => setLang('en')}>ENG</button>
		<span class="pipe">|</span>
		<button class:active={$lang === 'de'} on:click={() => setLang('de')}>DE</button>
	</div>

	<div class="scroll-indicator">
		<span>{$t('scrollIndicator')}</span>
		<div class="arrow">↓</div>
	</div>
</section>

<style>
	.start-screen {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background: var(--secondary-color);
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.background-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.hero-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 120%;
		object-fit: cover;
		filter: blur(3px) brightness(0.6);
	}

	.blur-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.35);
		backdrop-filter: blur(2px);
	}

	.content {
		position: relative;
		z-index: 10;
		text-align: center;
		transition: opacity 0.3s ease;
	}

	.artist-name {
		font-size: clamp(3rem, 12vw, 8rem);
		font-weight: 200;
		letter-spacing: 0.15em;
		color: var(--secondary-color);
		font-family: var(--font-sans);
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: clamp(0.9rem, 2vw, 1.2rem);
		color: rgba(255, 255, 255, 0.75);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-weight: 300;
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;
		z-index: 10;
		animation: bounce 2s infinite;
	}

	.scroll-indicator span {
		display: block;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.6);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.arrow {
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.6);
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(-8px);
		}
	}

	@media (max-width: 640px) {
		.artist-name {
			font-size: clamp(2rem, 8vw, 4rem);
		}

		.scroll-indicator {
			bottom: 1.5rem;
		}
	}


/* Language switch */
.lang-switch {
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 30;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: rgba(255,255,255,0.9);
	font-weight: 600;
	letter-spacing: 0.06em;
}

.lang-switch button {
	background: transparent;
	color: inherit;
	border: none;
	cursor: pointer;
	padding: 0.15rem 0.35rem;
	font-size: 0.85rem;
	text-transform: uppercase;
}

.lang-switch button.active {
	text-decoration: underline;
}

.lang-switch .pipe {
	opacity: 0.6;
	font-weight: 400;
}
</style>
