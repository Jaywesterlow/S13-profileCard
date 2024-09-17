<script>
	export let data;

	function checkAvatarImage(avatar) {
		if (avatar.includes('https')) {
			return true;
		}

		return false;
	}
</script>

<main>
	<section>
		<article>
			<h1>{data.persons.name} {data.persons.surname}</h1>

			<p>{data.persons.bio}</p>
		</article>

		<aside>
			<span class="avatar">
				{#if data.persons.avatar.length > 0 && checkAvatarImage(data.persons.avatar)}
					<img src={data.persons.avatar} alt="Avatar van {data.persons.name}" />
				{:else if data.persons.avatar.length > 0 || checkAvatarImage(data.persons.avatar)}
					{data.persons.avatar}
				{:else}
					<img
						src="https://robohash.org/mail@ashallendesign.co.uk"
						alt="Avatar van {data.persons.nickname}"
					/>
				{/if}
			</span>
		</aside>
	</section>
</main>

<style>
  
</style>
