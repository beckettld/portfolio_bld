<script>
	export let data = {};
</script>

<article>
	<h2>{data.title}</h2>
	<img src={data.image} alt={data.title} />
	<p>{data.description}</p>
</article>

<style>
	article {
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 3;
		margin: 0;
		padding: 20px;
		background: var(--bg-secondary, #f9fafb);
		border-left: 3px solid var(--accent-color, #2563eb);
		border-radius: 4px;
		overflow: hidden;
	}

	h2 {
		margin: 0;
		margin-bottom: 0.5em;
	}

	img {
		width: 100%;
		height: 200px;
		max-width: 100%;
		object-fit: contain;
		margin-bottom: 0.5em;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	p {
		margin: 0;
		overflow-wrap: break-word;
	}
</style>
