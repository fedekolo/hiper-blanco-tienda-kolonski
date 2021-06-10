export const itemCountStyle = (theme) => {
    return ({
        container:{
            border: '2px solid var(--color-B)',
            "& > span": {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    })  
}