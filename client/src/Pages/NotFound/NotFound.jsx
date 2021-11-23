import { NotFoundContainer, JustifyNotFound, BtnBack, NavLinks, NotFoundImg } from './NotFound.styled'

const NotFound = () => {
    return (
        <NotFoundContainer>
            <JustifyNotFound>
                <NotFoundImg src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1637699864/Futbol%20players/Oops_page_not_found_Logos_nhwdml.png" alt="NotFound.png" />
                <NavLinks to='/'>
                    <BtnBack>Return</BtnBack>
                </NavLinks>
            </JustifyNotFound>
        </NotFoundContainer>
    )
}

export default NotFound
