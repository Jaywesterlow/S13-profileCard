<script>
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		const card = document.querySelectorAll('.card');
		const button = document.querySelector(".button");

		document.addEventListener("DOMContentLoaded", fadeIn)

		function fadeIn() {
			card.forEach((i) => {
				i.classList.remove('fade-in');
			});
		}
  	});
	


</script>

<main>
	<section>
		<aside class="card fade-in">
			<span class="avatar">
					<!-- <img src={data.persons.avatar} alt="Avatar van {data.persons.name}" /> -->
			</span>
		</aside>
		<button class="button">Click</button>
		<article class="card fade-in">
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
		position: absolute;
		right: calc(50% + 2px);
		bottom: 40%;
		opacity: 100%;
	}

	main section aside.fade-in {
		margin: 0 0.5rem 0 0;
		opacity: 0%;
	}

	main section aside::after {
		content: '';
		position: absolute;
		z-index: 4;
		border: 2px solid var(--color-white);
		width: calc(200px + 6rem);
		height: calc(200px + 6rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	main section aside span,
	main section aside span img {
		width: 100%;
	}

	main section button {
		cursor: pointer;
		position: absolute;
		padding: .5rem 1rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
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
		font-family: 'montserrat';
		background-color: var(--bg-color);
		position: absolute;
		left: calc(50% + 2px);
		top: 40%;
		opacity: 100%;
	}

	main section article.fade-in {
		margin: 0 0 0 0.5rem;
		opacity: 0%;
	}

	main section article h1,
	main section article p {
		color: var(--color-white);
		margin: 0.75rem 0 0.75rem 0;
	}
</style>
