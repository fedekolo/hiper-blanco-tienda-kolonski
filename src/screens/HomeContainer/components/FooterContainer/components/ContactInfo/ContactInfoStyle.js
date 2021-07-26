export const contactInfoStyle = theme => {
    return ({
        container: {
            width: '30%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& iframe': {
                border: 0,
                width: '100%',
                height: '13rem'
            },
            '& div': {
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem'
            }
        },
        btn: {
            color: 'var(--color-B)',
            transform: 'scale(1.2)',
            '&:hover': {
                color: 'var(--color-C)',
                cursor: 'pointer',
                transform: 'scale(1.3)'
            }
        }
    })
}