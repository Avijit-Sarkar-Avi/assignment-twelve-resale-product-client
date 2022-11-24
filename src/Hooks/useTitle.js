import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `BuySaler.com - ${title}`
    }, [title])
}

export default useTitle;