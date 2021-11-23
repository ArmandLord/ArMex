import { NotFoundContainer, JustifyNotFound, BtnBack, NavLinks } from './NotFound.styled'

const NotFound = () => {
    return (
        <NotFoundContainer>
            <JustifyNotFound>
                <img src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1637698362/Futbol%20players/Oops_page_not_found_d5mn9b.png" width="100%" styles={{margin: "0 auto"}} />
                <NavLinks to='/'>
            <BtnBack>Return</BtnBack>
            </NavLinks>
            </JustifyNotFound>
        </NotFoundContainer>
    )
}

export default NotFound
