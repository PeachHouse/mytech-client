import { axios } from '@/libs/axios'

export const useFetcher = () => {
  const fetcher = async <T>(url: string): Promise<T> => {
    return await axios.get(url).then((res) => res.data)
  }

  return {
    fetcher,
  }
}
