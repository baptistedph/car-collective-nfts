import { useState, useEffect } from 'react'

const useApi = (route) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/sections.json`)
        const json = await res.json()

        const sectionData = json.find((section) => {
          return section.route === route
        })

        if (!sectionData) {
          setError("This route doesn't exist.")
        } else {
          setData(
            json.find((section) => {
              return section.route === route
            })
          )
        }
      } catch (err) {
        if (err) {
          setError(err)
        }
      }
    }

    fetchData()
  }, [route])

  return { data, error }
}

export default useApi
