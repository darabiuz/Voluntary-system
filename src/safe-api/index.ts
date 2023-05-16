/** 所有get和post的通用方法都写在这里 */
type RequestOptions = {
  method?: "GET" | "POST"
  body?: any
  headers?: HeadersInit
  credentials?: RequestCredentials
}

/** 这里需要设置baseUrl */
// const baseUrl = "http://127.0.0.1:5001/"
const baseUrl = "http://127.0.0.1:8082/"

const fetchApi = async (url: string, options: RequestOptions): Promise<any> => {
  try {
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      return data
    } else {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error("Fetch error:", error)
    throw error
  }
}

export const get = async (url: string): Promise<any> => {
  const apiUrl = `${baseUrl}${url}`
  return fetchApi(apiUrl, { method: "GET" })
}

export const post = async (
  url: string,
  body: any,
  options?: RequestOptions
): Promise<any> => {
  const apiUrl = `${baseUrl}${url}`
  const headers = { "Content-Type": "application/json" }
  return fetchApi(apiUrl, {
    method: "POST",
    body: JSON.stringify(body),
    headers,
    credentials: "include",
    ...options
  })
}
