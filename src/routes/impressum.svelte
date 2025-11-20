<script>
	function goBack() {
		window.history.back();
	}
</script>

<div class="impressum-container">
	<div class="impressum-content">
		<h1>Impressum</h1>

		<section>
			<h2>Artist Information</h2>
			<p>
				<strong>Name:</strong> Sandra<br />
				<strong>Email:</strong> contact@example.com<br />
				<strong>Phone:</strong> +1 (555) 000-0000<br />
				<strong>Address:</strong> Your Address Here<br />
				City, State ZIP Code
			</p>
		</section>

		<section>
			<h2>Website Information</h2>
			<p>
				<strong>Website:</strong> www.example.com<br />
				<strong>Responsible for Content:</strong> Sandra<br />
			</p>
		</section>

		<section>
			<h2>Liability for Contents</h2>
			<p>
				As a service provider, we are liable for our own content on these pages in accordance with
				general legislation. However, service providers are not under a general obligation to monitor
				transmitted or stored information or to investigate circumstances that point to illegal activity.
			</p>
		</section>

		<section>
			<h2>Copyright</h2>
			<p>
				The content and works provided on this website are governed by the copyright laws of the
				applicable jurisdiction. Any duplication, processing, distribution, or any form of utilization
				beyond the scope of copyright law will require the prior written consent of the author or
				rightsholder.
			</p>
		</section>

		<div class="back-button-container">
			<button class="back-button" on:click={goBack}>← Back</button>
		</div>
	</div>
</div>

<style>
	.impressum-container {
		width: 100%;
		min-height: 100vh;
		background: var(--secondary-color);
		padding: 4rem 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.impressum-content {
		max-width: 700px;
		width: 100%;
	}

	h1 {
		font-size: clamp(2rem, 8vw, 3.5rem);
		font-weight: 200;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 3rem;
		text-align: center;
		color: var(--primary-color);
	}

	section {
		margin-bottom: 3rem;
	}

	h2 {
		font-size: clamp(1.2rem, 4vw, 1.8rem);
		font-weight: 300;
		letter-spacing: 0.08em;
		margin-bottom: 1rem;
		color: var(--primary-color);
		text-transform: uppercase;
	}

	p {
		font-size: 0.95rem;
		line-height: 1.8;
		color: var(--primary-color);
		margin: 0;
	}

	strong {
		font-weight: 600;
	}

	.back-button-container {
		display: flex;
		justify-content: center;
		margin-top: 4rem;
	}

	.back-button {
		padding: 1rem 2rem;
		background: none;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.back-button:hover {
		background: var(--primary-color);
		color: var(--secondary-color);
	}

	@media (max-width: 640px) {
		.impressum-container {
			padding: 2rem 1rem;
		}

		h1 {
			margin-bottom: 2rem;
		}

		section {
			margin-bottom: 2rem;
		}

		.back-button {
			padding: 0.8rem 1.5rem;
			font-size: 0.85rem;
		}
	}
</style>
