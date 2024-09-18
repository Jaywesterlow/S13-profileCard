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

		<article>
				<h1>{data.persons.name} {data.persons.surname}</h1>
				<p>{data.persons.bio}</p>
		</article>
	</section>
</main>

<style>
  main {
	width: 100%;
	height: 100%;
  }

  main section {
	width: 100%;
	height: 100%;
  }

  main section aside {
	position: relative;
	z-index: 5;
	width: calc(200px + 6rem);
	height: calc(200px + 6rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--bg-color);
  }
  
  main section aside::after {
	content: "";
	position: absolute;
	z-index: 4;
	border: 2px solid var(--color-white);
	width: calc(200px + 6rem);
	height: calc(200px + 6rem);
	display: flex;
	flex-direction: column;
	justify-content: center;
  }
  
  main section aside span, main section aside span img {
	width: 100%;
  }
  
  main section article {
	border: 2px solid var(--color-white);
	width: 200px;
	height: 200px;
	padding: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	font-family: "montserrat";
	background-color: var(--bg-color);
  }
  
  main section article h1, main section article p {
	color: var(--color-white);
	margin: .75rem 0 .75rem 0;
  }


</style>
