<svelte:head>
	<title>Contact - Beckett Devoe</title>
</svelte:head>

<h1>Contact</h1>

<form action="mailto:bld@mit.edu" method="GET">
	<label>
		Email:
		<input type="email" name="email" value="your.email@example.com" />
	</label>

	<label>
		Subject:
		<input type="text" name="subject" value="Hello" />
	</label>

	<label>
		Message:
		<textarea name="body">Your message here</textarea>
	</label>

	<button type="submit">Send</button>
</form>
