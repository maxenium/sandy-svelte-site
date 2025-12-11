<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { t } from '../i18n.js';

	let galleryContainer;
	let scrollPosition = 0;
	let currentIndex = 0;
	let autoScrollInterval;
	let selectedPiece = null;
	let isZoomed = false;
	let imgOriginX = 50;
	let imgOriginY = 50;
	let fullscreenImage;

	const artPieces = [
		{
			id: 1,
			title: 'Geometric Forms',
			artist: 'Sandra',
			image:
				'gallery1.jpg',
			year: '2024'
		},
		{
			id: 2,
			title: 'Abstract Layers',
			artist: 'Sandra',
			image:
				'gallery2.jpg',
			year: '2024'
		},
		{
			id: 3,
			title: 'Minimal Composition',
			artist: 'Sandra',
			image:
				'gallery3.jpg',
			year: '2023'
		},
		{
			id: 4,
			title: 'Color Study',
			artist: 'Sandra',
			image:
				'gallery4.jpg',
			year: '2023'
		},
		{
			id: 5,
			title: 'Spatial Rhythm',
			artist: 'Sandra',
			image:
				'gallery5.jpg',
			year: '2022'
		}
	];

	function scrollToIndex(index) {
		if (galleryContainer) {
			const itemWidth = galleryContainer.offsetWidth / 2; // Approximate item width
			const scrollLeft = index * (itemWidth + 32); // 32px is the gap
			galleryContainer.scrollTo({
				left: scrollLeft,
				behavior: 'smooth'
			});
			currentIndex = index;
		}
	}

	function scrollNext() {
		const nextIndex = (currentIndex + 1) % artPieces.length;
		scrollToIndex(nextIndex);
	}

	function scrollPrev() {
		const prevIndex = (currentIndex - 1 + artPieces.length) % artPieces.length;
		scrollToIndex(prevIndex);
	}

	function startAutoScroll() {
		autoScrollInterval = setInterval(() => {
			scrollNext();
		}, 3000);
	}

	function stopAutoScroll() {
		clearInterval(autoScrollInterval);
	}

	function handleScroll(e) {
		scrollPosition = e.target.scrollLeft;
	}

	function openFullscreen(piece) {
		selectedPiece = piece;
	}

	function closeFullscreen() {
		selectedPiece = null;
		// reset zoom when closing
		isZoomed = false;
		imgOriginX = 50;
		imgOriginY = 50;
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') {
			closeFullscreen();
		}
	}

	function toggleZoom(e) {
		// prevent modal from closing when clicking the image (also use stopPropagation on the element)
		e.stopPropagation && e.stopPropagation();
		if (!fullscreenImage) return;

		if (!isZoomed) {
			const rect = fullscreenImage.getBoundingClientRect();
			// compute origin as percentage so transform-origin focuses on clicked point
			imgOriginX = ((e.clientX - rect.left) / rect.width) * 100;
			imgOriginY = ((e.clientY - rect.top) / rect.height) * 100;
			isZoomed = true;
		} else {
			isZoomed = false;
			imgOriginX = 50;
			imgOriginY = 50;
		}
	}

	let maxScroll = 0;

	onMount(() => {
		if (galleryContainer) {
			maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;
		}
		startAutoScroll();
		return () => {
			stopAutoScroll();
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<section class="gallery">
	<div class="gallery-header">
		<div>
			<h2>{$t('featuredWorks')}</h2>
			<p>{$t('collectionDescription')}</p>
		</div>
		<!-- <div class="scroll-indicators">
			<button
				class="scroll-btn prev-btn"
				on:click={scrollPrev}
				aria-label="Scroll left"
			>
				←
			</button>
			<button
				class="scroll-btn next-btn"
				on:click={scrollNext}
				aria-label="Scroll right"
			>
				→
			</button>
		</div> -->
	</div>

	<div class="gallery-container" bind:this={galleryContainer} on:scroll={handleScroll}>
		{#each artPieces as piece, idx (piece.id)}
			<button
				class="gallery-item"
				on:click={() => openFullscreen(piece)}
				on:mouseenter={stopAutoScroll}
				on:mouseleave={startAutoScroll}
				in:fade={{ duration: 600 }}
				aria-label="View {piece.title} fullscreen"
			>
				<div class="item-image-wrapper">
					<img src={piece.image} alt={piece.title} class="item-image" />
					<div class="item-overlay">
						<div class="overlay-content">
							<h3>{piece.title}</h3>
							<p>{piece.year}</p>
						</div>
					</div>
				</div>
				<div class="item-info">
					<h3 class="item-title">{piece.title}</h3>
					<p class="item-artist">{piece.artist}</p>
					<p class="item-year">{piece.year}</p>
				</div>
			</button>
		{/each}
	</div>

	<div class="progress-bar">
		<div
			class="progress-fill"
			style="width: {(scrollPosition / maxScroll) * 100}%"
		/>
	</div>
</section>

<!-- Fullscreen Modal -->
{#if selectedPiece}
	<div
		class="fullscreen-modal"
		transition:fade
		on:click={closeFullscreen}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
	>
		<button class="close-btn" on:click={closeFullscreen} aria-label="Close fullscreen">
			✕
		</button>
		<img
			bind:this={fullscreenImage}
			src={selectedPiece.image}
			alt={selectedPiece.title}
			class="fullscreen-image"
			on:click|stopPropagation={toggleZoom}
			style="transform-origin: {imgOriginX}% {imgOriginY}%; transform: scale({isZoomed ? 2 : 1}); transition: transform 0.35s ease; cursor: {isZoomed ? 'zoom-out' : 'zoom-in'}"
		/>
		<div class="fullscreen-info">
			<h2>{selectedPiece.title}</h2>
			<p class="artist">{selectedPiece.artist}</p>
			<p class="year">{selectedPiece.year}</p>
		</div>
	</div>
{/if}

<style>
	.gallery {
		width: 100%;
		padding: 6rem 2rem;
		background: var(--secondary-color);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		z-index: 20;
		scroll-snap-align: start;
		scroll-snap-stop: always;
	}

	.gallery-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 4rem;
		gap: 2rem;
	}

	.gallery-header h2 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 200;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.gallery-header p {
		font-size: clamp(0.9rem, 2vw, 1rem);
		color: var(--accent-color);
		letter-spacing: 0.05em;
	}

	.scroll-indicators {
		display: flex;
		gap: 1rem;
	}

	.scroll-btn {
		background: none;
		border: 2px solid var(--primary-color);
		width: 50px;
		height: 50px;
		cursor: pointer;
		font-size: 1.2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		color: var(--primary-color);
	}

	.scroll-btn:hover {
		background: var(--primary-color);
		color: var(--secondary-color);
	}

	.gallery-container {
		display: flex;
		gap: 2rem;
		padding: 0;
		overflow-x: scroll;
		scroll-behavior: smooth;
		scroll-snap-type: x mandatory;
		flex: 1;
		margin-bottom: 3rem;
		min-height: 500px;

		/* Hide scrollbar indicator for gallery container (cross-browser)
		   keeps scrolling functional but removes visible scrollbar thumb */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.gallery-container::-webkit-scrollbar {
		height: 0px;
		width: 0px;
		background: transparent;
	}

	.gallery-item {
		flex: 0 0 clamp(250px, 45vw, 500px);
		scroll-snap-align: start;
		transition: all 0.3s ease;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-align: left;
	}

	.item-image-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 3 / 4;
		overflow: hidden;
		margin-bottom: 1.5rem;
		background: var(--accent-color);
	}

	.item-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s ease;
	}

	.gallery-item:hover .item-image {
		transform: scale(1.05);
	}

	.item-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: flex-end;
		padding: 1.5rem;
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.gallery-item:hover .item-overlay {
		opacity: 1;
	}

	.overlay-content {
		color: var(--secondary-color);
	}

	.overlay-content h3 {
		font-size: 1.2rem;
		font-weight: 200;
		letter-spacing: 0.05em;
		margin-bottom: 0.3rem;
	}

	.overlay-content p {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.item-info {
		padding: 0 0.5rem;
	}

	.item-title {
		font-size: 1.1rem;
		font-weight: 300;
		letter-spacing: 0.03em;
		margin-bottom: 0.4rem;
	}

	.item-artist {
		font-size: 0.85rem;
		color: var(--accent-color);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.2rem;
	}

	.item-year {
		font-size: 0.8rem;
		color: var(--accent-color);
	}

	.progress-bar {
		height: 2px;
		background: #f0f0f0;
		position: relative;
		margin: 0;
	}

	.progress-fill {
		height: 100%;
		background: var(--primary-color);
		transition: width 0.3s ease;
	}

	/* Fullscreen Modal */
	.fullscreen-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.95);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		cursor: pointer;
		padding: 2rem;
	}

	.close-btn {
		position: absolute;
		top: 2rem;
		right: 10%;
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		z-index: 1001;
		transition: opacity 0.3s ease;
		padding: 0;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		opacity: 0.7;
	}

	.fullscreen-image {
		max-width: 90vw;
		max-height: 70vh;
		object-fit: contain;
		cursor: default;
	}

	.fullscreen-info {
		position: absolute;
		bottom: 2rem;
		left: 2rem;
		color: white;
		max-width: 400px;
	}

	.fullscreen-info h2 {
		font-size: 2rem;
		font-weight: 200;
		letter-spacing: 0.08em;
		margin-bottom: 0.5rem;
	}

	.fullscreen-info .artist {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.3rem;
	}

	.fullscreen-info .year {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 640px) {
		.gallery {
			padding: 4rem 1rem;
			min-height: auto;
		}

		.gallery-header {
			margin-bottom: 3rem;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.5rem;
		}

		.gallery-header h2 {
			font-size: clamp(1.5rem, 5vw, 2.5rem);
		}

		.scroll-indicators {
			width: 100%;
			justify-content: flex-start;
			gap: 0.8rem;
		}

		.gallery-container {
			gap: 1rem;
			margin-bottom: 2rem;
			min-height: 400px;
		}

		.gallery-item {
			flex: 0 0 clamp(150px, 70vw, 280px);
		}

		.item-image-wrapper {
			aspect-ratio: 3 / 4;
			margin-bottom: 0.8rem;
		}

		.fullscreen-modal {
			padding: 0rem;
		}

		.fullscreen-image {
			max-width: 100vw;
			max-height: 60vh;
		}

		.fullscreen-info {
			bottom: 1rem;
			left: 1rem;
			right: 1rem;
			max-width: none;
		}

		.fullscreen-info h2 {
			font-size: 1.5rem;
		}
	}
</style>
