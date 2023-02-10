import { useEffect, useRef, useState } from 'react'

export const useOnClickOutside = (initialState = false) => {
	const [isShow, setIsShow] = useState(initialState)
	const ref = useRef(null)

	const handleOutside = e => {
		if (!ref?.current.contains(e.target)) setIsShow(false)
	}

	useEffect(() => {
		document.addEventListener('click', handleOutside, { capture: true })
		document.addEventListener('touch', handleOutside, { capture: true })

		return () => {
			document.removeEventListener('click', handleOutside, {
				capture: true
			})
			document.removeEventListener('touch', handleOutside, {
				capture: true
			})
		}
	})

	return { isShow, setIsShow, ref }
}
