export async function baseRequestProcessing<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw Error(`HTTP ERROR: ${response.status}`);
}
