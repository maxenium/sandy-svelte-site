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
			<address class="artist-address">
				<p><span class="label">Name:</span> Sandra Dischner</p>
				<p><span class="label">Email:</span> <a href="mailto:sandra.dischner@outlook.com">sandra.dischner@outlook.com</a></p>
				<p>
					<span class="label">Address:</span>
					<span class="address-lines">
						Ackersegenweg 14<br />
						93055 Regensburg<br />
						Bavaria<br />
						Germany
					</span>
				</p>
			</address>
		</section>

		<section>
			<h2>Website Information</h2>
			<p>
				<strong>Responsible for Content:</strong> Maximilian Dischner<br />
			</p>
		</section>

		<section>
			<h2>Online Dispute Resolution pursuant to Article 14 (1) ODR Regulation:</h2>
			<p>
				The European Commission provides a platform for online dispute resolution (ODR), which you can find at the following link: <a href="https://ec.europa.eu/consumers/odr"> https://ec.europa.eu/consumers/odr</a>.
			</p>
		</section>
        <section>
			<h2>Notice pursuant to § 36 of the German Consumer Dispute Resolution Act (VSBG):</h2>
			<p>
We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.
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

	/* Artist address formatting */
	.artist-address {
		font-style: normal; /* avoid italic from default address styling */
		margin: 0;
	}

	.artist-address .label {
		display: inline-block;
		width: 8.5rem;
		font-weight: 600;
		vertical-align: top;
	}

	.artist-address .address-lines {
		display: inline-block;
	}

	.artist-address a {
		color: var(--primary-color);
		text-decoration: underline;
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
