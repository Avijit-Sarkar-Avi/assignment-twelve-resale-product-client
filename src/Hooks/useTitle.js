import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `BuySalerCKT.com - ${title}`
    }, [title])
}

export default useTitle;