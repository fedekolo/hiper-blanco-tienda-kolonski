export const itemCountStyle = (theme) => {
    return ({
        container:{
            border: '1px solid var(--color-B)',
            height: "3.4rem",
            "& > span": {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    })  
}