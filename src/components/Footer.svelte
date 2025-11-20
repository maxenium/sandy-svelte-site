<script>
	// Update these with your actual contact information
	const instagram = 'https://instagram.com'; // Replace with your Instagram URL
	const email = 'contact@example.com'; // Replace with your email
	const whatsapp = 'https://wa.me/1234567890'; // Replace with your WhatsApp number

	// Social icons SVG
	const instagramSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>`;
	const emailSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
	const whatsappSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
</script>

<footer class="footer">
	<div class="footer-content">
		<div class="social-links">
			<a
				href={instagram}
				target="_blank"
				rel="noopener noreferrer"
				class="social-icon instagram"
				aria-label="Instagram"
				title="Instagram"
			>
				{@html instagramSVG}
			</a>
			<a
				href={`mailto:${email}`}
				class="social-icon email"
				aria-label="Email"
				title="Email"
			>
				{@html emailSVG}
			</a>
			<a
				href={whatsapp}
				target="_blank"
				rel="noopener noreferrer"
				class="social-icon whatsapp"
				aria-label="WhatsApp"
				title="WhatsApp"
			>
				{@html whatsappSVG}
			</a>
		</div>
		<p class="copyright">
			© {new Date().getFullYear()} Sandra. All rights reserved.
			<span class="separator">·</span>
            <br>
			<a href="#/impressum" class="impressum-link">Impressum</a>
		</p>
	</div>
</footer>

<style>
	.footer {
		box-sizing: border-box;
		width: 100%;
		max-width: 100%;
		padding: 4rem 0;
		background: var(--secondary-color);
		border-top: 1px solid var(--accent-color);
		position: relative;
		z-index: 20;
		overflow-x: visible;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.social-links {
		display: flex;
		gap: 2rem;
		justify-content: center;
		align-items: center;
	}

	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		color: var(--primary-color);
		background: transparent;
		border: 2px solid var(--primary-color);
		transition: all 0.3s ease;
		text-decoration: none;
	}

	.social-icon:hover {
		background: var(--primary-color);
		color: var(--secondary-color);
		transform: scale(1.1);
	}

	.social-icon :global(svg) {
		width: 24px;
		height: 24px;
		stroke: currentColor;
	}

	.copyright {
		font-size: 0.85rem;
		color: var(--accent-color);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		text-align: center;
		margin: 0;
	}

	.separator {
		margin: 0 0.5rem;
		opacity: 0.5;
	}

	.impressum-link {
		color: var(--accent-color);
		text-decoration: none;
		transition: all 0.3s ease;
		border-bottom: 1px solid transparent;
	}

	.impressum-link:hover {
		color: var(--primary-color);
		border-bottom-color: var(--primary-color);
	}

	@media (max-width: 640px) {
		.footer {
			padding: 3rem 1rem;
		}

		.social-links {
			gap: 1.5rem;
		}

		.social-icon {
			width: 40px;
			height: 40px;
		}

		.social-icon :global(svg) {
			width: 20px;
			height: 20px;
		}

		.copyright {
			font-size: 0.75rem;
		}
	}
</style>
