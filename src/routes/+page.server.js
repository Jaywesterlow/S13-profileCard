import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person/?filter={"id":45}'

  const persons = await fetchJson(url)

  return {
    persons: persons.data[0],
  }
}
