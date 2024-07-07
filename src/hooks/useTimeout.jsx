const useTimeout=(timeout,action)=>{
setTimeout(() => {
    action()
}, timeout);
}

export default useTimeout

