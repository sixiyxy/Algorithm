function useClickOutside(ref: RefObject<HTMLElement>, handler: Function){
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if(!ref.current || ref.current.contains(event.target as HTMLElement)){
                return
            }
            handler(event)
        }
        document.addEventListener('click',listener)
        return () => {
            document.removeEventListener('click', listener)
        }
    }, [ref, handler])
}  

function useDebounce(value: any, delay = 300){
    const [ debouncedValue, setDebouncesValue ] = useState(value)
    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebouncesValue(value)
        },delay)
        return () => {
            clearTimeout(handler)
        }
    },[value, delay])
    return debouncedValue
}


