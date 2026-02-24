<script>
	export let data = {};
</script>

<div class="reading-item">
	<img src={data.image} alt="Cover of {data.title}" />
	<div class="reading-details">
		<h3>{data.title}</h3>
		<p class="author">{data.author}</p>
		{#if data.description}
			<p class="description">{data.description}</p>
		{/if}
	</div>
</div>

<style>
	.reading-item {
		display: flex;
		gap: 1.2em;
		align-items: flex-start;
		padding: 1em 0;
		border-bottom: 1px solid var(--border-color, #e5e7eb);
	}

	.reading-item:last-child {
		border-bottom: none;
	}

	img {
		width: 80px;
		height: 110px;
		object-fit: cover;
		border-radius: 4px;
		flex-shrink: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	.reading-details {
		display: flex;
		flex-direction: column;
		gap: 0.3em;
	}

	h3 {
		margin: 0;
		font-size: 1.05em;
		font-weight: 600;
		color: var(--text-primary, #1f2937);
		line-height: 1.3;
	}

	.author {
		margin: 0;
		font-size: 0.9em;
		font-weight: 500;
		color: var(--accent-color, #2563eb);
	}

	.description {
		margin: 0;
		font-size: 0.88em;
		color: var(--text-secondary, #6b7280);
		line-height: 1.5;
	}
</style>
